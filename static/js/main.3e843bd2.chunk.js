(this["webpackJsonpcats-dogs"]=this["webpackJsonpcats-dogs"]||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=a(2),s=a(3),o=a.n(s),u=a(14),m=a(15),f=a.n(m),E=function(e){var t=e.data,a=e.animal,n={cat:"dog",Cat:"Dog",dog:"cat",Dog:"Cat",purr:"bark",meow:"woof"},r=t.text.replace(/\bcat|\bCat|\bdog|\bDog|\bpurr|\bmeow/gi,(function(e){return n[e]}));return c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("li",{className:"factsList__row"},"dog"===a?c.a.createElement("div",{className:"factsList__fact"},'"',r,'"'):c.a.createElement("div",{className:"factsList__fact"},'"',t.text,'"'),c.a.createElement("div",null,t.upvotes)))},g=function(e){var t=e.factsPerPage,a=e.totalFacts,n=e.currentPage,r=e.paginate,l=Math.ceil(a/t);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},n>3?c.a.createElement("li",{key:1,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(1)},href:"!#"},"first page")):null,n>2?c.a.createElement("li",{key:n-2,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(n-2)},href:"!#"},n-2)):null,n>1?c.a.createElement("li",{key:n-1,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(n-1)},href:"!#"},n-1)):null,c.a.createElement("li",{className:"pagination__list current"}," ",n," "),n<l?c.a.createElement("li",{key:n+1,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(n+1)},href:"!#"},n+1)):null,n<l-1?c.a.createElement("li",{key:n+2,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(n+2)},href:"!#"},n+2)):null,n<l-2?c.a.createElement("li",{key:l,className:"pagination__list"},c.a.createElement("a",{onClick:function(){return r(l)},href:"!#"},"last page")):null))},p=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),p=m[0],d=m[1],v=Object(n.useState)(1),b=Object(i.a)(v,2),h=b[0],_=b[1],k=Object(n.useState)(10),N=Object(i.a)(k,1)[0],w=e.animal;Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,f()("https://cat-fact.herokuapp.com/facts");case 3:t=e.sent,l(t.data.all),setTimeout((function(){d(!1)}),1500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=h*N,O=C-N,j=r.slice(O,C).map((function(e){return c.a.createElement(E,{key:e.text,data:e,animal:w})}));return p?c.a.createElement("div",{className:"loaderGif"},"cat"===w?c.a.createElement("img",{src:"https://media.giphy.com/media/mFTRCmlZgMEr5CHmOV/giphy.gif",alt:"loading"}):c.a.createElement("img",{src:"https://www.petbarn.com.au/skin/frontend/enterprise/petbarn/images/dropdowns/dropdown_dog.gif",alt:"loading"})):c.a.createElement("div",{className:"factsList"},c.a.createElement("h1",null,"Facts for ",w," lovers"),c.a.createElement("ul",null,c.a.createElement("li",{className:"factsList__headings"},c.a.createElement("div",null,"Facts"),c.a.createElement("div",null,"Votes")),j),c.a.createElement(g,{factsPerPage:N,totalFacts:r.length,paginate:function(e){return _(e)},currentPage:h}))};var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1];return""!==r?c.a.createElement("div",{className:"container"},c.a.createElement(p,{animal:r})):c.a.createElement("div",{className:"startScreen container"},c.a.createElement("h1",null,"I love",c.a.createElement("div",{onClick:function(){return l("dog")}}," dogs "),c.a.createElement("div",{onClick:function(){return l("cat")}}," cats ")))};a(39);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e843bd2.chunk.js.map