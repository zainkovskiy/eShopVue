Vue.component('error', {
   data() {
       return {
           error: '',
       }
   },
    template: `
        <div class="error">{{ error }}</div>
    `
});