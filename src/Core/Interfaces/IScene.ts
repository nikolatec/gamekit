import IWrapText from './IWrapText';
import ISprite from './ISprite';
import IRect from './IRect';

export default interface IScene {
  
  canvas?: any;
  context?: CanvasRenderingContext2D;
  wrapText?(val: IWrapText): void;
  sprite?(va: ISprite): void;
  rect?(val: IRect): void;
  clear?(): void;
}