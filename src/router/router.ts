import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: "index",
        path: '/',
        component: () => import(/* webpackChunkName: "index" */ '@pages/index/indexTsx.tsx'),
        meta: {
            title: '书籍详情'
        }
    },
    {
        name: "host",
        path: '/host',
        component: () => import(/* webpackChunkName: "index" */ '@pages/host/host.vue'),
        meta: {
            title: '作者详情'
        }
    },
    {
        name: "writer",
        path: '/writer',
        component: () => import(/* webpackChunkName: "index" */ '@pages/writer/writer.vue'),
        meta: {
            title: '作者'
        }
    },
];

const createRouters = createRouter({
    history: createWebHashHistory(),
    routes,
    // @ts-ignore
    scrollBehavior (to, from, savePosition)  {
        if(savePosition && to.meta.keepalive) {
            return savePosition;
        }
        return {left:0, top:0}
    },
});

// 路由拦截
createRouters.beforeEach((to, from, next) => {
    next();
});

export default createRouters;

