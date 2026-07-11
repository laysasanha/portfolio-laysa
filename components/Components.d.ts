// Components.d.ts — the complete catalog of the 1 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Animation) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Animation" (node 3:3568)
export interface AnimationProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "facelay" | "facelay2" | "facelay3";
}

declare const Animation: React.FC<AnimationProps>;
declare global {
  interface Window {
    Animation: React.FC<AnimationProps>;
  }
}
