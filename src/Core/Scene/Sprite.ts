import ISprite from '../Interfaces/ISprite';
import Game from '../Game';

export default function Sprite({image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight }: ISprite) {
  
  Game.scene.context.drawImage(
    image,
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight
  );
}