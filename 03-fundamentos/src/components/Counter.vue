<template>
    <h2>Counter!!!!</h2>
    <p>{{this.counter}} <sup>2</sup> = {{squereCounter}}</p>


</template>

<script>
export default {

    data(){
        return{
            counter: 5
        }
    },
    methods: {
        getSquareValue(){
            return this.counter * this.counter
        }
    },
    computed: {
        squereCounter(){
            return this.counter * this.counter
        }
    }

}
</script>

<style>

</style>