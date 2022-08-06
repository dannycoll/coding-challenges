import { hexToRgba, scaleInRange } from '../utils/helpers';

export class Star {
  x: number;
  y: number;
  slope: number;
  opacity: number;
  speed: number;
  colour: string;
  constructor(canvasWidth: number, canvasHeight: number, colour: string) {
    this.x = Math.floor(Math.random() * canvasWidth - canvasWidth / 2);
    this.y = Math.floor(Math.random() * canvasHeight - canvasHeight / 2);
    this.slope = this.y / this.x;
    this.opacity = 0;
    this.speed = Math.random() * 2;
    this.colour = colour
  }

  update(ctx: CanvasRenderingContext2D) {
    let increment = Math.min(this.speed, Math.abs(this.speed / this.slope));
    this.x += this.x > 0 ? increment : -increment;
    this.y = this.slope * this.x;
    this.opacity += this.speed / 100;
    if (
      Math.abs(this.x) > ctx.canvas.width / 2 ||
      Math.abs(this.y) > ctx.canvas.height / 2
    ) {
      this.x = Math.floor(
        (Math.random() * ctx.canvas.width) / 5 - ctx.canvas.width / 10
      );
      this.y = Math.floor(
        (Math.random() * ctx.canvas.height) / 5 - ctx.canvas.height / 10
      );
      this.slope = this.y / this.x;
      this.opacity = 0;
    }
  }
  show(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = hexToRgba(this.colour, this.opacity);
    // ctx.ellipse(
    //   this.x + ctx.canvas.width / 2,
    //   this.y + ctx.canvas.height / 2,
    //   map(this.opacity, 0, 1, 1, 5),
    //   map(this.opacity, 0, 1, 1, 5),
    //   1,
    //   1,
    //   360
    // );
    ctx.beginPath();
    ctx.arc(
      this.x + ctx.canvas.width / 2,
      this.y + ctx.canvas.height / 2,
      scaleInRange(this.opacity, 0, 1, 1, 2),
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  }
}
