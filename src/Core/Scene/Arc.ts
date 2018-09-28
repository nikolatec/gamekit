import IArc from '../Interfaces/IArc';
import Game from '../Game';

export default function Arc({color, x, y, radius, startAngle, endAngle, close}: IArc) {

  Game.scene.context.fillStyle = color;
  Game.scene.context.beginPath();
  Game.scene.context.arc(x, y, radius, startAngle, endAngle, close);
  Game.scene.context.fill();
}