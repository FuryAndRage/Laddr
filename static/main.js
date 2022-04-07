const BASE_URL = '//localhost:5000'
let app = Vue.createApp({
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
        newLaddr(){
            this.article = ''
            this.search = ''
        },

    },
    mounted(){  
        this.loadingOff()
    }

})

app.component('Loading',{
    template:`
        <div class="d-flex justify-content-center align-items-center " >
            <div class="row justify-content-center">
            <div class="spinner-border text-light" role="status" style="width: 5rem; height: 5rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-center mt-3">Climbing</p>
            </div>
        </div>
    `,
})