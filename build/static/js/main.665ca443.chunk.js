(this["webpackJsonpreact-axios-intro"]=this["webpackJsonpreact-axios-intro"]||[]).push([[0],{64:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(32),o=a.n(s),i=a(11),l=a(2),j=(a(40),a(4)),h=a.n(j),p=a(34),u=a(9),b=a(13),d=a(10),m=a.n(d);var O=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://ih-crud-api.herokuapp.com/characters");case 3:t=e.sent,r(Object(p.a)(t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table table-hover",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Occupation"}),Object(c.jsx)("th",{children:"Weapon"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:a.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.occupation}),Object(c.jsx)("td",{children:e.weapon}),Object(c.jsxs)("td",{children:[Object(c.jsx)(i.b,{className:"mr-2",to:"/character/".concat(e.id),children:"See Details"}),Object(c.jsx)(i.b,{className:"mr-2",to:"/character/edit/".concat(e.id),children:"Edit"}),Object(c.jsx)(i.b,{className:"btn btn-danger",to:"/character/delete/".concat(e.id),children:"Delete"})]})]},e.id)}))})]})})},x=a(12);var v=function(e){var t=Object(n.useState)({id:"",debt:!1,name:"",occupation:"",weapon:""}),a=Object(b.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(h.a.mark((function t(){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.match.params.id,console.log(a),t.next=5,m.a.get("https://ih-crud-api.herokuapp.com/characters/".concat(a));case 5:c=t.sent,s(Object(x.a)({},c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Character Details"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Name: "}),r.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"ID: "}),r.id]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Occupation: "}),r.occupation]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Is in debt?: "}),r.debt?"Yes":"No"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Weapon: "}),r.weapon]})]})},f=a(15);var g=function(e){var t=Object(n.useState)({name:"",occupation:"",weapon:""}),a=Object(b.a)(t,2),r=a[0],s=a[1];function o(e){s(Object(x.a)(Object(x.a)({},r),{},Object(f.a)({},e.currentTarget.name,e.currentTarget.value)))}function i(){return(i=Object(u.a)(h.a.mark((function t(a){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.post("https://ih-crud-api.herokuapp.com/characters",r);case 3:c=t.sent,console.log(c),e.history.push("/");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(c.jsx)("h1",{children:"New Character"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterName",children:"Name"}),Object(c.jsx)("input",{name:"name",type:"text",className:"form-control",id:"newCharacterName",onChange:o,value:r.name})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterOccupation",children:"Occupation"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"newCharacterOccupation",name:"occupation",onChange:o,value:r.occupation})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterWeapon",children:"Weapon"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"newCharacterWeapon",name:"weapon",onChange:o,value:r.weapon})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})};var N=function(e){var t=Object(n.useState)({name:"",occupation:"",weapon:""}),a=Object(b.a)(t,2),r=a[0],s=a[1],o=e.match.params.id;function i(e){s(Object(x.a)(Object(x.a)({},r),{},Object(f.a)({},e.currentTarget.name,e.currentTarget.value)))}function l(){return(l=Object(u.a)(h.a.mark((function t(a){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.put("https://ih-crud-api.herokuapp.com/characters/".concat(o),r);case 3:c=t.sent,console.log(c),e.history.push("/");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://ih-crud-api.herokuapp.com/characters/".concat(o));case 3:t=e.sent,s(Object(x.a)({},t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(c.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(c.jsx)("h1",{children:"Edit Character"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterName",children:"Name"}),Object(c.jsx)("input",{name:"name",type:"text",className:"form-control",id:"newCharacterName",onChange:i,value:r.name})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterOccupation",children:"Occupation"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"newCharacterOccupation",name:"occupation",onChange:i,value:r.occupation})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"newCharacterWeapon",children:"Weapon"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"newCharacterWeapon",name:"weapon",onChange:i,value:r.weapon})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})};var w=function(e){var t=e.match.params.id;return Object(n.useEffect)((function(){function a(){return(a=Object(u.a)(h.a.mark((function a(){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log(t),a.next=4,m.a.delete("https://ih-crud-api.herokuapp.com/characters/".concat(t));case 4:c=a.sent,console.log(c),e.history.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[t]),Object(c.jsx)("p",{children:"Deleting..."})},y=function(){return Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(c.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Character API Demo"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarText",children:Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsxs)(i.b,{className:"nav-link",to:"/",children:["Home ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{className:"nav-link",to:"/character/new",children:"New Character"})})]})})]})};var k=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(y,{}),Object(c.jsx)("div",{className:"container mt-4",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(l.a,{exact:!0,path:"/character/new",component:g}),Object(c.jsx)(l.a,{exact:!0,path:"/character/edit/:id",component:N}),Object(c.jsx)(l.a,{exact:!0,path:"/character/delete/:id",component:w}),Object(c.jsx)(l.a,{path:"/character/:id",component:v})]})})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.665ca443.chunk.js.map