import Vue from 'vue'
import Router from 'vue-router'
import PostsView from '../components/PostsView';
import SinglePostView from '../components/SinglePostView';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: PostsView
    },
    {
        path: '/post',
        component: SinglePostView
    }]
})