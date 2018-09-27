import Scene from './Scene';

interface IProps {
  scene: Scene;
  text: string;
  x: number;
  y: number;
  maxWidth: number;
  lineHeight: number;
}

export default function WrapText({scene, text, x, y, maxWidth, lineHeight}: IProps) {
  let line = '';
  const words = text.split(' ');

  for(var n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = scene.context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      scene.context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
}