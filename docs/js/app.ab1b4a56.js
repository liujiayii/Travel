(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),n=a.n(i);n.a},"036e":function(t,e,a){},"11b7":function(t,e,a){},"22ec":function(t,e,a){"use strict";var i=a("7098"),n=a.n(i);n.a},"3db4":function(t,e,a){},5414:function(t,e,a){},"55c1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a("router-view")],1)],1)},s=[],o=(a("034f"),a("2877")),r={},c=Object(o["a"])(r,n,s,!1,null,null,null),l=c.exports,p=a("2f62");i["a"].use(p["a"]);var u=new p["a"].Store({state:{city:localStorage.city||"上海"},mutations:{changeCity:function(t,e){t.city=e,localStorage.city=e}}}),m=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeHeader"),a("HomeSwiper",{attrs:{list:t.swiperList}}),a("HomeIcons",{attrs:{list:t.iconList}}),a("HomeRecommend",{attrs:{list:t.recommendList}}),a("HomeWeekend",{attrs:{list:t.weekendList}})],1)},h=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._m(0),t._m(1),a("router-link",{attrs:{to:"/city"}},[a("div",{staticClass:"header-right"},[t._v("\n      "+t._s(t.$store.state.city)+"\n      "),a("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[a("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-input"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n    输入城市/景点/游玩主题\n  ")])}],q={name:"Header"},K=q,y=(a("d88d"),Object(o["a"])(K,f,N,!1,null,"1c7467a5",null)),U=y.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[t.showSwiper?a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return a("swiper-slide",{key:t.id},[a("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},k=[],S={name:"Swipers",props:{list:Array},data:function(){return{swiperOption:{pagination:"swiper-pagination",loop:!0}}},mounted:function(){},computed:{showSwiper:function(){return this.list.length}}},v=S,j=(a("fc99"),Object(o["a"])(v,T,k,!1,null,"19cb00d3",null)),A=j.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icons"},[a("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,i){return a("swiper-slide",{key:i},t._l(e,function(e){return a("div",{key:e.id,staticClass:"icon"},[a("div",{staticClass:"icon-img"},[a("img",{attrs:{src:e.imgUrl,alt:""}})]),a("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},b=[],w=(a("ac6a"),{name:"Icons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,a){var i=Math.floor(a/8);t[i]||(t[i]=[]),t[i].push(e)}),t}}}),C=w,R=(a("c445"),Object(o["a"])(C,V,b,!1,null,"15436234",null)),g=R.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),a("ul",t._l(t.list,function(e){return a("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[a("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),a("div",{staticClass:"item-info"},[a("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),a("button",{staticClass:"item-btn"},[t._v("查看详情")])])])}),1)])},M=[],Y={name:"Recommend",props:{list:Array},data:function(){return{}}},G=Y,H=(a("ea02"),Object(o["a"])(G,x,M,!1,null,"80659cf0",null)),W=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"recommend-title"},[t._v("周末去哪")]),a("ul",t._l(t.list,function(e){return a("li",{key:e.id,staticClass:"item border-bottom"},[a("div",{staticClass:"item-img-wrapper"},[a("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),a("div",{staticClass:"item-info"},[a("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},J=[],F={name:"Weekend",props:{list:Array},data:function(){return{}}},O=F,I=(a("9f93"),Object(o["a"])(O,z,J,!1,null,"5a2d8fae",null)),D=I.exports,E=a("bc3a"),P=a.n(E),B={name:"home",components:{HomeHeader:U,HomeSwiper:A,HomeIcons:g,HomeRecommend:W,HomeWeekend:D},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){P.a.get("/api/index.json?city="+this.$store.state.city).then(this.getHomeInfoSuc)},getHomeInfoSuc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&this.getHomeInfo()}},Q=B,L=Object(o["a"])(Q,d,h,!1,null,null,null),Z=L.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CityHeader"),a("CitySearch",{attrs:{cities:t.cities}}),a("CityList",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),a("CityAlphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},_=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._v("\n  城市选择\n  "),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"iconfont header-back"},[t._v("")])])],1)},tt=[],et={name:"Header"},at=et,it=(a("dda4"),Object(o["a"])(at,$,tt,!1,null,"14945f26",null)),nt=it.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[a("ul",[t._l(t.list,function(e){return a("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(a){return t.handleCity(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),a("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},ot=[],rt=(a("386d"),a("7f7f"),a("1fba")),ct={name:"Search",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:{handleCity:function(t){this.$store.commit("changeCity",t),this.$router.push({path:"/"})}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var a in t.cities)t.cities[a].forEach(function(a){(a.spell.indexOf(t.keyword)>-1||a.name.indexOf(t.keyword)>-1)&&e.push(a)});t.list=e},200):this.list=[]}},mounted:function(){this.scroll=new rt["a"](this.$refs.search)}},lt=ct,pt=(a("22ec"),Object(o["a"])(lt,st,ot,!1,null,"b67a886c",null)),ut=pt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"wrapper",staticClass:"list"},[a("div",[a("div",{staticClass:"area"},[a("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),a("div",{staticClass:"button-list"},[a("div",{staticClass:"button-wrapper"},[a("div",{staticClass:"button"},[t._v(t._s(t.$store.state.city))])])])]),a("div",{staticClass:"area"},[a("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),a("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return a("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(a){return t.handleCity(e.name)}}},[a("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._l(t.cities,function(e,i){return a("div",{key:i,ref:i,refInFor:!0,staticClass:"area"},[a("div",{staticClass:"title border-topbottom"},[t._v(t._s(i))]),a("div",{staticClass:"item-list"},t._l(e,function(e){return a("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(a){return t.handleCity(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},dt=[],ht={name:"List",props:{hotCities:Array,cities:Object,letter:String},methods:{handleCity:function(t){this.$store.commit("changeCity",t),this.$router.push({path:"/"})}},mounted:function(){this.scroll=new rt["a"](this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},ft=ht,Nt=(a("d0a1"),Object(o["a"])(ft,mt,dt,!1,null,"548a4146",null)),qt=Nt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list"},t._l(t.letters,function(e){return a("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e)+"\n  ")])}),0)},yt=[],Ut={name:"Alphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var a=t.touches[0].clientY-79,i=Math.floor((a-e.startY)/20);i>=0&&i<e.letters.length&&e.$emit("change",e.letters[i])},20))},handleTouchEnd:function(){this.touchStatus=!1}}},Tt=Ut,kt=(a("6951"),Object(o["a"])(Tt,Kt,yt,!1,null,"6cf46e48",null)),St=kt.exports,vt={name:"City",components:{CityHeader:nt,CitySearch:ut,CityList:qt,CityAlphabet:St},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){P.a.get("/api/city.json").then(this.handleGetCityInfoSuc)},handleGetCityInfoSuc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},jt=vt,At=Object(o["a"])(jt,X,_,!1,null,"fed37b6c",null),Vt=At.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("DetailBanner"),a("DetailHeader"),a("div",{staticClass:"content"})],1)},wt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[a("img",{staticClass:"banner-img",attrs:{src:"data:image/jpeg;base64,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",alt:""}}),t._m(0),a("CommonGallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.imgs},on:{close:t.handleBannerClick}})],1)},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-info"},[a("div",{staticClass:"banner-title"},[t._v("大连圣亚海洋世家")]),a("div",{staticClass:"banner-number"},[a("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("39")])])}],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",on:{click:t.handleGallaryClick}},[a("div",{staticClass:"wrapper"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgs,function(t,e){return a("swiper-slide",{key:e},[a("img",{staticClass:"gallary-img",attrs:{src:t,alt:""}})])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},xt=[],Mt={name:"Gallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:"swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},Yt=Mt,Gt=(a("60be"),Object(o["a"])(Yt,gt,xt,!1,null,"387e82f2",null)),Ht=Gt.exports,Wt={name:"Banner",data:function(){return{showGallary:!1,imgs:["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!this.showGallary}},components:{CommonGallary:Ht}},zt=Wt,Jt=(a("c432"),Object(o["a"])(zt,Ct,Rt,!1,null,"a824134e",null)),Ft=Jt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[a("span",{staticClass:"iconfont header-abs-back"},[t._v("")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[a("router-link",{attrs:{tag:"div",to:"/"}},[a("span",{staticClass:"iconfont header-back"},[t._v("")])]),t._v("\n    景点详情\n  ")],1)],1)},It=[],Dt={name:"Header",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},Et=Dt,Pt=(a("9ba7"),Object(o["a"])(Et,Ot,It,!1,null,"d2e229ea",null)),Bt=Pt.exports,Qt={name:"Detail",components:{DetailBanner:Ft,DetailHeader:Bt}},Lt=Qt,Zt=(a("d95c"),Object(o["a"])(Lt,bt,wt,!1,null,"df6349fe",null)),Xt=Zt.exports;i["a"].use(m["a"]);var _t=new m["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/city",name:"city",component:Vt},{path:"/detail/:id",name:"Detail",component:Xt}]}),$t=a("fe3c"),te=a.n($t),ee=a("7212"),ae=a.n(ee);a("dfa4"),a("3db4"),a("c8f4"),a("5414");i["a"].use(ae.a),i["a"].config.productionTip=!1,te.a.attach(document.body),new i["a"]({store:u,router:_t,render:function(t){return t(l)}}).$mount("#app")},"60be":function(t,e,a){"use strict";var i=a("ddb5"),n=a.n(i);n.a},"64a9":function(t,e,a){},6951:function(t,e,a){"use strict";var i=a("d419"),n=a.n(i);n.a},"6dc6":function(t,e,a){},7098:function(t,e,a){},9359:function(t,e,a){},"9ba7":function(t,e,a){"use strict";var i=a("b2bf"),n=a.n(i);n.a},"9f93":function(t,e,a){"use strict";var i=a("11b7"),n=a.n(i);n.a},b2bf:function(t,e,a){},c432:function(t,e,a){"use strict";var i=a("ca4b"),n=a.n(i);n.a},c445:function(t,e,a){"use strict";var i=a("55c1"),n=a.n(i);n.a},c568:function(t,e,a){},c8f4:function(t,e,a){},ca4b:function(t,e,a){},ca72:function(t,e,a){},d0a1:function(t,e,a){"use strict";var i=a("c568"),n=a.n(i);n.a},d419:function(t,e,a){},d88d:function(t,e,a){"use strict";var i=a("ca72"),n=a.n(i);n.a},d95c:function(t,e,a){"use strict";var i=a("6dc6"),n=a.n(i);n.a},dda4:function(t,e,a){"use strict";var i=a("036e"),n=a.n(i);n.a},ddb5:function(t,e,a){},e819:function(t,e,a){},ea02:function(t,e,a){"use strict";var i=a("e819"),n=a.n(i);n.a},fc99:function(t,e,a){"use strict";var i=a("9359"),n=a.n(i);n.a}});