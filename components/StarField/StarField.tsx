import React from 'react';

import { Star } from '../../models/Star';
import { hexToRgba } from '../../utils/helpers';
import Canvas from '../Canvas';

interface StarFieldProps {
  canvasWidth: number;
  canvasHeight: number;
  numStars: number;
  starColor: string;
  backgroundColor: string;
}
function StarField(props: StarFieldProps) {
  const {
    canvasHeight, canvasWidth, numStars, starColor, backgroundColor,
  } = props;
  const stars = new Array<Star>(numStars);
  stars.map(() => new Star(canvasWidth, canvasHeight, starColor));
  const options = {
    context: '2d',
    background: backgroundColor,
  };
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = hexToRgba(backgroundColor, 0.3);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    stars.forEach((star) => {
      star.update(ctx);
      star.show(ctx);
    });
  };
  return (
    <Canvas
      draw={draw}
      height={canvasHeight}
      width={canvasWidth}
      options={options}
    />
  );
}

export default StarField;
