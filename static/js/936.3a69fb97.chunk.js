"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{155:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(87),a=n(689),u="MoviesList_container__0JGj2",c=n(184),i=function(e){var t=e.movies,n=(0,a.TH)();return(0,c.jsx)("div",{className:u,children:(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(433),a=n(439),u=n(791),c=n(474),i=n(508),s=n(155),o="Home_detailName__i9P4m",f=n(184),p=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],p=t[1],d=(0,u.useState)(!1),h=(0,a.Z)(d,2),v=h[0],m=h[1];return(0,u.useEffect)((function(){m(!0),(0,i.z5)().then((function(e){p((function(t){return(0,r.Z)(e.results)}))})).catch((function(e){console.log(e.message)})).finally((function(){return m(!1)}))}),[]),(0,f.jsxs)("main",{children:[v&&(0,f.jsx)(c.Z,{}),(0,f.jsx)("h1",{className:o,children:" Trending today "}),n.length>0&&(0,f.jsx)(s.O,{movies:n})]})}},508:function(e,t,n){n.d(t,{Ku:function(){return d},Pg:function(){return f},fI:function(){return p},z5:function(){return s},z8:function(){return v}});var r=n(861),a=n(757),u=n.n(a),c=n(912),i=c.Z.create({baseURL:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:"1798748ad7a054d7f6a9e9dee1e1d177"}}),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("",{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=c.Z.create({baseURL:"https://api.themoviedb.org/3/movie",params:{api_key:"1798748ad7a054d7f6a9e9dee1e1d177"}}),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/".concat(t),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/".concat(t,"/reviews"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/".concat(t,"/credits"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=c.Z.create({baseURL:"https://api.themoviedb.org/3/search/movie",params:{api_key:"1798748ad7a054d7f6a9e9dee1e1d177"}}),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.3a69fb97.chunk.js.map