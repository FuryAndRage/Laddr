const BASE_URL = '//localhost:5000'
const app = Vue.createApp({
    delimiters:["[[","]]"],
    data(){
        return{
        article:'',
        search:''
        }
    },
    methods:{
        getArticle(){
            axios.get(`${BASE_URL}/api/${this.search}`).then(res=>{
                this.article = JSON.parse(res.data)
                console.log(this.article)
            })
        },

    },
    mounted(){
    
    }

}).mount('#app')