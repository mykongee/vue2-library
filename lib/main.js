import Vue from 'vue';
import App from '@/App.vue';

const app = new Vue({
    render: h => h(App),
    template: '<div><App/></div>'
});
export default app.$mount('#one');

// export default app.$mount;
