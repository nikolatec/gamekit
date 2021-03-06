import IRect from '../Interfaces/IRect';
import Game from '../Game';

export default function Rect({color, x, y, width, height}: IRect) {

  Game.scene.context.fillStyle = color;
  Game.scene.context.fillRect(x, y, width, height);
}