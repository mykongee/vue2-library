import Vue from 'vue';
import PageTwo from '@/pages/Two/PageTwo.vue';

const app = new Vue({
    render: h => h(PageTwo),
    template: '<div><PageTwo/></div>'
});
export default app.$mount('#two');

// export default app;
