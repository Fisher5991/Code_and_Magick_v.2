'use strict';

var histogramHeight = 150;
var histogramWidth = 40;
var indent = 50;
var widthBetweenPoints = histogramWidth + indent;
var yourHistogramColor = 'rgba(255, 0, 0, 1)';
var pointX = 155;
var pointY = 240;
var max = 0;/**/
var maxIndex = -1;/**/
var marginTop = 20;
var marginBottom = 10;

var drawHistograms = function (ctx, names, times) {/**/
  var step = histogramHeight / getMaxTime(times);
  times.forEach(function (time, index) {
    ctx.fillStyle = names[index] === 'Вы' ? yourHistogramColor : 'rgba(0, 0, 255, ' + generateNumber(0.1, 1) + ')';
    ctx.fillRect(pointX + widthBetweenPoints * index, pointY - time * step, histogramWidth, time * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(time), pointX + widthBetweenPoints * index, pointY - time * step - marginBottom);
    ctx.fillText(names[index], pointX + widthBetweenPoints * index, pointY + marginTop);
  });
}

var generateNumber = function (min, max) {
  return Math.random() * (max - min) + min;
}

var getMaxTime = function (times) {
  times.forEach(function (time, index) {
    if (time > max) {
      max = time;
      maxIndex = index;
    }
  });
  return max;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(100, 145);
  ctx.lineTo(110, 20);
  ctx.lineTo(310, 10);
  ctx.lineTo(510, 20);
  ctx.lineTo(520, 145);
  ctx.lineTo(510, 270);
  ctx.lineTo(310, 280);
  ctx.lineTo(110, 270);
  ctx.lineTo(100, 145);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  drawHistograms(ctx, names, times);
}
