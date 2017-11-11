import 'babel-polyfill'

import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式

import '../src/js/common.js' //全局公共js

/*
* highlight theme
* */
import 'highlight.js/styles/color-brewer.css';

// import './scss/bootstrap.scss'
// import './scss/bootstrap-grid.scss'
// import './scss/bootstrap-reboot.scss'

import '../src/css/docs.css'

//引入主体样式文件css
import '../src/css/base.css'
import '../src/css/style.scss'



import moblink from './moblink.md'


const app = document.getElementById('app');
const handfunc = (comp)=>{
    app.innerHTML = comp
}
const routeStting = [
    { path: '/', component: moblink },
]

routeStting.forEach((itme)=>{
    Router.route(itme.path, function() {
        handfunc(itme.component)

        // code 展示隐藏
        var elements = document.getElementsByClassName('code-control');
        for(var i=0;i<elements.length;i++){
            elements[i].onclick = function(){
                var sibling = this.previousElementSibling;
                var clientHeight = sibling.children[0].clientHeight;
                if(sibling.style.height === '' || sibling.style.height === '0px'){
                    sibling.style.height = clientHeight + 'px';
                }else{
                    sibling.style.height = '0px';
                }
            }
        };

    });
})






// Router.route('/', function() {
//     require.ensure([], function(require) {
//         var content = require('./docs/components/alerts.md');
//         console.log(app)
//         app.innerHTML = content
//     },'alerts')
// });
// Router.route('/alerts', function() {
//     require.ensure([], function(require) {
//         var content = require('./docs/components/alerts.md');
//         app.innerHTML = content
//     },'alerts')
// });
// Router.route('/buttons', function() {
//     require.ensure([], function(require) {
//         var content = require('./docs/components/buttons.md');
//         app.innerHTML = content
//     },'buttons')
// });
// Router.route('/forms', function() {
//     require.ensure([], function(require) {
//         var content = require('./docs/components/forms.md');
//         app.innerHTML = content
//     },'forms')
// });




