app.component('Loading',{
    props:{
        isLoading: {
            type: Boolean,
            required: true
        }
    },
    template:`
        <div class="d-flex justify-content-center align-items-center " v-if="isLoading" >
            <div class="row justify-content-center">
            <div class="spinner-border text-light" role="status" style="width: 5rem; height: 5rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-center mt-3">Climbing</p>
            </div>
        </div>
    `
})