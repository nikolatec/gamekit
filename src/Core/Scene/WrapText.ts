import IWrapText from '../Interfaces/IWrapText';
import Game from '../Game';

export default function WrapText({text, x, y, maxWidth, lineHeight}: IWrapText) {
  
  let line = '';
  const words = text.split(' ');

  for(var n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = Game.scene.context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      Game.scene.context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
}