Vue.component('search', {
   data(){
       return {
           userSearch: '',
       }
   },
    methods: {
        filter(value){
            let productAPI = this.$root.$refs.products;

            let regexp = new RegExp(value, 'i');
            productAPI.filtered = productAPI.products.filter(el => regexp.test(el.product_name));
        },
    },
    template: `
    <div>
            <form action="#" class="search-form" @submit.prevent="filter(userSearch)">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                    <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                    </button>
            </form>
    </div>
`
});