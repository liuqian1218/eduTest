import Vue from 'vue'
import Router from 'vue-router'

var Home = () => import("views/Home/Home.vue");
var Questions = () => import("views/Questions/Questions.vue")
var Results = () => import("views/Result/Result.vue")

Vue.use(Router);

var router = new Router({
    routes:[
        {
            path:'',
            redirect:"/home",
          },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/questions/:i",
            component:Questions
        },
        {
            path:"/results",
            component:Results
        },
    ],
    mode:"history",
});

export default router