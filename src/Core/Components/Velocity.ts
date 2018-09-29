import IVelocity from '../Interfaces/IVelocity';

export default class Velocity implements IVelocity {

  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}