import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/components/home/HomePage.vue';
import contact from '@/components/layout/contact.vue';
// import navbar from '@/components/layout/navbar.vue';
import NotFound from '@/components/NotFound.vue';
import ProductDetails from '@/components/product/ProductDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/",component:HomePage,name:"home"},
        {path:"/contact-us",component:contact,name:'contact'},
        {path:"/contact",redirect:{name:'contact'}},
        {path:"/product/:productID?",component:ProductDetails,name:'productdetails'},
        {path:"/:catchAll(.*)",component:NotFound},
        
    ]


}
)

export default router;