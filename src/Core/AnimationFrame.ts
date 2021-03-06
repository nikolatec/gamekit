export default class AnimationFrame {

  private requestID: any;
  private fps = 60;

  constructor(fps = 60) {

    this.fps = fps;
  }

  public start(animate: Function) {
    
    let then = performance.now();
    const interval = 1000 / this.fps;

    const animateLoop = (now: number) => {
      this.requestID = requestAnimationFrame(animateLoop);
      const delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        animate(delta);
      }
    };
    this.requestID = requestAnimationFrame(animateLoop);
  }

  public stop() {

    cancelAnimationFrame(this.requestID);
  }
}