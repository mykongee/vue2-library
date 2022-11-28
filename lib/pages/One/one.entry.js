import Vue from 'vue';
import PageOne from '@/pages/One/PageOne.vue';

export default PageOne; // used in something like te-cc where you need to import directly into a skeleton .vue component

// used when you need to mount it in vanilla javascript/html page. for MFEs
// const app = new Vue({
//     render: h => h(PageOne),
//     template: '<div><PageOne/></div>'
// });
// export default app.$mount('#one');

// export default app;
