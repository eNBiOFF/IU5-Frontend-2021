(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n,s=c(1),o=c.n(s),a=c(7),l=c.n(a),i=c(3),r=c(6),d=(c(12),c(0));function j(e){var t=e.title,c=e.id,n=e.oncl;return Object(d.jsxs)("div",{className:"done_todos",id:c,children:[Object(d.jsx)("label",{className:"labelclass",children:t}),Object(d.jsx)("span",{className:"krest",id:c,onClick:n,children:"x"})]})}function b(e){var t=e.title,c=e.id_todos1,n=e.onclk,s=e.oncl;return Object(d.jsxs)("div",{id:c,className:"todoboll",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"inp",type:"checkbox",id:c,onClick:n}),Object(d.jsx)("label",{children:t})]}),Object(d.jsx)("span",{className:"krest",id:c,onClick:s,children:"x"})]})}var u=function(){var e=o.a.useState([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=o.a.useState([]),l=Object(r.a)(a,2),u=l[0],O=l[1],h=-1,x=-1;return Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("span",{children:"My Pretty Todos"})}),Object(d.jsxs)("div",{className:"Todos",children:[Object(d.jsxs)("div",{className:"to_do",children:[Object(d.jsx)("span",{className:"nameform",children:"Will be done:"}),Object(d.jsxs)("div",{className:"form",id:"todos1",children:[c.map((function(e){return h++,console.log(e),Object(d.jsx)(b,{title:e,id_todos1:h,onclk:function(e){return function(e){console.log(e.target.id);var t=c.find((function(t,c,n){return c===parseFloat(e.target.id)}));console.log(t),c.splice(parseFloat(e.target.id),1),s(c),O([].concat(Object(i.a)(u),[t])),e.target.checked=!1}(e)},oncl:function(e){return function(e){console.log(e.target.id),c.splice(parseFloat(e.target.id),1),s(Object(i.a)(c)),console.log(c)}(e)}})})),Object(d.jsx)("input",{id:"todo",placeholder:"write here your todos and press the enter",onKeyDown:function(e){return function(e){"Enter"===e.key&&(console.log(e.target.value),n=e.target.value,s([].concat(Object(i.a)(c),[n])),console.log(c),e.target.value="")}(e)}})]})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{className:"but_wbd",onClick:function(){s([])},children:"\u0421lear will be done"}),Object(d.jsx)("button",{className:"but_wbd",onClick:function(e){return s([]),void O([])},children:"Clear all"}),Object(d.jsx)("button",{className:"but_wbd",onClick:function(){O([])},children:"Clear done"})]}),Object(d.jsxs)("div",{className:"to_do",children:[Object(d.jsx)("span",{className:"nameform",children:"Done:"}),Object(d.jsx)("div",{className:"form",children:u.map((function(e){return x++,Object(d.jsx)(j,{title:e,id:x,oncl:function(e){return function(e){var t=u.find((function(t,c,n){return c===parseFloat(e.target.id)}));u.splice(parseFloat(e.target.id),1),O(u),s([].concat(Object(i.a)(c),[t]))}(e)}})}))})]})]})]})};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.08149297.chunk.js.map