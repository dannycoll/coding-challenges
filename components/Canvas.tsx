import React from 'react';

import useCanvas from '../hooks/useCanvas';
import {
  CanvasOptions,
  drawFn,
} from '../types/canvas';

interface CanvasProps {
  width?: number;
  height?: number;
  draw?: drawFn;
  options?: CanvasOptions;
}

const Canvas = (props: CanvasProps) => {
  const { draw, options, height = 500, width = 500 } = props;
  const { context, ...moreConfig } = options as CanvasOptions;

  const canvasRef = useCanvas(draw as drawFn, { context });
  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ background: options?.background }}
    />
  );
};

export default Canvas;
