//Layout
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },

];

const privateRouters = [];

export { publicRouters, privateRouters };
