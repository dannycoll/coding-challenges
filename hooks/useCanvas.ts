import {
  useEffect,
  useRef,
} from 'react';

import {
  CanvasOptions,
  drawFn,
} from '../types/canvas';

const useCanvas = (draw: drawFn, options: CanvasOptions = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = (canvas as any).getContext(options.context || "2d");
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, options.context]);

  return canvasRef;
};

export default useCanvas;
