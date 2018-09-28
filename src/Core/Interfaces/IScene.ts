import IWrapText from './IWrapText';
import ISprite from './ISprite';
import IRect from './IRect';
import IArc from './IArc';
import IText from './IText';

export default interface IScene {
  
  canvas?: any;
  context?: CanvasRenderingContext2D;
  clear?(): void;
  wrapText?(val: IWrapText): void;
  sprite?(va: ISprite): void;
  rect?(val: IRect): void;
  arc?(val: IArc): void;
  text?(val: IText): void;
}