/* prettier-ignore-start */
/* eslint-disable */

/******************************************************************************
 * This file was generated
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import type { PropsWithChildren } from 'react'
import type { JSX } from 'react/jsx-runtime'
import type {
  LikeC4ViewProps as GenericLikeC4ViewProps,
  ViewData,
  LikeC4Model,
  ReactLikeC4Props as GenericReactLikeC4Props
} from 'likec4/react'

type LikeC4ViewId =
  | "apiApp"
  | "context"
  | "customer"
  | "ibsContainers"
  | "index"
  | "mobileApp"
  | "spa"
  | "support"
  | "webapp";

type LikeC4ElementKind =
  | "component"
  | "container"
  | "database"
  | "enterprise"
  | "existingsystem"
  | "mobileApp"
  | "person"
  | "softwaresystem"
  | "spa"
  | "staff";

type LikeC4Tag =
  never;

type LikeC4ViewData = ViewData<LikeC4ViewId>

/**
 * @deprecated alias, use LikeC4ViewData instead
 */
type LikeC4DiagramView = LikeC4ViewData

declare const LikeC4Views: {
  readonly [K in LikeC4ViewId]: LikeC4ViewData
};
type LikeC4ViewsData = typeof LikeC4Views;
declare function isLikeC4ViewId(value: unknown): value is LikeC4ViewId;

declare const likeC4Model: LikeC4Model.Layouted;
declare function useLikeC4Model(): LikeC4Model.Layouted;
declare function useLikeC4View(viewId: LikeC4ViewId): LikeC4ViewData;
declare function useLikeC4ViewModel(viewId: LikeC4ViewId): LikeC4Model.Layouted.ViewModel;

declare function LikeC4ModelProvider(props: PropsWithChildren): JSX.Element;

type IconRendererProps = {
  node: {
    id: string
    title: string
    icon?: string | undefined
  }
}
declare function RenderIcon(props: IconRendererProps): JSX.Element;

type LikeC4ViewProps = GenericLikeC4ViewProps<LikeC4ViewId, LikeC4Tag, LikeC4ElementKind>;
declare function LikeC4View({viewId, ...props}: LikeC4ViewProps): JSX.Element;

type ReactLikeC4Props =
  & Omit<GenericReactLikeC4Props<LikeC4ViewId, LikeC4Tag, LikeC4ElementKind>, 'view' | 'renderIcon'>
  & {
    viewId: LikeC4ViewId
  };
declare function ReactLikeC4({viewId, ...props}: ReactLikeC4Props): JSX.Element;

export {
  type LikeC4ViewId,
  type LikeC4Tag,
  type LikeC4ElementKind,
  type LikeC4ViewData,
  type LikeC4ViewsData,
  type LikeC4DiagramView,
  type LikeC4ViewProps,
  type ReactLikeC4Props,
  isLikeC4ViewId,
  useLikeC4Model,
  useLikeC4View,
  useLikeC4ViewModel,
  likeC4Model,
  LikeC4Views,
  LikeC4ModelProvider,
  LikeC4View,
  RenderIcon,
  ReactLikeC4
}
/* prettier-ignore-end */
