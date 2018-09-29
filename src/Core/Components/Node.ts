import INode from '../Interfaces/INode';

export default class Node implements INode {

  public id = '';
  public color = '';

  constructor(id: string, color: string) {
    this.id = id;
    this.color = color;
  }
}