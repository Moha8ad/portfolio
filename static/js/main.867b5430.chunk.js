(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),i=n.n(a),l=n(18),s=n.n(l),o=n(7),p=(n(27),n(2)),d=n(21),u=n(22),h=n(10),j=n(11),m=n(13),b=n(12),f=(n(28),n(1)),g=function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(f.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(f.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"Enter..."})]})]})},O=(Object(p.f)(g),n(35),["id"]),x=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={sections:[{title:"rolodex",imageUrl:"https://www.publicdomainpictures.net/pictures/60000/nahled/damask-pattern-background-orange.jpg",linkUrl:"rolodex",id:1},{title:"app2",imageUrl:"https://w7.pngwing.com/pngs/1011/981/png-transparent-pink-magenta-pattern-pink-background-texture-point-pink-background.png",linkUrl:"app2",id:2},{title:"app3",imageUrl:"https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2011/02/background-pattern-design-26.jpg",linkUrl:"app3",id:3},{title:"app4",imageUrl:"https://bgpattern.com/wp-content/uploads/2020/06/Simple-green-Geometric-Pattern.png",linkUrl:"app4",size:"large",id:4},{title:"app5",imageUrl:"https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png",linkUrl:"app4",size:"large",id:5}]},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(u.a)(e,O);return Object(f.jsx)(g,Object(d.a)({},n),t)}))})}}]),n}(i.a.Component),v=(n(36),function(){return Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)(x,{})})}),k=(n(37),function(e){return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("img",{alt:"character",src:"https://robohash.org/".concat(e.character.id,"?set=set5&&size=180x180")}),Object(f.jsx)("h3",{children:e.character.name}),Object(f.jsx)("p",{children:e.character.email})]})}),w=(n(38),function(e){return Object(f.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(f.jsx)(k,{character:e},e.id)}))})}),y=(n(39),function(e){var t=e.placeholder,n=e.changeHandle;return Object(f.jsx)("input",{className:"search",type:"search",text:"search",placeholder:t,onChange:n})}),E=(n(40),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).changeHandle=function(e){r.setState({searchField:e.target.value})},r.state={characters:[],searchField:""},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({characters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(f.jsxs)("div",{className:"rolodex",children:[Object(f.jsx)("h1",{className:"blinking",children:"Character Rolodex"}),Object(f.jsx)(y,{placeholder:"Search Characters",changeHandle:this.changeHandle}),Object(f.jsx)(w,{characters:r})]})}}]),n}(a.Component)),N=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function S(e,t){var n=e.title,i=e.titleId,l=C(e,N);return a.createElement("svg",U({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":i},l),void 0===n?a.createElement("title",{id:i},"Group"):n?a.createElement("title",{id:i},n):null,r||(r=a.createElement("desc",null,"Created with Sketch.")),c||(c=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var I=a.forwardRef(S),P=(n.p,n(41),function(){return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(o.b,{className:"logo-container",to:"/app-profile/",children:Object(f.jsx)(I,{className:"logo"})}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)(o.b,{className:"option",to:"/rolodex",children:"ROLODEX"}),Object(f.jsx)(o.b,{className:"option",to:"/rolodex",children:"CONTACT"})]})]})});n(42);var R=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(P,{}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/app-profile/",component:v}),Object(f.jsx)(p.a,{path:"/rolodex",component:E})]})]})};s.a.render(Object(f.jsx)(o.a,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.867b5430.chunk.js.map