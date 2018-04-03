<template>
    <div class="f">
        <p>count值是多少呢？---：{{number}}</p>
        <div class="c">
            <p>子组件</p> 
            <TestComponent :callback="callback"/>
        </div>
    </div>
</template>

<script>
import TestComponent from '../src/index.vue';

export default {
    name: 'App',
    data() {
        return {
            number: '未知'
        }
    },
    components: { TestComponent },
    methods: {
        callback( count ) {
            console.log(count);
            this.number = count;
        }
    }
}
</script>

<style>
    * {padding: 0; margin: 0;}
    ul, li {
        list-style: none;
    }
</style>
<style lang="less" scoped>
    .f {
        width: 80%;
        margin: 100px auto;
        text-align: center;

        >p {
            margin-bottom: 20px;
        }

        .c {
            border: 1px solid #ccc;
            padding: 20px;

            > p {
                margin-bottom: 20px;
            }
        }
    }
</style>
