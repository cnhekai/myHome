webpackJsonp([1],{"+NYI":function(t,a,e){"use strict";a.a={}},"36Ko":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:20}},t._l(t.items,function(a,n){return e("el-col",{key:n,attrs:{xs:24,sm:24,md:12,lg:8}},[e("div",{staticClass:"project"},[e("a",{attrs:{href:a.path,target:"_blank"}},[e("img",{attrs:{src:a.imgpath,alt:""}}),e("div",{staticClass:"shade",attrs:{id:a.id}},[e("p",[t._v(t._s(a.deraction))])])])])])}))],1)},i=[],s={render:n,staticRenderFns:i};a.a=s},"3CsF":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",{style:{backgroundColor:"rgba(0,0,0,0.7)"}},[t._v("Header")]),t._v(" "),e("el-container",{attrs:{id:"main"}},[e("el-main",{style:{overflow:"scroll","overflow-x":"hidden"}},[e("div",{class:[t.animation?"avatarAnimation":"avatarReverse"],attrs:{id:"avatar"}},[e("img",{attrs:{src:t.avatar,alt:""}})]),t._v(" "),e("transition",{attrs:{name:"main",mode:"out-in"}},[e("router-view")],1)],1),t._v(" "),e("el-aside",{staticStyle:{width:"230px"}},[e("ul",t._l(t.navs,function(a,n){return e("li",{on:{click:function(a){t.isAvatarAnimation(n)}}},[e("router-link",{class:{navLink:!0},style:{"background-color":a.backgroundColor},attrs:{to:{path:a.path}}},[t._v(t._s(a.title))])],1)}))])],1),t._v(" "),e("el-footer",{style:{backgroundColor:"rgba(0,0,0,0.7)"}},[t._v("Footer")])],1)],1)},i=[],s={render:n,staticRenderFns:i};a.a=s},"8CQg":function(t,a,e){t.exports=e.p+"static/img/vueSpa.7d963b3.png"},"Av+5":function(t,a){},CBIP:function(t,a,e){t.exports=e.p+"static/img/carousel.71b7ae9.png"},CosB:function(t,a,e){"use strict";a.a={data:function(){return{items:[{title:"姓名：",content:"何凯"},{title:"性别：",content:"男"},{title:"电话：",content:"17778395905"},{title:"QQ邮箱：",content:"1020197376@qq.com"},{title:"OUTLOOK邮箱：",content:"cnhekai@outlook.com"}]}}}},Czyn:function(t,a,e){"use strict";function n(t){e("eRD1")}var i=e("+NYI"),s=e("v5/p"),r=e("/Xao"),o=n,c=r(i.a,s.a,!1,o,"data-v-e9214c0c",null);a.a=c.exports},DOOW:function(t,a){},"E/vS":function(t,a){},F3EB:function(t,a,e){"use strict";var n=e("PdYM"),i=e.n(n),s=e("d/6q"),r=e.n(s),o=e("Rhmf"),c=e.n(o),u=e("8CQg"),l=e.n(u),v=e("CBIP"),d=e.n(v),p=e("dft9"),m=e.n(p);a.a={data:function(){return{items:[{path:"https://cnhekai.github.io/2048/",id:"myGame",imgpath:i.a,deraction:"这是一个使用jQuery编写的一个2048小游戏，使用键盘的方向键控制模块移动，也可以在手机端玩"},{path:"https://cnhekai.github.io/newspaper/",id:"myNews",imgpath:r.a,deraction:"这是使用HTML和CSS进行排版联系的页面"},{path:"https://cnhekai.github.io/htmlBasics/",id:"htmlBasics",imgpath:c.a,deraction:"这是HTML和CSS的基础应用"},{path:"https://cnhekai.github.io/vueSpa/",id:"vueSpa",imgpath:l.a,deraction:"这是vue和vue-router练习页面"},{path:"https://cnhekai.github.io/3dCarousel/",id:"Carousel",imgpath:d.a,deraction:"这是使用JS和CSS3的3d属性做的3D轮播图，可使用鼠标点击切换左右图片"},{path:"https://cnhekai.github.io/mobilePage/",id:"mobilePage",imgpath:m.a,deraction:"这是使用CSS媒体查询做的移动端页面，请使用手机模拟器或者手机打开该页面查看"}]}}}},M93x:function(t,a,e){"use strict";function n(t){e("DOOW")}var i=e("NZSx"),s=e("3CsF"),r=e("/Xao"),o=n,c=r(i.a,s.a,!1,o,null,null);a.a=c.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("5vqR"),i=e("M93x"),s=e("YaEn"),r=e("0SyO"),o=e.n(r),c=e("dHzK");e.n(c);n.default.config.productionTip=!1,n.default.use(o.a),new n.default({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},NZSx:function(t,a,e){"use strict";var n=e("k9Qt"),i=e.n(n);a.a={name:"app",data:function(){return{animation:!0,avatar:i.a,navs:[{title:"主页",backgroundColor:"#207d59",path:"/home"},{title:"自我介绍",backgroundColor:"#3b5b8e",path:"/aboutme"},{title:"项目",backgroundColor:"#5c9faf",path:"/projects"},{title:"联系我",backgroundColor:"#b85b53",path:"/contactme"}]}},methods:{isAvatarAnimation:function(t){switch(console.log(t),t){case 0:this.animation=!0;break;case 1:case 2:case 3:this.animation=!1}}},mounted:function(){console.log("fasdfasd"),this.$router.push("/")}}},PdYM:function(t,a,e){t.exports=e.p+"static/img/2048.375ba4a.png"},Rhmf:function(t,a,e){t.exports=e.p+"static/img/html.14c64f4.png"},YQTD:function(t,a,e){"use strict";function n(t){e("YTlk")}var i=e("CosB"),s=e("eOQ5"),r=e("/Xao"),o=n,c=r(i.a,s.a,!1,o,"data-v-522f991c",null);a.a=c.exports},YTlk:function(t,a){},YaEn:function(t,a,e){"use strict";var n=e("5vqR"),i=e("zO6J"),s=e("wUZA"),r=e("Czyn"),o=e("fYDc"),c=e("YQTD");n.default.use(i.a),a.a=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:s.a},{path:"/aboutme",name:"aboutme",component:r.a},{path:"/projects",name:"projects",component:o.a},{path:"/contactme",name:"contactme",component:c.a}]})},"d/6q":function(t,a,e){t.exports=e.p+"static/img/news.13c8a98.png"},dHzK:function(t,a){},dft9:function(t,a,e){t.exports=e.p+"static/img/mobile.d9d0204.png"},eOQ5:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"contactme"}},[t._l(t.items,function(a){return e("div",[e("span",[t._v(t._s(a.title))]),t._v(t._s(a.content))])}),t._v(" "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=_svKyMrLw83Jzcy6i4vUmZWX"}},[e("el-button",{attrs:{type:"primary"}},[t._v("给我发QQ邮件")])],1)],2)])},i=[],s={render:n,staticRenderFns:i};a.a=s},eRD1:function(t,a){},fYDc:function(t,a,e){"use strict";function n(t){e("E/vS")}var i=e("F3EB"),s=e("36Ko"),r=e("/Xao"),o=n,c=r(i.a,s.a,!1,o,"data-v-9093653c",null);a.a=c.exports},k9Qt:function(t,a,e){t.exports=e.p+"static/img/6.d5fdfea.jpg"},"v5/p":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,md:14}},[e("div",{staticClass:"aboutme"},[e("h2",[t._v("自我介绍：")]),t._v(" "),e("p",[t._v("虽然毕业后没有能从事本专业的工作，但是大学学习的基础，让我能通过自学熟练的使用HTML、CSS进行网页布局及移动端适配，\n                用JS做过3D轮播图等，用jquery开发过2048小游戏，用canvas做过点阵时钟，\n                用vue和vue-router做过单页面网页，对前端开发怀有很大的热情")])])]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:10}},[e("div",{staticClass:"schoolOfGraduation"},[e("h2",[t._v("工作经历:")]),t._v(" "),e("p",[t._v("2015年毕业于成都东软学院软件技术专业，此后至2016年年初都在帮朋友做弱电方面的工程")]),t._v(" "),e("p",[t._v("2016年2月至2017年5月就职于四川智信科技有限公司，该公司的主要业务是智能照明，而我在工作期间主要负责现场的施工与调试以及软件的编写，由于奶奶生病需要人照顾辞职")])])]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:24}},[e("div",{staticClass:"skill"},[e("h2",[t._v("掌握技能：")]),t._v(" "),e("span",[t._v("HTML CSS 80%")]),t._v(" "),e("div",{staticClass:"progress-bar"},[e("div",{attrs:{id:"myhtml"}})]),t._v(" "),e("span",[t._v("JS JQUERY 85%")]),t._v(" "),e("div",{staticClass:"progress-bar"},[e("div",{attrs:{id:"myjs"}})]),t._v(" "),e("span",[t._v("VUE 70%")]),t._v(" "),e("div",{staticClass:"progress-bar"},[e("div",{attrs:{id:"myvue"}})]),t._v(" "),e("span",[t._v("其他：PHOTOSHOP HTML5 CSS3等 50%")]),t._v(" "),e("div",{staticClass:"progress-bar"},[e("div",{attrs:{id:"myother"}})])])])],1)],1)},i=[],s={render:n,staticRenderFns:i};a.a=s},wUZA:function(t,a,e){"use strict";function n(t){e("yPi+")}var i=e("Av+5"),s=e.n(i),r=e("yyKJ"),o=e("/Xao"),c=n,u=o(s.a,r.a,!1,c,"data-v-76260711",null);a.a=u.exports},"yPi+":function(t,a){},yyKJ:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",[t._v("欢迎来到我的主页")]),t._v(" "),e("p",[t._v("这是一个使用vue、vue-router和elementUI做成的单页面网页，它包含了我的自我介绍和自己做的小项目的链接，希望您能通过该网页初步的了解我")]),t._v(" "),e("p",[t._v("这是我的GitHub地址："),e("router-link",{attrs:{to:"https://github.com/cnhekai"}},[t._v("github.com/cnhekai")])],1)])},i=[],s={render:n,staticRenderFns:i};a.a=s}},["NHnr"]);
//# sourceMappingURL=app.62dcabb3ca6f994606f3.js.map