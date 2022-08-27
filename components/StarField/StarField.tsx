import { Star } from "../../models/Star";
import { hexToRgba } from "../../utils/helpers";
import Canvas from "../Canvas";

interface StarFieldProps {
  canvasWidth: number;
  canvasHeight: number;
  numStars: number;
  starColor: string;
  backgroundColor: string;
}
const StarField = (props: StarFieldProps) => {
  const { canvasHeight, canvasWidth, numStars } = props;
  const stars = new Array<Star>(numStars);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star(canvasWidth, canvasHeight, props.starColor);
  }
  const options = {
    context: "2d",
    background: props.backgroundColor,
  };
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.fillStyle = hexToRgba(props.backgroundColor, 0.3);
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
