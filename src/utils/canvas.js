/**
 * 获取屏幕比
 * @param ctx
 * @returns {number}
 */
export function getPixelRatio (ctx) {
  const backingStore = ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1
  return (window.devicePixelRatio || 1) / backingStore
}

/**
 * 测量文字的宽度
 * @param ctx
 * @param text
 * @returns {number}
 */
export function calcTextWidth (ctx, text) {
  return ctx.measureText(text).width
}

/**
 * 获取字体
 * @param fontSize
 * @param fontFamily
 * @returns {string}
 */
export function getFont (fontSize, fontFamily = 'Arial') {
  return `${fontSize}px ${fontFamily}`
}

/**
 * 绘制水平直线
 * @param ctx
 * @param y
 * @param left
 * @param right
 */
export function drawHorizontalLine (ctx, y, left, right) {
  ctx.beginPath()
  const correction = (ctx.lineWidth % 2) ? 0.5 : 0
  ctx.moveTo(left, y + correction)
  ctx.lineTo(right, y + correction)
  ctx.stroke()
  ctx.closePath()
}

/**
 * 绘制垂直直线
 * @param ctx
 * @param x
 * @param top
 * @param bottom
 */
export function drawVerticalLine (ctx, x, top, bottom) {
  ctx.beginPath()
  const correction = (ctx.lineWidth % 2) ? 0.5 : 0
  ctx.moveTo(x + correction, top)
  ctx.lineTo(x + correction, bottom)
  ctx.stroke()
  ctx.closePath()
}

/**
 * 绘制线
 * @param ctx
 * @param drawFuc
 */
export function strokeInPixel (ctx, drawFuc) {
  ctx.save()
  if (ctx.lineWidth % 2) {
    ctx.translate(0.5, 0.5)
  }
  drawFuc()
  ctx.restore()
}
