<template>
    <el-card>
        <div id="bar"></div>
    </el-card>
</template>

<script>
export default {
    name: 'barEchart',
    data() {
        return {}
    },
    props: {
        chartData: Array,
    },
    mounted() {
        let mychart = this.$echarts.init(document.getElementById("bar"))
        mychart.setOption({
            title: {
                text: '柱状图模板'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: this.chartData.map(item => item.x),
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    // data: [120, 200, 150, 80, 70, 110, 130],
                    data: this.chartData.map(item => item.y),
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        })
    },
}
</script>
<style lang="scss" scoped>
.el-card {
    width: 33.1%;
    margin-bottom: 5px;

    #bar {
        height: 310px;
    }
}
</style>