import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/components/home/HomePage.vue';
import contact from '@/components/layout/contact.vue';
// import navbar from '@/components/layout/navbar.vue';
import NotFound from '@/components/NotFound.vue';
import ProductDetails from '@/components/product/ProductDetails.vue';

// import data from './components/home/HomePage.vue';

// console.log(data);

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/",component:HomePage,name:"home"},
        {path:"/contact-us",component:contact,name:'contact'},
        {path:"/contact",redirect:{name:'contact'}},
        // {path:`"/product/${data[index].category}/${data[index.id]}"`,component:ProductDetails,name:'product'},
        {path:"/product/:productCategory/:productID?",component:ProductDetails,name:'product'},
        // {path:"/product/Waffle/1",component:ProductDetails,name:'product'},
        {path:"/:catchAll(.*)",component:NotFound},
        
    ]


}
)

export default router;