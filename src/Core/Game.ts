import Scene from './Scene/Scene';

class Game {

  private fps: number = 60;
  private showFps: boolean = false;
  private previousDrawTime: number;
  scene: any;
  private entites: any = {};

  constructor({width = 400, height = 400} : any) {

    this.run = this.run.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.scene = new Scene({width, height});
  }

  public getEntites() {
    return this.entites;
  }

  public createGame({width = 400, height = 400, fps = 60, showFps = false} : any) {

    this.fps = fps;
    this.showFps = showFps;
    this.scene = new Scene({width, height});
    return this;
  }

  public run() {
    
    requestAnimationFrame(this.gameLoop);
  }

  private gameLoop(timestamp: number) {

    // Throttle the frame rate.    
    if (timestamp < this.previousDrawTime + (1000 / this.fps) - 16) {
      requestAnimationFrame(this.gameLoop);
      return;
    }

    this.update();
    this.draw(timestamp);
    requestAnimationFrame(this.gameLoop);
  }

  private update() {
    
    try {
      for (let key in this.entites) {
        for (let entity of this.entites[key]) {
          entity.update(this.scene);
        }
      }
    }
    catch (err) {
      this.handleError(err);
    }
  }

  private draw(timestamp: number) {

    try {
      this.scene.clear();
      for (let key in this.entites) {
        for (let entity of this.entites[key]) {
          entity.draw(this.scene);
        }
      }
      this.showFps && this.drawFps(timestamp);
      this.previousDrawTime = timestamp;
    }
    catch (err) {
      this.handleError(err);
    }
  }

  private handleError(err: Error) {
    
    const unit = 10;
    const leftMargin = this.scene.canvas.width * 0.1;
    const topMargin = this.scene.canvas.height * 0.1;
    const maxWidth = this.scene.canvas.width * 0.8;
    this.scene.context.fillStyle = 'red';
    this.scene.context.font = `${unit * 3}px Arial`;
    this.scene.context.fillText(err.message, this.scene.canvas.width * 0.1, topMargin);
    this.scene.context.font = `${unit * 2}px Arial`;
    this.scene.wrapText({
      text: err.stack,
      x: leftMargin,
      y: topMargin + unit * 3,
      maxWidth,
      lineHeight: 20
    });
    // this.scene.context.fillText(err.stack, 100, 140);
  }

  private drawFps(timestamp: number) {

    const fps = Math.floor(1000 / (timestamp - this.previousDrawTime));
    this.scene.context.font = '10px Arial';
    this.scene.context.fillStyle = 'white';
    this.scene.context.fillText(fps, this.scene.canvas.width - 17, 10);
  }
}

export default new Game({width: 400, height: 400});