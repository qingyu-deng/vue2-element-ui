<template>
    <el-card>
        <div id="simple"></div>
    </el-card>
</template>

<script>
export default {
    name: 'simpleEchart',
    data() {
        return {}
    },
    mounted() {
        let mychart = this.$echarts.init(document.getElementById("simple"))
        mychart.setOption({
            title: {
                text: '丁格尔玫瑰图模板'
            },
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    // mark: { show: true },
                    // dataView: { show: true, readOnly: false },
                    // restore: { show: true },
                    // saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 100],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 40, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' }
                    ]
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

    #simple {
        height: 310px;
    }
}
</style>