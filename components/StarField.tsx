import { Star } from '../models/Star';
import Canvas from './Canvas';

interface StarFieldProps {
  canvasWidth: number;
  canvasHeight: number;
  numStars: number;
}
const StarField = (props: StarFieldProps) => {
  const { canvasHeight, canvasWidth, numStars } = props;
  const stars = new Array<Star>(numStars);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star(canvasWidth, canvasHeight);
  }
  const options = {
    context: "2d",
    background: "#000000",
  };
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.fillStyle = "rgba(0, 0, 0, .3)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < stars.length; i++) {
      stars[i].update(ctx);
      stars[i].show(ctx);
    }
  };
  return (
    <Canvas
      draw={draw}
      height={canvasHeight}
      width={canvasWidth}
      options={options}
    />
  );
};

export default StarField;
