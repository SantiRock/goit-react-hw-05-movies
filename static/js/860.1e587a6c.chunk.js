"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[860],{860:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),c=e(791),u=e(689),a=e(41),o={},s=e(184),i=function(t){var n=t.author,e=t.content;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h4",{children:["Author: ",n]}),(0,s.jsx)("p",{className:o.p,children:e})]})},f=function(t){var n=t.reviews;return(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(i,{author:t.author,content:t.content})},t.id)}))})},p=function(){var t=(0,u.UO)().id,n=(0,c.useState)([]),e=(0,r.Z)(n,2),o=e[0],i=e[1],p=(0,c.useState)(""),h=(0,r.Z)(p,2),v=h[0],d=h[1];return(0,c.useEffect)((function(){d("Loading..."),(0,a.Jh)(t).then((function(t){0===t.length?d("We don't have any reviews for this movie."):(d(""),i(t))})).catch((function(){return d("Something went wrong")}))}),[t]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("p",{children:v}),(0,s.jsx)(f,{reviews:o})]})}},41:function(t,n,e){function r(t,n,e,r,c,u,a){try{var o=t[u](a),s=o.value}catch(i){return void e(i)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,u){var a=t.apply(n,e);function o(t){r(a,c,u,o,s,"next",t)}function s(t){r(a,c,u,o,s,"throw",t)}o(void 0)}))}}e.d(n,{IQ:function(){return f},s_:function(){return i},XT:function(){return h},Jh:function(){return p},Hg:function(){return s}});var u=e(757),a=e.n(u),o="0a3a4e00d84de20a8f1b6dfc8a7cdfd5",s=function(){var t=c(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=c(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=c(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=c(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=c(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=860.1e587a6c.chunk.js.map