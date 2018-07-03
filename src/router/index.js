
  const routes = [
    {
      path: '/',
      name: 'layout',
      component: resolve =>require(['../container/layout.vue'],resolve),
      children:[
        {name:'classify',path:'classify',component:resolve =>require(['../container/classify/index.vue'],resolve)},
        {name:'home',path:'home',component:resolve =>require(['../container/home/index.vue'],resolve),} ,
        {name:'mine',path:'mine',component:resolve =>require(['../container/mine/index.vue'],resolve),} ,
        {name:'car',path:'car',component:resolve =>require(['../container/car/index.vue'],resolve),} 
      ],
      redirect: `/mine`,
    }
  ]

  export default routes

