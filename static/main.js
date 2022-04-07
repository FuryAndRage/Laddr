const BASE_URL = '//localhost:5000'
const app = Vue.createApp({
    delimiters:["[[","]]"],
    data(){
        return{
        article:'',
        search:'',
        isLoading: true
        }
    },
    methods:{
        getArticle(){
            this.isLoading = true;
            axios.get(`${BASE_URL}/api/${this.search}`).then(res=>{
                setTimeout(()=>{
                    this.article = JSON.parse(res.data);
                    this.isLoading = false
                },1000)
            })
        },
        loadingOff(){
            setTimeout(()=>{
                this.isLoading = false
            },1000)
        },

    },
    mounted(){  
        this.loadingOff()
    }

}).mount('#app')