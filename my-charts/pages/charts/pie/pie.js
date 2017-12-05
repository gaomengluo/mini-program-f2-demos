const F2 = require('../../../util/f2');
const F2Render = require('../../../util/render');
const app = getApp();

Page({
  data: {},
  onReady() {
    this.drawPie();
    this.drawRing();
    this.drawRose();
    this.drawCascade();
  },
  drawPie() {
    const data = [
      {a: '1', b: 0.3, c: '1'},
      {a: '1', b: 0.3, c: '2'},
      {a: '1', b: 0.4, c: '3'}
    ];

    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('pie'), 300, 200),
    });

    chart.source(data);

    chart.coord('polar', {
      transposed: true,
      inner: 0
    });

    chart.axis(false);
    chart.interval().position('a*b').color('c').adjust('stack');
    chart.render();
  },
  drawRing() {
    const  data = [
        {a: '1', b: 0.3, c: '1'},
        {a: '1', b: 0.3, c: '2'},
        {a: '1', b: 0.4, c: '3'}
    ];

    const chart = new F2.Chart({
        el: new F2Render(my.createCanvasContext('ring'), 300, 200)
    });

    chart.source(data);

    chart.coord('polar', {
        transposed: true,
        inner: 0.6
    });

    chart.axis(false);
    chart.interval().position('a*b').color('c').adjust('stack');
    // chart.animate({
    //     type: 'wavec'
    // });
    chart.render();
  },
  drawRose() {
    const data = [
        {"tem":7,"city":"tokyo"},
        {"tem":4,"city":"newYork"},
        {"tem":3,"city":"berlin"}
      ];
    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('rose'), 300, 200)
    });

    chart.source(data, {
      tem: {
        min: 0,
        nice: false
      }
    });

    chart.coord('polar', {
      inner: 0
    });

    chart.axis(false);
    chart.interval().position('city*tem').color('city');
    chart.render();
  },
  drawCascade() {
    const  data = [
      {a: '1', b: 0.2, c: '1'},
      {a: '2', b: 0.5, c: '1'},
      {a: '3', b: 0.4, c: '1'},

      {a: '1', b: 0.8, c: '2'},
      {a: '2', b: 0.5, c: '2'},
      {a: '3', b: 0.6, c: '2'}
    ];
    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('cascade'), 300, 200)
    });

    chart.source(data);
    chart.coord('polar', {
      transposed: true,
      inner: 0.5
    });

    chart.axis(false);
    chart.interval().position('a*b').color('c').adjust('stack');
    chart.render();
  }
});
