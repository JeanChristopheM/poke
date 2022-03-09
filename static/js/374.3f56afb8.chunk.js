"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[374],{7001:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(5861),a=t(885),s=t(7757),o=t.n(s),c=t(2791),i=t(6893),u=t(9292),l=t(9348),d=t(184),m=function(e){var n=e.show,t=e.setShow,r=e.children,a=function(e){"Escape"===e.code&&t(n=!1),"Enter"===e.code&&e.preventDefault()};return(0,c.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[]),(0,d.jsxs)("div",{className:n?"visible":"visible hidden",children:[(0,d.jsx)("div",{className:"visible__background",onClick:function(){t(n=!1)}}),r]})},f=(t(627),function(e){var n=e.name,t=(0,c.useState)(),s=(0,a.Z)(t,2),f=s[0],p=s[1],h=(0,c.useState)(!1),x=(0,a.Z)(h,2),v=x[0],j=x[1],k=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.o.get("pokemon/".concat(n));case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){k()}),[n]),(0,d.jsxs)(d.Fragment,{children:[f?(0,d.jsxs)("div",{className:"pokemon__card",children:[(0,d.jsxs)("p",{className:"pokemon__id",children:["#",f.id]}),(0,d.jsx)("div",{className:"pokemon__sprite",children:(0,d.jsx)("img",{src:f.sprites.front_default,alt:"sprite"})}),(0,d.jsx)("h3",{className:"pokemon__name",children:n}),(0,d.jsx)("div",{className:"pokemon__type",children:f.types.map((function(e){return(0,d.jsx)("p",{className:e.type.name,children:e.type.name},e.type.name)}))}),(0,d.jsx)("button",{className:"pokemon__detail",onClick:function(){j(!v)},children:"More Details"})]}):(0,d.jsx)("div",{className:"pokemon__load-ctn",children:(0,d.jsx)("div",{className:"pokemon__loading",children:(0,d.jsx)("img",{src:u,alt:"loading"})})}),(0,d.jsx)(m,{show:v,setShow:j,children:(0,d.jsx)("div",{className:"popup",children:(0,d.jsx)(l.Z,{name:n})})})]})})},6833:function(e,n,t){var r=t(5861),a=t(885),s=t(7757),o=t.n(s),c=t(2791),i=t(9348),u=t(6893),l=t(9292),d=t(184);n.Z=function(){var e=(0,c.useState)(),n=(0,a.Z)(e,2),t=n[0],s=n[1],m=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.o.get("pokemon/".concat(Math.floor(810*Math.random()+1)));case 2:(n=e.sent)&&n.data&&s(n.data.name);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){m()}),[]),(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(i.Z,{name:t}):(0,d.jsx)("div",{className:"pokemon__loading",children:(0,d.jsx)("img",{src:l,alt:"loading"})})})}},3566:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(2982),a=t(5861),s=t(885),o=t(7757),c=t.n(o),i=t(2791),u=t(6893),l=t(7001),d=t(5683),m=t(6833),f=t(3853),p=t(184);var h=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),t=n[0],o=n[1],h=(0,i.useState)([]),x=(0,s.Z)(h,2),v=x[0],j=x[1],k=(0,i.useState)([]),Z=(0,s.Z)(k,2),_=Z[0],y=Z[1],g=(0,i.useState)("https://pokeapi.co/api/v2/pokemon"),w=(0,s.Z)(g,2),N=w[0],b=w[1],S=(0,i.useState)(""),E=(0,s.Z)(S,2),C=E[0],I=E[1],F=function(){var e=(0,a.Z)(c().mark((function e(){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.o.get(N);case 2:n=e.sent,t=n.data.results,a=n.data.next,j(t.map((function(e){return e.name}))),n&&null!==a&&(b(a),o((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(v))})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){F()}),[N]),(0,i.useEffect)((function(){C.length>=3&&y(t.filter((function(e){return e.includes(C.toLowerCase())})).map((function(e){return e})))}),[C]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:"page-name",children:"Search for Pok\xe9mon"}),(0,p.jsxs)("div",{className:"searchbar",children:[(0,p.jsx)("label",{htmlFor:"search",children:(0,p.jsx)(f.jRj,{})}),(0,p.jsx)("input",{type:"text",id:"search",placeholder:"Enter Pok\xe9mon name...",onChange:function(e){setTimeout((function(){I(e.target.value)}),2e3)}})]}),(0,p.jsx)("div",{className:"pokemon",children:0===_.length?(0,p.jsx)("div",{className:"pokemon__carousel",children:(0,p.jsxs)(d.Z,{variant:"dark",controls:!1,touch:!0,children:[(0,p.jsx)(d.Z.Item,{children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(d.Z.Item,{children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(d.Z.Item,{children:(0,p.jsx)(m.Z,{})})]})}):_.map((function(e,n){return(0,p.jsx)(l.Z,{name:e},n)}))})]})}},627:function(){},2982:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(907);var a=t(181);function s(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=374.3f56afb8.chunk.js.map