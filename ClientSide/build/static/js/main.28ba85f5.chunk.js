(this.webpackJsonpfmc=this.webpackJsonpfmc||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/Background.df11b0f9.jpeg"},17:function(e,a,t){e.exports=t.p+"static/media/archery.0fe5c480.png"},25:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(15),r=t.n(l),i=t(2),o=t(7),s=t(16),m=t.n(s),u=t(6);function d(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)("Select Place"),i=Object(u.a)(r,2),o=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],v=d[1];Object(n.useEffect)((function(){l(["Pollachi","Coimbatore","Banglore","Udumalpet"]),console.log("Clicked")}),[]);var p=t.map((function(e,a){return c.a.createElement("p",{className:"list",onClick:function(){!function(e){s(e),v(!E)}(e)},key:a},e)}));return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"Selector_container"},c.a.createElement("div",{className:"selector",onMouseEnter:function(){return v(!E)},onClick:function(){v(!E)}},o),c.a.createElement("div",{className:E?"dropdown":"hidden"},p)))}var E=t(17),v=t.n(E);function p(){var e=Object(n.useState)([{id:"1",serviceName:"Elite Badminton",serviceType:"Badminton"},{id:"2",serviceName:"Fmc Badminton",serviceType:"Badminton"},{id:"3",serviceName:"Snh Badminton",serviceType:"Archery"},{id:"4",serviceName:"Gnh Bandminton",serviceType:"Basketball"}]),a=Object(u.a)(e,2),t=a[0];a[1];Object(n.useEffect)((function(){}),[]);var l=t.map((function(e,a){return c.a.createElement(i.b,{to:"/detailedServices/".concat(e.serviceType,"/").concat(a)},c.a.createElement("div",{key:a,className:"Card"},c.a.createElement("div",{className:"SportPic",style:{backgroundImage:"url("+v.a+")"}}),c.a.createElement("p",null,e.serviceType)))}));return c.a.createElement(n.Fragment,null,l)}function f(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"InputBox_Container"},c.a.createElement("div",{className:"SelectBox_Container"},c.a.createElement(d,null),c.a.createElement("i",{className:"fas fa-angle-down"})),c.a.createElement("input",{className:"InputBox",placeholder:"Search Court or Sport",type:"text"}),c.a.createElement("button",{className:"SearchButton"},c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement("div",{className:"CardContainer"},c.a.createElement(p,null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"nib"},c.a.createElement(i.b,{to:"/allservices"},c.a.createElement("p",null,"See More"))))))}function b(){var e={backgroundImage:"url("+m.a+")",position:"relative",width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center center"};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"App",style:e},c.a.createElement(f,null)))}function h(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){l(!1)}),[]);var r=function(){l(!t)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"Header"},c.a.createElement("div",{className:"HeaderRow"},c.a.createElement("div",{className:"Bobble",onClick:r},c.a.createElement("i",{className:"fas fa-align-left"})))),c.a.createElement("div",{className:"Nav",style:t?{height:"100vh"}:{height:"0px"}},c.a.createElement("div",{className:"NavRow"},c.a.createElement("div",{className:"NavLinks",style:t?{opacity:1}:{opacity:0}},c.a.createElement(i.b,{onClick:r,to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement(i.b,{onClick:r,to:"/aboutus"},c.a.createElement("p",null,"About Us")),c.a.createElement(i.b,{onClick:r,to:"/contactus"},c.a.createElement("p",null,"Contact Us")),c.a.createElement(i.b,{onClick:r,to:"/locateus"},c.a.createElement("p",null,"Locate Us")),c.a.createElement(i.b,{onClick:r,to:"/howitworks"},c.a.createElement("p",null,"How It Works"))))))}var N=t(20),g=t(21),k=t(23),w=t(22),S=t(24),y=function(e){function a(){var e,t;Object(N.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(k.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(c)))).greet=function(){console.log("Greeted")},t}return Object(S.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("button",{onClick:this.greet,style:{margin:100}},"Click Me"))}}]),a}(n.Component);function C(){return c.a.createElement("div",null,c.a.createElement("p",null,"About us Page"),c.a.createElement(y,null))}function j(){return c.a.createElement("div",null,c.a.createElement("p",null,"Contact us Page"))}function O(){return c.a.createElement("div",null,c.a.createElement("p",null,"Locate us Page"))}function x(){return c.a.createElement("div",null,c.a.createElement("p",null,"How It Works"))}function B(){var e=Object(o.f)(),a=e.id,t=e.service;return c.a.createElement("div",null,c.a.createElement("p",null,"Detailed ",t," page ",a))}function A(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"banner"}),c.a.createElement("div",{className:"layout p-t-20"},c.a.createElement("div",{className:"row m-b-20"},c.a.createElement("div",{className:"circle"},c.a.createElement("p",null,"1")),c.a.createElement("div",null,c.a.createElement("p",null,"Racket Sports"))),c.a.createElement("div",{className:"servicesCard m-b-20"},c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service"))),c.a.createElement("div",{className:"row m-b-20"},c.a.createElement("div",{className:"circle"},c.a.createElement("p",null,"1")),c.a.createElement("div",null,c.a.createElement("p",null,"Racket Sports"))),c.a.createElement("div",{className:"servicesCard m-b-20"},c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service"))),c.a.createElement("div",{className:"row m-b-20"},c.a.createElement("div",{className:"circle"},c.a.createElement("p",null,"1")),c.a.createElement("div",null,c.a.createElement("p",null,"Racket Sports"))),c.a.createElement("div",{className:"servicesCard m-b-20"},c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service"))),c.a.createElement("div",{className:"row m-b-20"},c.a.createElement("div",{className:"circle"},c.a.createElement("p",null,"1")),c.a.createElement("div",null,c.a.createElement("p",null,"Racket Sports"))),c.a.createElement("div",{className:"servicesCard m-b-20"},c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")),c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Service")))))}var W=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(i.a,null,c.a.createElement(h,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",render:function(){return c.a.createElement(b,null)}}),c.a.createElement(o.a,{exact:!0,path:"/aboutus",component:C}),c.a.createElement(o.a,{exact:!0,path:"/contactus",component:j}),c.a.createElement(o.a,{exact:!0,path:"/locateus",component:O}),c.a.createElement(o.a,{exact:!0,path:"/howitworks",component:x}),c.a.createElement(o.a,{exact:!0,path:"/allservices",component:A}),c.a.createElement(o.a,{exact:!0,path:"/detailedServices/:service/:id",component:B}))))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(35);r.a.render(c.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");P?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(a,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.28ba85f5.chunk.js.map