# Using buster as plantuml has font problems on alpine
FROM ruby:3-slim-bullseye

# Upgrade and install basic dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y wget unzip

# Install ADR tools
WORKDIR /tools
RUN wget https://github.com/npryce/adr-tools/archive/refs/tags/3.0.0.zip && \
    unzip 3.0.0.zip && \
    mv adr-tools-3.0.0 adr-tools && \
    rm 3.0.0.zip
ENV PATH="$PATH:/tools/adr-tools/src"

# asciidoctor, extensions, and dependencies
RUN apt-get install -y --no-install-recommends openjdk-11-jdk graphviz
RUN gem install asciidoctor asciidoctor-kroki asciidoctor-pdf

# Install Plantuml (use nodot version so we can use newer graphviz versions)
RUN mkdir -p /plantuml && \
    wget http://sourceforge.net/projects/plantuml/files/plantuml-nodot.1.2022.14.jar/download -O /plantuml/plantuml-nodot.1.2022.14.jar

ENV DIAGRAM_PLANTUML_CLASSPATH="/plantuml/plantuml-nodot.1.2022.14.jar"

WORKDIR /src
