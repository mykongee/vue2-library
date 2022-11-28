import Vue from 'vue';
import PageThree from '@/pages/Three/PageThree.vue';

const app = new Vue({
    render: h => h(PageThree),
    template: '<div><PageThree/></div>'
});
export default app.$mount('#three');

// export default app;
