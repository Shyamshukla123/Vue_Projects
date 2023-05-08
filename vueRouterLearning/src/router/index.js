// Rounting Rule
import {createRouter,createWebHistory} from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CarsView from  '../views/CarsView.vue';
import ContactView from '../views/ContactView.vue';
import NotFounView from '../views/404View.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeView
        },
        {   
            //  reirect is used to redirect the user to the particular path 
            path:"/home",
            redirect:"/"
           
        },
        {
            path:"/about",
            name:"about",
            component:AboutView
        },
        {
            // The colon before id sepecify that this is dynamically renders
            path:"/cars/:id",
            name:"car",
            component:CarsView,
            children:[{
                path:"contact",
                component:ContactView
            }]
        },
        {   
            // thgis path is use full for the all paths which are not exists
            path:"/:catchall(.*)*",
            name:"Not Found",
            component:NotFounView
        }
    ]
})

export default router;