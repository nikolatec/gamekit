import Game from '../Game';

export default function Clear(color: string) {

  Game.scene.context.fillStyle = color;
  Game.scene.context.fillRect(0, 0, Game.scene.canvas.width, Game.scene.canvas.height);
}