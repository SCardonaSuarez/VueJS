const app = Vue.createApp({


    // template: `
    
    //     <h1>Hola Santo</h1>
    //     <p>Desde app.js</p>
    
    // `

    data(){
        return{
            quote: 'Hola Santo',
            author: 'Bruce Wyne'
        }
    },
    methods:{
        changeQuote(){
            console.log('Hola mundo')
            this.author = 'Santiago Cardona'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')