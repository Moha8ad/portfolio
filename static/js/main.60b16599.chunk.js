(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],{36:function(e,t,o){},37:function(e,t,o){},40:function(e,t,o){},41:function(e,t,o){},42:function(e,t,o){},43:function(e,t,o){},44:function(e,t,o){},45:function(e,t,o){},46:function(e,t,o){},47:function(e,t,o){},48:function(e,t,o){},49:function(e,t,o){"use strict";o.r(t);var a,n,r,i,c,h,s,u,l,d,m,f,y,b,p,g,w,v,j,q,M,O,k,z,x,E,I,S,C,H,T,V,A,L,W,N=o(0),B=o.n(N),J=o(17),R=o.n(J),U=o(13),F=o(26),P=o(15),D=o(24),G=o.n(D),Y=o(16),K="SET_CURRENT_MONSTER",Z={currentMonster:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===K?Object(Y.a)(Object(Y.a)({},e),{},{currentMonster:t.payload}):e},_=Object(P.b)({monster:Q}),X=[G.a],$=Object(P.c)(_,P.a.apply(void 0,X)),ee=(o(36),o(3)),te=o(27),oe=o(8),ae=o(9),ne=o(11),re=o(10),ie=(o(37),o(1)),ce=Object(ee.f)((function(e){var t=e.title,o=e.subtitle,a=e.imageUrl,n=e.size,r=e.history,i=e.linkUrl,c=e.match;return Object(ie.jsxs)("div",{className:"".concat(n," menu-item"),onClick:function(){return r.push("".concat(c.url).concat(i))},children:[Object(ie.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),Object(ie.jsxs)("div",{className:"content",children:[Object(ie.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(ie.jsx)("span",{className:"subtitle",children:o})]})]})})),he=(o(40),["id"]),se=function(e){Object(ne.a)(o,e);var t=Object(re.a)(o);function o(){var e;return Object(oe.a)(this,o),(e=t.call(this)).state={sections:[{title:"rolodex",subtitle:"live search",imageUrl:"https://illlustrations.co/static/c1f8fe70d30e487be31c2d47ba4ced6d/day73-writing-tool.png",linkUrl:"rolodex",id:1},{title:"Quotes",subtitle:"Coming Soon...",imageUrl:"https://illlustrations.co/static/e6b84e6be05378ec8aa056315aba888d/day71-designer-tool-essential.png",linkUrl:"quotes",id:2},{title:"app3",subtitle:"in progress",imageUrl:"https://illlustrations.co/static/76e32463a2c518d3bbd3c1fb970e5c1b/day74-stationary-set.png",linkUrl:"app3",id:3},{title:"app4",subtitle:"will be constructed",imageUrl:"https://illlustrations.co/static/c91b38b0696ee92de685b539144ecdad/day72-designer-tool-war.png",linkUrl:"app4",size:"large",id:4},{title:"app5",subtitle:"to be built",imageUrl:"https://illlustrations.co/static/e7437dc17b93ae7c667b8c640fa446f5/day75-stationary-set-2.png",linkUrl:"app4",size:"large",id:5}]},e}return Object(ae.a)(o,[{key:"render",value:function(){return Object(ie.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,o=Object(te.a)(e,he);return Object(ie.jsx)(ce,Object(Y.a)({},o),t)}))})}}]),o}(B.a.Component),ue=(o(41),function(){return Object(ie.jsx)("div",{className:"homepage",children:Object(ie.jsx)(se,{})})}),le=(o(42),function(e){var t=e.character;return Object(ie.jsxs)("div",{className:"card-container",children:[Object(ie.jsx)("img",{alt:"character",src:"https://robohash.org/".concat(t.id,"?set=set5&&size=180x180")}),Object(ie.jsx)("h3",{children:t.name}),Object(ie.jsx)("p",{children:t.email})]})}),de=(o(43),function(e){var t=e.characters;return Object(ie.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(ie.jsx)(le,{character:e},e.id)}))})}),me=(o(44),function(e){var t=e.placeholder,o=e.changeHandle;return Object(ie.jsx)("input",{className:"search",type:"search",text:"search",placeholder:t,onChange:o})}),fe=["title","titleId"];function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},ye.apply(this,arguments)}function be(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function pe(e,t){var o=e.title,B=e.titleId,J=be(e,fe);return N.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"150px",height:"150px",ref:t,"aria-labelledby":B},J),o?N.createElement("title",{id:B},o):null,a||(a=N.createElement("path",{fill:"#c8ede6",d:"M86.876,56.546c0.3-0.616,0.566-1.264,0.796-1.943c2.633-7.77-1.349-17.078-9.733-19.325c-0.906-11.384-8.906-19.193-17.941-20.526c-10.341-1.525-19.814,5.044-22.966,15.485c-3.799-1.346-7.501-1.182-10.99,0.857c-1.583,0.732-3.031,1.812-4.33,3.233c-1.907,2.086-3.147,4.719-3.652,7.495c-0.748,0.118-1.483,0.236-2.176,0.484c-4.04,1.449-6.589,4.431-7.288,8.923c-0.435,2.797,0.443,5.587,0.933,6.714c1.935,4.455,6.422,6.98,10.981,6.312c0.227-0.033,0.557,0.069,0.752,0.233c0.241,7.12,3.698,13.417,8.884,17.014c8.321,5.772,19.027,3.994,25.781-3.921c2.894,2.96,6.338,4.398,10.384,3.876c4.023-0.519,7.147-2.739,9.426-6.349c1.053,0.283,2.051,0.691,3.083,0.804c4.042,0.442,7.118-1.311,9.732-4.8c1.488-1.986,1.779-5.145,1.793-6.354C90.384,61.503,89.053,58.536,86.876,56.546z"})),n||(n=N.createElement("path",{fill:"#fdfcef",d:"M72.986,65.336c0,0,11.691,0,11.762,0c2.7,0,4.888-2.189,4.888-4.889c0-2.355-1.666-4.321-3.884-4.784c0.026-0.206,0.043-0.415,0.043-0.628c0-2.796-2.267-5.063-5.063-5.063c-1.651,0-3.113,0.794-4.037,2.017c-0.236-3.113-3.017-5.514-6.27-5.116c-2.379,0.291-4.346,2.13-4.784,4.486c-0.14,0.756-0.126,1.489,0.014,2.177c-0.638-0.687-1.546-1.119-2.557-1.119c-1.85,0-3.361,1.441-3.48,3.261c-0.84-0.186-1.754-0.174-2.717,0.188c-1.84,0.691-3.15,2.423-3.227,4.387c-0.109,2.789,2.12,5.085,4.885,5.085c0.21,0,0.948,0,1.118,0H69.83"})),r||(r=N.createElement("path",{fill:"#472b29",d:"M84.748,65.836H72.986c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h11.762c2.419,0,4.388-1.969,4.388-4.389c0-2.066-1.466-3.873-3.486-4.296c-0.254-0.053-0.425-0.292-0.394-0.551c0.023-0.186,0.039-0.373,0.039-0.566c0-2.516-2.047-4.562-4.563-4.562c-1.438,0-2.765,0.663-3.638,1.818c-0.125,0.166-0.338,0.237-0.54,0.178c-0.199-0.059-0.342-0.234-0.357-0.441c-0.104-1.378-0.779-2.672-1.851-3.55c-1.083-0.888-2.453-1.281-3.859-1.108c-2.167,0.266-3.956,1.943-4.353,4.08c-0.124,0.669-0.12,1.338,0.012,1.987c0.045,0.22-0.062,0.442-0.261,0.544c-0.2,0.105-0.443,0.06-0.595-0.104c-0.574-0.618-1.352-0.959-2.19-0.959c-1.569,0-2.878,1.227-2.981,2.793c-0.01,0.146-0.082,0.28-0.199,0.367c-0.117,0.088-0.268,0.119-0.408,0.089c-0.84-0.185-1.637-0.132-2.433,0.167c-1.669,0.627-2.836,2.209-2.903,3.938c-0.047,1.207,0.387,2.351,1.222,3.219c0.835,0.868,1.959,1.347,3.164,1.347H69.83c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H58.561c-1.479,0-2.858-0.587-3.884-1.653c-1.025-1.066-1.558-2.47-1.5-3.951c0.083-2.126,1.51-4.069,3.551-4.835c0.8-0.3,1.628-0.399,2.468-0.299c0.376-1.822,1.997-3.182,3.905-3.182c0.685,0,1.354,0.18,1.944,0.51c0-0.386,0.035-0.772,0.107-1.159c0.476-2.562,2.62-4.573,5.215-4.891c1.682-0.208,3.319,0.266,4.615,1.327c1.004,0.823,1.717,1.951,2.039,3.194c1.012-0.916,2.319-1.426,3.714-1.426c3.067,0,5.563,2.495,5.563,5.562c0,0.084-0.002,0.166-0.007,0.248c2.254,0.674,3.848,2.778,3.848,5.165C90.137,63.419,87.72,65.836,84.748,65.836z"})),i||(i=N.createElement("path",{fill:"#fdfcef",d:"M70.153,54.567c-1.808-0.119-3.365,1.13-3.476,2.789c-0.014,0.206-0.005,0.409,0.025,0.606c-0.349-0.394-0.865-0.661-1.458-0.7c-1.085-0.071-2.022,0.645-2.158,1.62c-0.197-0.054-0.403-0.09-0.616-0.104c-1.582-0.104-2.944,0.989-3.042,2.441"})),c||(c=N.createElement("path",{fill:"#472b29",d:"M59.429,61.468c-0.006,0-0.012,0-0.017-0.001c-0.138-0.009-0.242-0.128-0.233-0.266c0.106-1.587,1.592-2.782,3.307-2.673c0.135,0.008,0.271,0.025,0.409,0.053c0.274-0.969,1.255-1.648,2.366-1.568c0.425,0.027,0.823,0.16,1.163,0.382c0.001-0.019,0.002-0.037,0.003-0.056c0.12-1.793,1.796-3.17,3.742-3.021c0.138,0.009,0.242,0.128,0.233,0.266s-0.14,0.253-0.266,0.232c-1.681-0.092-3.109,1.039-3.21,2.558c-0.013,0.184-0.005,0.369,0.023,0.551c0.017,0.109-0.041,0.217-0.141,0.265c-0.1,0.046-0.219,0.023-0.293-0.061c-0.318-0.359-0.788-0.584-1.288-0.617c-0.929-0.036-1.775,0.555-1.894,1.405c-0.01,0.071-0.05,0.135-0.11,0.175c-0.061,0.04-0.134,0.051-0.204,0.032c-0.191-0.052-0.381-0.084-0.567-0.097c-1.435-0.085-2.687,0.896-2.776,2.208C59.669,61.367,59.56,61.468,59.429,61.468z"})),h||(h=N.createElement("path",{fill:"#fdfcef",d:"M86.728,56.236c-1.699-0.801-3.664-0.234-4.389,1.267c-0.09,0.186-0.157,0.379-0.201,0.574"})),s||(s=N.createElement("path",{fill:"#472b29",d:"M82.138,58.326c-0.018,0-0.037-0.002-0.056-0.006c-0.135-0.031-0.219-0.165-0.188-0.3c0.049-0.216,0.123-0.427,0.219-0.626c0.782-1.621,2.9-2.242,4.721-1.385c0.125,0.06,0.179,0.208,0.12,0.333c-0.059,0.125-0.209,0.177-0.333,0.12c-1.574-0.743-3.394-0.227-4.058,1.148c-0.08,0.166-0.141,0.341-0.182,0.521C82.355,58.247,82.252,58.326,82.138,58.326z"})),u||(u=N.createElement("path",{fill:"#fff",d:"M16.541 48.582H6.511c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.031c.276 0 .5.224.5.5S16.818 48.582 16.541 48.582zM19.422 48.582h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S19.699 48.582 19.422 48.582zM23.477 48.582h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S23.753 48.582 23.477 48.582zM23.477 50.447h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S23.753 50.447 23.477 50.447zM12.129 50.447h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S12.406 50.447 12.129 50.447zM9.752 50.447H8.296c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S10.029 50.447 9.752 50.447zM18.888 46.717h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S19.164 46.717 18.888 46.717zM18.888 44.852h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S19.164 44.852 18.888 44.852zM15.62 52.312h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S15.896 52.312 15.62 52.312zM69.719 22.305h-10.03c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S69.996 22.305 69.719 22.305zM72.601 22.305h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S72.877 22.305 72.601 22.305zM76.655 22.305h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S76.931 22.305 76.655 22.305zM74.629 18.576h-9.617c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.617c.276 0 .5.224.5.5S74.906 18.576 74.629 18.576zM63.281 18.576h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S63.558 18.576 63.281 18.576zM60.904 18.576h-1.456c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S61.181 18.576 60.904 18.576zM72.066 20.44h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S72.342 20.44 72.066 20.44z"})),l||(l=N.createElement("path",{fill:"#fff",d:"M72.066 18.576h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S72.342 18.576 72.066 18.576zM65.583 20.44h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S65.86 20.44 65.583 20.44z"})),d||(d=N.createElement("path",{fill:"#fdfcee",d:"M28.728 46.696H53.954V67.939H28.728z"})),m||(m=N.createElement("path",{fill:"#472b29",d:"M54.455,68.439H28.228V46.196h26.227V68.439z M29.228,67.439h24.227V47.196H29.228V67.439z"})),f||(f=N.createElement("path",{fill:"#472b29",d:"M52.627,68.639H28.728c-0.387,0-0.7-0.313-0.7-0.7V46.696c0-0.387,0.313-0.7,0.7-0.7s0.7,0.313,0.7,0.7v20.543h23.199c0.387,0,0.7,0.313,0.7,0.7S53.014,68.639,52.627,68.639z"})),y||(y=N.createElement("path",{fill:"#fdfcee",d:"M53.955 46.696H77.19V69.267H53.955z"})),b||(b=N.createElement("path",{fill:"#472b29",d:"M77.189,69.967H53.955c-0.387,0-0.7-0.313-0.7-0.7V46.696c0-0.387,0.313-0.7,0.7-0.7h23.235c0.387,0,0.7,0.313,0.7,0.7v22.571C77.89,69.654,77.576,69.967,77.189,69.967z M54.655,68.567h21.834V47.396H54.655V68.567z"})),p||(p=N.createElement("path",{fill:"#cdcbbd",d:"M54.618 47.36H76.525V49.352H54.618z"})),g||(g=N.createElement("path",{fill:"#ee3e54",d:"M28.748 46.696L26.687 46.696 31.531 34.083 34.422 34.083 43.128 34.083 75.862 34.083 79.6 46.696 78.7 46.696z"})),w||(w=N.createElement("path",{fill:"#472b29",d:"M79.6,47.396H26.687c-0.23,0-0.446-0.113-0.577-0.304c-0.13-0.19-0.159-0.433-0.076-0.647l4.844-12.613c0.104-0.271,0.364-0.449,0.653-0.449h44.332c0.31,0,0.583,0.204,0.671,0.501l3.738,12.613c0.062,0.212,0.021,0.441-0.11,0.618C80.029,47.291,79.821,47.396,79.6,47.396z M27.705,45.995h50.957L75.34,34.783H32.012L27.705,45.995z"})),v||(v=N.createElement("path",{fill:"#c0e5e4",d:"M70.219 55.658L70.219 64.288 60.925 64.288 60.925 53.666 68.891 53.666"})),j||(j=N.createElement("path",{fill:"#472b29",d:"M70.219,64.638h-9.294c-0.193,0-0.35-0.156-0.35-0.35V53.666c0-0.193,0.157-0.35,0.35-0.35h7.966c0.193,0,0.35,0.156,0.35,0.35s-0.157,0.35-0.35,0.35h-7.616v9.923h8.594v-8.281c0-0.193,0.157-0.35,0.35-0.35s0.35,0.156,0.35,0.35v8.631C70.569,64.482,70.413,64.638,70.219,64.638z"})),q||(q=N.createElement("path",{fill:"#472b29",d:"M65.572,64.638c-0.193,0-0.35-0.156-0.35-0.35V53.666c0-0.193,0.157-0.35,0.35-0.35s0.35,0.156,0.35,0.35v10.622C65.922,64.482,65.766,64.638,65.572,64.638z"})),M||(M=N.createElement("path",{fill:"#b2b1c2",d:"M43.01,67.607V57.369c0-2.402-2.091-4.367-4.647-4.367c-2.556,0-4.647,1.965-4.647,4.367v10.238H43.01z"})),O||(O=N.createElement("path",{fill:"#472b29",d:"M43.01,67.956h-9.294c-0.193,0-0.35-0.156-0.35-0.35V57.37c0-2.601,2.242-4.717,4.997-4.717s4.997,2.116,4.997,4.717v10.237C43.36,67.8,43.203,67.956,43.01,67.956z M34.066,67.257h8.594V57.37c0-2.215-1.928-4.018-4.297-4.018s-4.297,1.803-4.297,4.018V67.257z"})),k||(k=N.createElement("path",{fill:"#c0e5e4",d:"M41.018,59.641v-1.124c0-1.603-1.195-2.915-2.655-2.915s-2.655,1.312-2.655,2.915v1.124H41.018z"})),z||(z=N.createElement("path",{fill:"#472b29",d:"M41.018 59.891h-5.311c-.138 0-.25-.112-.25-.25v-1.123c0-1.745 1.303-3.165 2.905-3.165s2.905 1.42 2.905 3.165v1.123C41.268 59.779 41.156 59.891 41.018 59.891zM35.957 59.391h4.811v-.873c0-1.47-1.079-2.665-2.405-2.665s-2.405 1.195-2.405 2.665V59.391zM41.682 62.546h-.664c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h.664c.138 0 .25.112.25.25S41.82 62.546 41.682 62.546z"})),x||(x=N.createElement("path",{fill:"#cdcbbd",d:"M29.392 47.36H53.291V48.688H29.392z"})),E||(E=N.createElement("path",{fill:"#c0e5e4",d:"M50.976 60.305L46.329 60.305 46.329 54.33 51.64 54.33 51.64 58.977"})),I||(I=N.createElement("path",{fill:"#472b29",d:"M50.976,60.655h-4.647c-0.193,0-0.35-0.156-0.35-0.35V54.33c0-0.193,0.157-0.35,0.35-0.35h5.311c0.193,0,0.35,0.156,0.35,0.35v4.646c0,0.193-0.157,0.35-0.35,0.35s-0.35-0.156-0.35-0.35V54.68h-4.61v5.275h4.297c0.193,0,0.35,0.156,0.35,0.35S51.169,60.655,50.976,60.655z"})),S||(S=N.createElement("path",{fill:"#472b29",d:"M48.984,60.655c-0.193,0-0.35-0.156-0.35-0.35V54.33c0-0.193,0.157-0.35,0.35-0.35s0.35,0.156,0.35,0.35v5.975C49.334,60.498,49.178,60.655,48.984,60.655z"})),C||(C=N.createElement("path",{fill:"#fdd4b2",d:"M68.891 31.759H73.53800000000001V41.053H68.891z"})),H||(H=N.createElement("path",{fill:"#472b29",d:"M73.539,41.303h-4.647c-0.138,0-0.25-0.112-0.25-0.25v-9.294c0-0.138,0.112-0.25,0.25-0.25h4.647c0.138,0,0.25,0.112,0.25,0.25v9.294C73.789,41.191,73.677,41.303,73.539,41.303z M69.142,40.803h4.147v-8.794h-4.147V40.803z"})),T||(T=N.createElement("path",{fill:"#fbb97f",d:"M74.202,32.423h-5.975c-0.365,0-0.664-0.299-0.664-0.664v0c0-0.365,0.299-0.664,0.664-0.664h5.975c0.365,0,0.664,0.299,0.664,0.664v0C74.866,32.124,74.567,32.423,74.202,32.423z"})),V||(V=N.createElement("path",{fill:"#472b29",d:"M74.202 32.673h-5.975c-.504 0-.914-.41-.914-.914 0-.504.41-.914.914-.914h5.975c.504 0 .914.41.914.914C75.116 32.263 74.706 32.673 74.202 32.673zM68.227 31.345c-.228 0-.414.186-.414.414s.186.414.414.414h5.975c.229 0 .414-.186.414-.414s-.186-.414-.414-.414H68.227zM51.631 49.319H49.64c-.166 0-.3-.134-.3-.3s.134-.3.3-.3h1.992c.166 0 .3.134.3.3S51.797 49.319 51.631 49.319zM47.648 49.319H29.06c-.166 0-.3-.134-.3-.3s.134-.3.3-.3h18.588c.166 0 .3.134.3.3S47.813 49.319 47.648 49.319zM77.521 49.983h-17.26c-.166 0-.3-.134-.3-.3s.134-.3.3-.3h17.26c.166 0 .3.134.3.3S77.687 49.983 77.521 49.983zM66.9 37.37H32.379c-.166 0-.3-.134-.3-.3s.134-.3.3-.3H66.9c.166 0 .3.134.3.3S67.065 37.37 66.9 37.37zM64.908 39.362H31.716c-.166 0-.3-.134-.3-.3s.134-.3.3-.3h33.192c.166 0 .3.134.3.3S65.074 39.362 64.908 39.362zM63.58 41.353H31.052c-.166 0-.3-.134-.3-.3s.134-.3.3-.3H63.58c.166 0 .3.134.3.3S63.746 41.353 63.58 41.353zM58.269 49.983h-1.328c-.166 0-.3-.134-.3-.3s.134-.3.3-.3h1.328c.166 0 .3.134.3.3S58.435 49.983 58.269 49.983z"})),A||(A=N.createElement("path",{fill:"#fdfcef",d:"M32.762,70.807c1.782,0,3.328,0,3.35,0c1.997,0,3.615-1.595,3.615-3.563c0-1.717-1.232-3.149-2.872-3.487c0.019-0.15,0.032-0.302,0.032-0.458c0-2.038-1.676-3.691-3.744-3.691c-1.221,0-2.302,0.579-2.986,1.47c-0.175-2.269-2.231-4.019-4.637-3.729c-1.759,0.212-3.214,1.552-3.538,3.27c-0.104,0.551-0.093,1.085,0.01,1.587c-0.472-0.501-1.143-0.816-1.891-0.816c-1.369,0-2.485,1.05-2.574,2.377c-0.621-0.135-1.297-0.127-2.009,0.137c-1.361,0.503-2.33,1.766-2.387,3.198c-0.081,2.033,1.568,3.706,3.612,3.706c0.155,0,0.701,0,0.827,0h7.507 M26.633,70.807h0.34"})),L||(L=N.createElement("path",{fill:"#472b29",d:"M36.112,71.307h-3.35c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.35c1.718,0,3.115-1.374,3.115-3.063c0-1.441-1.04-2.702-2.474-2.998c-0.256-0.052-0.428-0.293-0.395-0.552c0.017-0.13,0.028-0.261,0.028-0.395c0-1.759-1.455-3.19-3.244-3.19c-1.024,0-1.968,0.464-2.589,1.274c-0.126,0.164-0.341,0.233-0.539,0.175c-0.199-0.06-0.34-0.234-0.356-0.441c-0.075-0.97-0.536-1.849-1.298-2.474c-0.776-0.638-1.768-0.921-2.78-0.798c-1.546,0.187-2.824,1.365-3.107,2.866c-0.088,0.469-0.085,0.938,0.009,1.393c0.045,0.22-0.061,0.441-0.259,0.545s-0.44,0.063-0.595-0.101c-0.4-0.425-0.943-0.658-1.527-0.658c-1.092,0-2.003,0.839-2.075,1.91c-0.01,0.146-0.082,0.279-0.199,0.366c-0.116,0.089-0.264,0.12-0.407,0.089c-0.598-0.129-1.164-0.093-1.729,0.117c-1.185,0.438-2.013,1.542-2.061,2.748c-0.033,0.833,0.269,1.624,0.848,2.228c0.595,0.618,1.399,0.959,2.265,0.959h8.334c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-8.334c-1.14,0-2.2-0.45-2.985-1.267c-0.771-0.802-1.17-1.853-1.126-2.959c0.063-1.605,1.153-3.07,2.712-3.646c0.575-0.212,1.167-0.289,1.769-0.237c0.336-1.33,1.557-2.308,2.988-2.308c0.457,0,0.905,0.103,1.312,0.293c0.01-0.219,0.035-0.438,0.077-0.657c0.363-1.925,1.995-3.436,3.97-3.673c1.288-0.162,2.545,0.206,3.534,1.017c0.696,0.571,1.206,1.336,1.47,2.181c0.749-0.606,1.684-0.941,2.678-0.941c2.34,0,4.244,1.88,4.244,4.19c0,0.027,0,0.054-0.001,0.08c1.67,0.538,2.842,2.099,2.842,3.864C40.227,69.484,38.381,71.307,36.112,71.307z M26.973,71.307h-0.34c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.34c0.276,0,0.5,0.224,0.5,0.5S27.249,71.307,26.973,71.307z"})),W||(W=N.createElement("path",{fill:"#472b29",d:"M34.496 65.765c-.018 0-.037-.002-.055-.006-.135-.03-.22-.164-.189-.299.036-.157.09-.312.161-.457.576-1.174 2.163-1.607 3.541-.966.125.059.18.207.121.332-.059.124-.208.177-.332.121-1.134-.527-2.425-.199-2.88.732-.054.11-.095.228-.122.347C34.714 65.686 34.611 65.765 34.496 65.765zM29.615 71.307h-1.048c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.048c.276 0 .5.224.5.5S29.891 71.307 29.615 71.307z"})))}var ge=N.forwardRef(pe),we=(o.p,o(45),function(){return Object(ie.jsx)("div",{className:"header",children:Object(ie.jsx)(U.b,{className:"logo-container",to:"/profile/",children:Object(ie.jsx)(ge,{className:"logo"})})})}),ve=(o(46),function(e){Object(ne.a)(o,e);var t=Object(re.a)(o);function o(e){var a;return Object(oe.a)(this,o),(a=t.call(this,e)).changeHandle=function(e){a.setState({searchField:e.target.value})},a.state={characters:[],searchField:""},a}return Object(ae.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({characters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,o=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(ie.jsxs)("div",{className:"rolodex",children:[Object(ie.jsx)(we,{}),Object(ie.jsx)("h1",{className:"blinking",children:"Character Rolodex"}),Object(ie.jsx)(me,{placeholder:"Search Characters",changeHandle:this.changeHandle}),Object(ie.jsx)(de,{characters:a})]})}}]),o}(N.Component)),je=function(e){var t=e.quote,o=e.author;return Object(ie.jsxs)("div",{children:[Object(ie.jsx)("h3",{children:t},t.id),Object(ie.jsx)("p",{children:o},o.id)]})},qe=function(e){Object(ne.a)(o,e);var t=Object(re.a)(o);function o(e){var a;return Object(oe.a)(this,o),(a=t.call(this,e)).handleSubmit=function(){a.setState({})},a.state={quotesDB:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"},{quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},{quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{quote:"Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},{quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},{quote:"You miss 100% of the shots you don\u2019t take.",author:"Wayne Gretzky"},{quote:"I\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life. And that is why I succeed.",author:"Michael Jordan"},{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},{quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"},{quote:"Definiteness of purpose is the starting point of all achievement.",author:"W. Clement Stone"},{quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},{quote:"Life is what happens to you while you\u2019re busy making other plans.",author:"John Lennon"},{quote:"We become what we think about.",author:"Earl Nightingale"},{quote:"Twenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",author:"Mark Twain"},{quote:"Life is 10% what happens to me and 90% of how I react to it.",author:"Charles Swindoll"},{quote:"The most common way people give up their power is by thinking they don\u2019t have any.",author:"Alice Walker"},{quote:"The mind is everything. What you think you become.",author:"Buddha"},{quote:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{quote:"An unexamined life is not worth living.",author:"Socrates"},{quote:"Eighty percent of success is showing up.",author:"Woody Allen"},{quote:"Your time is limited, so don\u2019t waste it living someone else\u2019s life.",author:"Steve Jobs"},{quote:"Winning isn\u2019t everything, but wanting to win is.",author:"Vince Lombardi"},{quote:"I am not a product of my circumstances. I am a product of my decisions.",author:"Stephen Covey"},{quote:"Every child is an artist.  The problem is how to remain an artist once he grows up.",author:"Pablo Picasso"},{quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",author:"Christopher Columbus"},{quote:"I\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",author:"Maya Angelou"},{quote:"Either you run the day, or the day runs you.",author:"Jim Rohn"},{quote:"Whether you think you can or you think you can\u2019t, you\u2019re right.",author:"Henry Ford"},{quote:"The two most important days in your life are the day you are born and the day you find out why.",author:"Mark Twain"},{quote:"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",author:"Johann Wolfgang von Goethe"},{quote:"The best revenge is massive success.",author:"Frank Sinatra"},{quote:"People often say that motivation doesn\u2019t last. Well, neither does bathing.  That\u2019s why we recommend it daily.",author:"Zig Ziglar"},{quote:"Life shrinks or expands in proportion to one\u2019s courage.",author:"Anais Nin"},{quote:"If you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced.",author:"Vincent Van Gogh"},{quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",author:"Aristotle"},{quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",author:"Jesus"},{quote:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"},{quote:"Go confidently in the direction of your dreams.  Live the life you have imagined.",author:"Henry David Thoreau"},{quote:"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",author:"Erma Bombeck"},{quote:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",author:"Booker T. Washington"},{quote:"Certain things catch your eye, but pursue only those that capture the heart.",author:" Ancient Indian Proverb"},{quote:"Believe you can and you\u2019re halfway there.",author:"Theodore Roosevelt"},{quote:"Everything you\u2019ve ever wanted is on the other side of fear.",author:"George Addair"},{quote:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",author:"Plato"},{quote:"Teach thy tongue to say, \u201cI do not know,\u201d and thous shalt progress.",author:"Maimonides"},{quote:"Start where you are. Use what you have.  Do what you can.",author:"Arthur Ashe"},{quote:"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down \u2018happy\u2019.  They told me I didn\u2019t understand the assignment, and I told them they didn\u2019t understand life.",author:"John Lennon"},{quote:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",author:"Helen Keller"},{quote:"Everything has beauty, but not everyone can see.",author:"Confucius"},{quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",author:"Anne Frank"},{quote:"When I let go of what I am, I become what I might be.",author:"Lao Tzu"},{quote:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",author:"Maya Angelou"},{quote:"Happiness is not something readymade.  It comes from your own actions.",author:"Dalai Lama"},{quote:"If you\u2019re offered a seat on a rocket ship, don\u2019t ask what seat! Just get on.",author:"Sheryl Sandberg"},{quote:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",author:"Aristotle"},{quote:"If the wind will not serve, take to the oars.",author:"Latin Proverb"},{quote:"You can\u2019t fall if you don\u2019t climb.  But there\u2019s no joy in living your whole life on the ground.",author:"Unknown"},{quote:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",author:"Marie Curie"},{quote:"Too many of us are not living our dreams because we are living our fears.",author:"Les Brown"},{quote:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",author:"Joshua J. Marine"},{quote:"If you want to lift yourself up, lift up someone else.",author:"Booker T. Washington"},{quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",author:"Leonardo da Vinci"},{quote:"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",author:"Jamie Paolinetti"},{quote:"You take your life in your own hands, and what happens? A terrible thing, no one to blame.",author:"Erica Jong"},{quote:"What\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",author:"Bob Dylan"},{quote:"I didn\u2019t fail the test. I just found 100 ways to do it wrong.",author:"Benjamin Franklin"},{quote:"In order to succeed, your desire for success should be greater than your fear of failure.",author:"Bill Cosby"},{quote:"A person who never made a mistake never tried anything new.",author:" Albert Einstein"},{quote:"The person who says it cannot be done should not interrupt the person who is doing it.",author:"Chinese Proverb"},{quote:"There are no traffic jams along the extra mile.",author:"Roger Staubach"},{quote:"It is never too late to be what you might have been.",author:"George Eliot"},{quote:"You become what you believe.",author:"Oprah Winfrey"},{quote:"I would rather die of passion than of boredom.",author:"Vincent van Gogh"},{quote:"A truly rich man is one whose children run into his arms when his hands are empty.",author:"Unknown"},{quote:"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",author:"Ann Landers"},{quote:"If you want your children to turn out well, spend twice as much time with them, and half as much money.",author:"Abigail Van Buren"},{quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"},{quote:"The battles that count aren\u2019t the ones for gold medals. The struggles within yourself\u2013the invisible battles inside all of us\u2013that\u2019s where it\u2019s at.",author:"Jesse Owens"},{quote:"Education costs money.  But then so does ignorance.",author:"Sir Claus Moser"},{quote:"I have learned over the years that when one\u2019s mind is made up, this diminishes fear.",author:"Rosa Parks"},{quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},{quote:"If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough.",author:"Oprah Winfrey"},{quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",author:"Dalai Lama"},{quote:"You can\u2019t use up creativity.  The more you use, the more you have.",author:"Maya Angelou"},{quote:"Dream big and dare to fail.",author:"Norman Vaughan"},{quote:"Our lives begin to end the day we become silent about things that matter.",author:"Martin Luther King Jr."},{quote:"Do what you can, where you are, with what you have.",author:"Teddy Roosevelt"},{quote:"If you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten.",author:"Tony Robbins"},{quote:"Dreaming, after all, is a form of planning.",author:"Gloria Steinem"},{quote:"It\u2019s your place in the world; it\u2019s your life. Go on and do all you can with it, and make it the life you want to live.",author:"Mae Jemison"},{quote:"You may be disappointed if you fail, but you are doomed if you don\u2019t try.",author:"Beverly Sills"},{quote:"Remember no one can make you feel inferior without your consent.",author:"Eleanor Roosevelt"},{quote:"Life is what we make it, always has been, always will be.",author:"Grandma Moses"},{quote:"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.",author:"Ayn Rand"},{quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",author:"Henry Ford"},{quote:"It\u2019s not the years in your life that count. It\u2019s the life in your years.",author:"Abraham Lincoln"},{quote:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"},{quote:"Either write something worth reading or do something worth writing.",author:"Benjamin Franklin"},{quote:"Nothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d",author:"\u2013Audrey Hepburn"},{quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"}]},a}return Object(ae.a)(o,[{key:"render",value:function(){var e=this.state.quotesDB,t=Math.floor(Math.random()*e.length),o=e.map((function(e){return e.quote})),a=e.map((function(e){return e.author})),n=o[t],r=a[t];return Object(ie.jsxs)("div",{children:[Object(ie.jsx)(je,{quote:n,author:r}),Object(ie.jsx)("button",{onClick:this.handleSubmit,children:"New Quote"})]})}}]),o}(B.a.Component),Me=(o(47),function(e){Object(ne.a)(o,e);var t=Object(re.a)(o);function o(e){var a;return Object(oe.a)(this,o),(a=t.call(this,e)).state={quotes:[]},a}return Object(ae.a)(o,[{key:"render",value:function(){return Object(ie.jsxs)("div",{className:"container",children:[Object(ie.jsx)(we,{}),Object(ie.jsx)(qe,{})]})}}]),o}(B.a.Component));o(48);var Oe=function(){return Object(ie.jsx)("div",{children:Object(ie.jsxs)(ee.c,{children:[Object(ie.jsx)(ee.a,{exact:!0,path:"/profile/",component:ue}),Object(ie.jsx)(ee.a,{path:"/profile/rolodex",component:ve}),Object(ie.jsx)(ee.a,{path:"/profile/quotes",component:Me})]})})};R.a.render(Object(ie.jsx)(F.a,{store:$,children:Object(ie.jsx)(U.a,{children:Object(ie.jsx)(Oe,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.60b16599.chunk.js.map