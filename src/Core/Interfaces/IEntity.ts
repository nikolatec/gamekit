import INode from './INode';
import IPoint from './IPoint';
import ITransform from './ITransform';
import IVelocity from './IVelocity';
import IScene from '../Interfaces/IScene';

export default interface IEntity {
  node: INode;
  point?: IPoint;
  transform?: ITransform;
  velocity?: IVelocity;
  draw?(scene: IScene):void;
  update?(scene: IScene):void;
  getEntitiesById?(id: string):void;
};