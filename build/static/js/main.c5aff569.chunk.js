(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(3),a=n.n(u),c=n(1),l=(n(14),n(4)),i=n(5),s=n(7),C=n(6),f=n(8),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(C.a)(t).call(this,e))).state={count:e.initialCount},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("Render Counter"),o.a.createElement(d.Consumer,null,(function(t){return o.a.createElement("div",null,o.a.createElement("button",{style:t,onClick:function(){return e.changeCount(-1)}},"-"),o.a.createElement("span",null,e.state.count),o.a.createElement("button",{style:t,onClick:function(){return e.changeCount(1)}},"+"))}))}},{key:"changeCount",value:function(e){this.setState((function(t){return{count:t.count+e}}))}}]),t}(r.Component);function m(e){var t=e.initialCount;console.log("Render Counter Hooks");var n=Object(r.useState)(t),u=Object(c.a)(n,2),a=u[0],l=u[1],i=Object(r.useContext)(d);return o.a.createElement("div",null,o.a.createElement("button",{style:i,onClick:function(){return l((function(e){return e-1}))}},"-"),o.a.createElement("span",null,a),o.a.createElement("button",{style:i,onClick:function(){return l((function(e){return e+1}))}},"+"))}var d=o.a.createContext();var E=function(){console.log("Render app");var e=Object(r.useState)("red"),t=Object(c.a)(e,2),n=t[0],u=t[1];return o.a.createElement(d.Provider,{value:{backgroundColor:n}},"Counter",o.a.createElement(b,{initialCount:0}),"Counter Hooks",o.a.createElement(m,{initialCount:0}),o.a.createElement("button",{onClick:function(){return u((function(e){return"red"===e?"blue":"red"}))}},"Toggle Theme"))};n(15);a.a.render(o.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c5aff569.chunk.js.map