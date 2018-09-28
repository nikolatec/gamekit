import Game from '../Game';

export default function CalculateMousePosition(event: any) {

  const canvasFrame = Game.scene.canvas.getBoundingClientRect();
  const root = document.documentElement;
  const x = event.clientX - canvasFrame.left - root.scrollLeft;
  const y = event.clientY - canvasFrame.left - root.scrollTop;
  return { x, y };
}