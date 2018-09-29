import Game from '../Game';
import IEntity from '../Interfaces/IEntity';
import IScene from '../Interfaces/IScene';
import Node from './Node';
import Point from './Point';
import Transform from './Transform';
import Velocity from './Velocity';

export default abstract class Entity implements IEntity {

  public node: Node;
  public point: Point;
  public transform: Transform;
  public velocity: Velocity;
  public entites = Game.getEntites();
  
  constructor({
    node = new Node('uuid', 'white'),
    point = new Point(0, 0),
    transform = new Transform(0, 0),
    velocity = new Velocity(0, 0),
  }) {

    this.node = node;
    this.point = point;
    this.transform = transform;
    this.velocity = velocity;

    if (!this.entites[node.id]) {
      this.entites[node.id] = [];
    }

    this.entites[node.id].push(this);
  }

  abstract draw(scene: IScene): void;
  abstract update(scene: IScene): void;

  public getEntitiesById(id: string) {
    
    return this.entites[id];
  }
}