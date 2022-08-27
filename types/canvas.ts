export type drawFn = (
  context: CanvasRenderingContext2D,
  frameCount: number
) => void;

export type CanvasOptions = {
  context?: string;
  width?: number;
  height?: number;
  background?: string;
};
