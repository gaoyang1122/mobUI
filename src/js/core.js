// ;(function(window) {
//
//     // exit if the browser implements that event
//     if ("onhashchange" in window) { return; }
//
//     var location = window.location,
//         oldURL = location.href,
//         oldHash = location.hash;
//
//     // check the location hash on a 100ms interval
//     setInterval(function() {
//         var newURL = location.href,
//             newHash = location.hash;
//
//         // if the hash has changed and a handler has been bound...
//         if (newHash != oldHash && typeof window.onhashchange === "function") {
//             // execute the handler
//             window.onhashchange({
//                 type: "hashchange",
//                 oldURL: oldURL,
//                 newURL: newURL
//             });
//
//             oldURL = newURL;
//             oldHash = newHash;
//         }
//     }, 100);
//
// })(window);
// if ("onhashchange" in window) {
//     alert("该浏览器支持hashchange事件!");
// }
//
// function locationHashChanged() {
//     if (location.hash === "#somecoolfeature") {
//         somecoolfeature();
//     }
// }
//
// window.onhashchange = locationHashChanged;
//
// //let this snippet run before your hashchange event binding code
// if(!window.HashChangeEvent)(function(){
//     var lastURL=document.URL;
//     window.addEventListener("hashchange",function(event){
//         Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
//         Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
//         lastURL=document.URL;
//     });
// }());
;(function(window) {
    function Router() {
        this.routes = {};
        this.currentUrl = '';
    }
    Router.prototype.route = function(path, callback) {
        this.routes[path] = callback || function(){};
    };
    Router.prototype.refresh = function() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl]();
    };
    Router.prototype.init = function() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
    window.Router = new Router();
    window.Router.init();


})(window);