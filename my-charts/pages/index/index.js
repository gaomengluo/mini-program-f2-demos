Page({
    data: {
        charts: [
            { name: 'line', value: '折线图' },
            { name: 'area', value: '区域图' },
            { name: 'column', value: '柱状图' },
            { name: 'dodge', value: '分组柱状图' },
            { name: 'stackBar', value: '层叠条形图' },
            { name: 'ring', value: '环图' },
            { name: 'pie', value: '饼图' },
            { name: 'rose', value: '玫瑰图' },
            { name: 'radar', value: '雷达图' },
            { name: 'gauge', value: '仪表盘' },
            { name: 'double-axis', value: '双 Y 轴' },
            { name: 'pixelRatio', value: '精度问题解决方案' }
        ]
    },
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        my.navigateTo({
            url: '../charts/' + page + '/index'
        });
    },
    onLoad: function() {

    }
})