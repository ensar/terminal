export function drawLine(data, elm) {
  const canvas = document.querySelector('canvas');
  canvas.width =
    elm.getBoundingClientRect().width +
    (elm.getBoundingClientRect().width * 5) / 100;
  canvas.height = elm.getBoundingClientRect().height;

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;

  data?.map((b) => {
    if (b.lineX !== -100) {
      ctx.moveTo(b.boxX + 40, b.boxY + 40);
      ctx.lineTo(b.lineX, b.lineY);
      ctx.stroke();
    }
  });
}
