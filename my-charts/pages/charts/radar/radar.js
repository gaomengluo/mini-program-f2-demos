const F2 = require('../../../util/f2');
const F2Render = require('../../../util/render');
const app = getApp();

Page({
  data: {},
  onReady() {
    const data = [
      {name: '张飞',props: '智力', value: 65},
      {name: '张飞',props: '武力', value: 97},
      {name: '张飞',props: '政治', value: 50},
      {name: '张飞',props: '统帅', value: 92},
      {name: '张飞',props: '忠诚', value: 100},

      {name: '关羽',props: '智力', value: 80},
      {name: '关羽',props: '武力', value: 94},
      {name: '关羽',props: '政治', value: 70},
      {name: '关羽',props: '统帅', value: 95},
      {name: '关羽',props: '忠诚', value: 99}
    ];

    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('canvas'), 600, 600)
    });

    chart.coord('polar');

    chart.source(data, {
      value: {
        min: 0,
        tickInterval: 20
      }
    });

    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('props', {
      label: {
        fontSize: 14
      },
      line: null
    });
    chart.axis('value', {
      label: {
        fontSize: 14
      }
    });

    chart.line().position('props*value').color('name');
    chart.render();

  }
});
