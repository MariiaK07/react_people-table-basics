(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),r=c(5),a=c(0),j=c(2),i=(c(17),c(18),c(8)),l=c.n(i),b=c(1),o=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(r.b,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item is-tab",{"is-active":t})},children:"Home"}),Object(b.jsx)(r.b,{to:"/people",className:function(e){var t=e.isActive;return l()("navbar-item is-tab",{"is-active":t})},children:"People"})]})})}),Object(b.jsx)("main",{className:"container pl-3 pr-3 mt-5",children:Object(b.jsx)(j.a,{})})]})},h=function(){return Object(b.jsx)("div",{className:"columns",children:Object(b.jsx)("div",{className:"column",children:Object(b.jsx)("h1",{className:"title",children:"Home page"})})})},d=c(11),O=c(4),x=c(9),u=c.n(x),p=function(e){var t=e.person;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.sex}),Object(b.jsx)("td",{children:t.born}),Object(b.jsx)("td",{children:t.died}),Object(b.jsx)("td",{children:t.motherName||"unknown"}),Object(b.jsx)("td",{children:t.fatherName||"unknown"})]},t.name)},m=function(e){var t=e.people;return Object(b.jsxs)("table",{className:"table",style:{borderCollapse:"collapse"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(p,{person:e})}))})]})},v=(c(21),c(12)),f=function(){return Object(b.jsx)("div",{className:"notification is-danger is-light",children:"An error occured when loading people!"})},N=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(O.a)(s,2),j=r[0],i=r[1],l=Object(a.useState)(!1),o=Object(O.a)(l,2),h=o[0],x=o[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){if(!e.ok)throw new Error("".concat(e.status,"-").concat(e.statusText));return e.json()}));case 4:t=e.sent,n(t),i(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),x(!0),i(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{className:"columns",children:Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("h1",{className:"title",children:"People page"}),j&&Object(b.jsx)(v.a,{color:"#485FC7",height:40,width:40}),c.length>0&&Object(b.jsx)(m,{people:c}),h&&Object(b.jsx)(f,{})]})})},g=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},w=function(){return Object(b.jsx)(j.d,{children:Object(b.jsxs)(j.b,{path:"/",element:Object(b.jsx)(o,{}),children:[Object(b.jsx)(j.b,{index:!0,element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.b,{path:"/home",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.b,{path:"people",element:Object(b.jsx)(N,{})}),Object(b.jsx)(j.b,{path:"*",element:Object(b.jsx)(g,{})})]})})};s.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3e3443ea.chunk.js.map