<template>
    <h2>{{customTitle}}</h2>
    <p>{{this.counter}} <sup>2</sup> = {{squereCounter}}</p>

    <div class="botones-conta">
        <button @:click="increase">+1</button>
        <button @:click="decrease">-1</button>

    </div>

</template>

<script>
import { ValidationError } from 'schema-utils'


export default {

    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator(value){
                return value >= 0
            }
        }
    },


    data(){
        return{
            counter: this.start
        }
    },
    methods: {
        getSquareValue(){
            return this.counter * this.counter
        },

        increase(){
            //  this.counter =  this.counter + 1
            this.counter++
        },
        decrease(){
            //  this.counter = this.counter - 1
            this.counter--
        }
    },
    computed: {
        squereCounter(){
            return this.counter * this.counter
        },

        customTitle(){
            //La mejor opcion
            return this.title || 'Counter'

            //Segunda Opcion con el ternario
            // return this.title ? this.title : 'Counter'
            // return !this.title ? 'Counter': this.title


            // if(!this.title){
            //     return 'Counter'
            // }else{
            //     return this.title
            // }
        }
    }

}
</script>

<style>

button{
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: #fff;
    cursor: pointer;
    margin:  0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3 ease-in-out;
}

</style>