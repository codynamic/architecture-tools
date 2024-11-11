import { execSync } from 'child_process';
import { readdirSync, statSync, rmSync, mkdirSync } from 'fs';
import path from 'path';

const runCommand = (c4FilePath) => {
  const srcDir = path.resolve('src/diagrams');
  const generatedDir = path.resolve('.generated');

  // Calculate the relative path from src/diagrams to the .c4 file's directory
  const relativeDir = path.relative(srcDir, path.dirname(c4FilePath));
  const outputDir = path.join(generatedDir, relativeDir);

  // Ensure the output directory exists
  mkdirSync(outputDir, { recursive: true });

  try {
    // Run the CLI command with the calculated output path
    const output = execSync(`npx likec4 codegen react ${path.dirname(c4FilePath)} --outfile ${outputDir}/index.js`, {
      stdio: 'pipe'
    }).toString();

    console.log(`Command output for ${c4FilePath}: ${output}`);
  } catch (error) {
    console.error(`Error executing command for ${c4FilePath}: ${error.message}`);
    if (error.stderr) {
      console.error(`Command error output: ${error.stderr.toString()}`);
    }
  }
};

const clearGeneratedDir = () => {
  const generatedDir = path.resolve('.generated');
  rmSync(generatedDir, { recursive: true, force: true });
  mkdirSync(generatedDir, { recursive: true });
};

const findC4Files = (dir) => {
  const c4Files = [];

  const traverse = (currentDir) => {
    const files = readdirSync(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (stat.isFile() && file.endsWith('.c4')) {
        // Add the .c4 file path to the list
        c4Files.push(filePath);
      }
    }
  };

  traverse(dir);
  return c4Files;
};

export default function watchC4Plugin() {
  return {
    name: 'watch-c4-files-and-run-command',
    buildStart() {
      clearGeneratedDir();

      const srcDir = path.resolve('src/diagrams');
      const c4Files = findC4Files(srcDir);
      c4Files.forEach(runCommand);
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.c4')) {
        runCommand(file);
        server.ws.send({
          type: 'full-reload',
          path: '*',
        });
      }
    },
  };
}