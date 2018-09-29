import ITransform from '../Interfaces/ITransform';

export default class Transform implements ITransform {

  public width: number = 0;
  public height: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}