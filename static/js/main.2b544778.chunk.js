(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),o=n.n(a),s=(n(14),n(3)),i=(n(15),n(2)),j=(n(16),n(0)),b=["robot"];var h=function(e){var t=e.robot,n=(Object(i.a)(e,b),"https://robohash.org/".concat(t.id,"?size=300x300"));return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"Robot Friend Profile",src:n}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.email})]})},l=["data"];var u=function(e){var t=e.data,n=(Object(i.a)(e,l),t.map((function(e,t){return Object(j.jsx)(h,{robot:e},e.id)}))),c=n.length?n:Object(j.jsx)("h2",{children:"Empty!"});return Object(j.jsx)("div",{children:c})},d=n(6),O=n(7),f=n(9),v=n(8),g=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var c,r=Object.assign({},e);return Object(d.a)(this,n),(c=t.call(this,r)).state={hasError:!1},c}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this;return this.state.hasError?Object(j.jsx)("h1",{children:"Oops! An error occured"}):e.props.children}}]),n}(r.a.Component),p=["children"];var x=function(e){var t=e.children;return Object(i.a)(e,p),Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:t})},m=["onSearch"];var C=function(e){var t=e.onSearch;return Object(i.a)(e,m),Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for a Robot",onChange:t})})};var S=function(e){Object.assign({},e);var t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),b=i[0],h=i[1],l=Object(c.useState)(0),d=Object(s.a)(l,2),O=d[0],f=d[1];function v(e){var t=e.target.value;h(t.toLowerCase()),f(O+1)}Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(c.useEffect)((function(){console.log("COU: "+O)}),[O]);var p=r.filter((function(e){return!b.length||(!!e.name.toLowerCase().includes(b)||!!e.email.toLowerCase().includes(b))})),m=r.length?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"f1",children:"Robo Friends"}),Object(j.jsx)(C,{onSearch:v}),Object(j.jsx)(x,{children:Object(j.jsx)(g,{children:Object(j.jsx)(u,{data:p})})})]}):Object(j.jsx)("h2",{children:"Loading..."});return Object(j.jsx)("div",{className:"tc",children:m})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(18);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),w()}},[[19,1,2]]]);
//# sourceMappingURL=main.2b544778.chunk.js.map