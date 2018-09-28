import Game from '../Game';

export default function Clear() {

  Game.scene.context.fillStyle = 'black';
  Game.scene.context.fillRect(0, 0, Game.scene.canvas.width, Game.scene.canvas.height);
}