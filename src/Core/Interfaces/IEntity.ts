import INode from './INode';
import IColor from './IColor';
import IPoint from './IPoint';
import ITransform from './ITransform';
import IVelocity from './IVelocity';

export default interface IEntity extends INode, IColor, IPoint, ITransform, IVelocity {};