<template>
    <div class="box">
        <barEcharts :chartData="barList" />
        <lineEchart :lineData="lineList" />
        <pieEchart />
        <radarEchart />
        <barStackEchart />
        <simpleEchart />
    </div>
</template>

<script>
import barEcharts from './components/barEcharts.vue';
import lineEchart from './components/lineEchart.vue';
import pieEchart from './components/pieEchart.vue';
import radarEchart from './components/radarEchart.vue';
import barStackEchart from './components/barStackEchart.vue';
import simpleEchart from './components/simpleEchart.vue';
export default {
    components: {
        barEcharts,
        lineEchart,
        pieEchart,
        radarEchart,
        barStackEchart,
        simpleEchart
    },
    data() {
        return {
            barList: [
                { x: 'Mon', y: 120 },
                { x: 'Tue', y: 123 },
                { x: 'Wed', y: 231 },
                { x: 'Thu', y: 451 },
                { x: 'Fri', y: 21 },
                { x: 'Sat', y: 413 },
                { x: 'Sun', y: 312 },
            ],
            lineList: [
                { text: 'Mon', value: 120 },
                { text: 'Tue', value: 123 },
                { text: 'Wed', value: 231 },
                { text: 'Thu', value: 451 },
                { text: 'Fri', value: 21 },
                { text: 'Sat', value: 413 },
                { text: 'Sun', value: 312 },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>