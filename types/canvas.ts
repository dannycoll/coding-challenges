export type context = {
  fillStyle: string;
  beginPath: () => void;
  arc: (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => void;
  fill: () => void;
  clearRect: (x: number, y: number, width: number, height: number) => void;
  canvas: HTMLCanvasElement;
};

export type drawFn = (context: context, frameCount: number) => void;

export type CanvasOptions = {
  context?: string;
  width?: number;
  height?: number;
};
