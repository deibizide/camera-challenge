(this["webpackJsonpcamera-challenge"]=this["webpackJsonpcamera-challenge"]||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},21:function(e,a,t){},22:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),i=t.n(r),o=(t(21),t(22),t(14)),l=t(15),s=t(8),m=t(6),u=t(7),d=t(11),f=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],s=o[1],m=e.videoRef,u=e.canvasRef,f=0,v={video:{width:{min:1280,ideal:1920,max:2560},height:{min:720,ideal:1080,max:1440}}};return Object(n.useEffect)((function(){navigator&&navigator.mediaDevices||console.log("Camera API is not available in your browser"),navigator.mediaDevices.getUserMedia(v).then((function(e){m.current.srcObject=e,m.current.play()})).catch((function(e){console.log("An error occurred: ".concat(e))})),m.current.addEventListener("canplay",(function(){l||(f=m.current.videoHeight/(m.current.videoWidth/320),s(!1))}))}),[]),{getPicture:function(){u.current.getContext("2d").drawImage(m.current,0,0,320,f);var e=u.current.toDataURL("image/png");r(e)},imageSrc:c}},v=(t(28),function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=f({canvasRef:e,videoRef:a}).getPicture;return c.a.createElement(o.a,{className:"take-picture__container"},c.a.createElement("video",{ref:a,className:"w-100 mt-5"},c.a.createElement("track",{default:!0,kind:"captions",srcLang:"en"})),c.a.createElement("div",{className:"text-center my-5"},c.a.createElement("p",{className:""},"Press the button to preview the image"),c.a.createElement(l.a,{className:"d-flex justify-content-center row"},c.a.createElement(s.a,{variant:"info",className:"btn mx-3",onClick:t},c.a.createElement(m.a,{icon:u.a})),c.a.createElement(s.a,{variant:"info",className:"btn d-flex align-items-center mx-3",onClick:t},c.a.createElement(m.a,{icon:u.c}),c.a.createElement("p",{className:"m-0 px-3"},"Switch Camera")))),c.a.createElement("h2",{className:"text-center m-0"},"Preview Image"),c.a.createElement("div",{className:"text-center d-flex flex-column"},c.a.createElement("canvas",{ref:e,className:"w-100 mb-5"}),c.a.createElement(s.a,{variant:"info",className:"btn d-flex align-items-center justify-content-center mx-3",onClick:t},c.a.createElement("p",{className:"m-0 px-3"},"Send"),c.a.createElement(m.a,{icon:u.b}))))}),g=function(){return c.a.createElement("div",{className:"main"},c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.17907178.chunk.js.map