import IText from '../Interfaces/IText';
import Game from '../Game';

export default function Text({text, color, font, fontSize, x, y}: IText) {

  Game.scene.context.fillStyle = color;
  if (font && color && fontSize) {
    Game.scene.context.font = `${fontSize}px ${font}`;
  }
  Game.scene.context.fillText(text, x, y);
}