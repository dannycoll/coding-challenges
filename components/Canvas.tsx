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

function Canvas(props: CanvasProps) {
  const {
    draw, options, height, width,
  } = props;
  const { context } = options as CanvasOptions;

  const canvasRef = useCanvas(draw as drawFn, { context });
  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ background: options?.background }}
    />
  );
}

Canvas.defaultProps = {
  width: 500,
  height: 500,
  draw: undefined,
  options: undefined,
};

export default Canvas;
