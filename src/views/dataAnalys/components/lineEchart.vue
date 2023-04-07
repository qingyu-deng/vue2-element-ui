<template>
    <el-card>
        <div id="line"></div>
    </el-card>
</template>

<script>
export default {
    name: 'lineEchart',
    props: {
        lineData: Array,
    },
    mounted() {
        let mychart = this.$echarts.init(document.getElementById("line"))
        mychart.setOption({
            title: {
                text: '折线图模板'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: this.lineData.map(item => item.text),
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    // data: [150, 230, 224, 218, 135, 147, 260],
                    data: this.lineData.map(item => item.value),
                    type: 'line'
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

    #line {
        height: 310px;
    }
}
</style>