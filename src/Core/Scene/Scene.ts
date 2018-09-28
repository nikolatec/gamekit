import ITransform from '../Interfaces/ITransform';
import IWrapText from '../Interfaces/IWrapText';
import ISprite from '../Interfaces/ISprite';
import IRect from '../Interfaces/IRect';
import WrapText from './WrapText';
import Sprite from './Sprite';
import Clear from './Clear';
import Rect from './Rect';

export default class Scene {

  private canvas: any;
  context: CanvasRenderingContext2D;

  constructor(props?: ITransform) {

    const {width = 400, height = 400} = props;
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width  = width;
    this.canvas.height = height;
  }

  public clear() {

    Clear();
  }

  public sprite({image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight}: ISprite) {

    Sprite({image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight});
  }

  public wrapText({text, x, y, maxWidth, lineHeight}: IWrapText) {

    WrapText({text, x, y, maxWidth, lineHeight});
  }

  public rect({color, x, y, width, height}: IRect) {

    Rect({color, x, y, width, height});
  }
}