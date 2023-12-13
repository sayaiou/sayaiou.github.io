(function(){"use strict";var e={9995:function(e,t,a){var n=a(7754),l=a.n(n),r=a(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],i={name:"App",components:{}},c=i,u=a(1001),d=(0,u.Z)(c,o,s,!1,null,null,null),m=d.exports,p=a(2631),h=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(9392),alt:""}}),t("div",{staticClass:"user-info"},[t("p",{staticClass:"name"},[e._v("Admin")]),t("p",{staticClass:"access"},[e._v("超级管理员")])])]),t("div",{staticClass:"login-info"},[t("p",[e._v("上次登录时间: "),t("span",[e._v("2021-7-19")])]),t("p",[e._v("上次登录地点: "),t("span",[e._v("武汉")])])])]),t("el-card",{staticStyle:{"margin-top":"20px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},e._l(e.tableLabel,(function(e,a){return t("el-table-column",{key:a,attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v("¥"+e._s(a.value))]),t("p",{staticClass:"desc"},[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"220px","margin-left":"20px"}},[t("div",{ref:"echartsF",staticStyle:{height:"220px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"220px"}},[t("div",{ref:"echartsS",staticStyle:{height:"220px"}})]),t("el-card",{staticStyle:{height:"220px"}},[t("div",{ref:"echartsT",staticStyle:{height:"200px"}})])],1)],1)],1)},f=[],b=(a(7658),a(6265)),g=a.n(b);const v=g().create({baseURL:"/api",timeout:1e4});v.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var y=v;const _=()=>y.get("/home/getData"),x=e=>y.get("/user/getUser",e);var C=a(347),k={data(){return{tableData:[],tableLabel:{name:"课程",todayBuy:"今日课程",monthBuy:"本月购买",totalBuy:"总购买"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},mounted(){_().then((e=>{let{data:t}=e;const{tableData:a}=t.data;this.tableData=a;const n=C.S1(this.$refs.echartsF);var l={};const{orderData:r,userData:o,videoData:s}=t.data,i=Object.keys(r.data[0]),c={data:i};l.xAxis=c,l.yAxis={},l.legend=c,l.series=[],i.forEach((e=>{l.series.push({name:e,data:r.data.map((t=>t[e])),type:"line"})})),n.setOption(l);const u=C.S1(this.$refs.echartsS);var d={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:o.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"新增用户",data:o.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:o.map((e=>e.active)),type:"bar"}]};u.setOption(d);const m=C.S1(this.$refs.echartsT);var p={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{data:s,type:"pie"}]};m.setOption(p)}))}},w=k,S=(0,u.Z)(w,h,f,!1,null,"ef3611b2",null),O=S.exports,$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,"before-close":e.handleClose,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,inline:!0,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:"1"}}),t("el-option",{attrs:{label:"女",value:"0"}})],1)],1),t("el-form-item",{attrs:{label:"出生日期",prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),t("el-form-item",{attrs:{label:"地址",prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" + 新增 ")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1==a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1)],1)},D=[],B={data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},tableData:[],rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],age:[{required:!0,message:"请输入姓名年龄",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],birth:[{required:!0,message:"请选择出生日期",trigger:"blur"}],addr:[{required:!0,message:"请输入地址",trigger:"blur"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(console.log(this.form,"form"),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleEdit(){},handleDelete(){}},mounted(){x().then((e=>{let{data:t}=e;console.log(t),this.tableData=t.list}))}},M=B,T=(0,u.Z)(M,$,D,!1,null,"2cae510c",null),L=T.exports,U=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},Z=[],R=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:a.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)},P=[],j={data(){return{menuData:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"MallManage/MallManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}]}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"==this.$route.path&&"/"==e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.Tab.isCollapse}}},A=j,q=(0,u.Z)(A,R,P,!1,null,"01c0f335",null),V=q.exports,H=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("el-button",{staticStyle:{"margin-right":"20px"},attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(9392),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",[e._v("退出")])],1)],1)],1)])},I=[],J=a(3822),N={data(){return{}},methods:{handleMenu(){this.$store.commit("collapseMenu")}},computed:{...(0,J.rn)({tags:e=>e.Tab.tabsList})},mounted(){}},z=N,E=(0,u.Z)(z,H,I,!1,null,"1a5aa02e",null),F=E.exports,G=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(a,n){return t("el-tag",{key:a.path,attrs:{closable:"home"!==a.name,effect:e.$route.name===a.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changeMenu(a)},close:function(t){return e.handleClose(a,n)}}},[e._v(" "+e._s(a.label)+" ")])})),1)},K=[],Q={name:"CommonTag",data(){return{}},computed:{...(0,J.rn)({tags:e=>e.Tab.tabsList})},methods:{...(0,J.OI)(["closeTag"]),changeMenu(e){this.$route.path!==e.path&&this.$router.push(e.path)},handleClose(e,t){this.closeTag(e);const a=this.tags.length;e.name===this.$route.name&&(t===a?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}},mounted(){}},W=Q,X=(0,u.Z)(W,G,K,!1,null,"2cd675c2",null),Y=X.exports,ee={components:{CommonAside:V,CommonHeader:F,CommonTag:Y},data(){return{}}},te=ee,ae=(0,u.Z)(te,U,Z,!1,null,"614b5658",null),ne=ae.exports,le=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是mall")])},re=[],oe={data(){return{}}},se=oe,ie=(0,u.Z)(se,le,re,!1,null,"28f27618",null),ce=ie.exports,ue=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是页面一")])},de=[],me={data(){return{}}},pe=me,he=(0,u.Z)(pe,ue,de,!1,null,"0a9055d2",null),fe=he.exports,be=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是页面二")])},ge=[],ve={data(){return{}}},ye=ve,_e=(0,u.Z)(ye,be,ge,!1,null,"c956d2a8",null),xe=_e.exports;r["default"].use(p.ZP);const Ce=[{path:"/",component:ne,redirect:"/home",children:[{path:"home",name:"home",component:O},{path:"user",name:"user",component:L},{path:"mall",name:"mall",component:ce},{path:"page1",name:"page1",component:fe},{path:"page2",name:"page2",component:xe}]}],ke=new p.ZP({routes:Ce});var we=ke,Se={state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){const a=e.tabsList.findIndex((e=>e.name===t.name));-1===a&&e.tabsList.push(t)}},closeTag(e,t){const a=e.tabsList.findIndex((e=>e.name===t.name));e.tabsList.splice(a,1)}}};r["default"].use(J.ZP);var Oe=new J.ZP.Store({modules:{Tab:Se}}),$e=a(7634),De=a.n($e);let Be=[];var Me={getStatisticalData:()=>{for(let e=0;e<7;e++)Be.push(De().mock({"苹果":De().Random.float(100,8e3,0,0),vivo:De().Random.float(100,8e3,0,0),oppo:De().Random.float(100,8e3,0,0),"魅族":De().Random.float(100,8e3,0,0),"三星":De().Random.float(100,8e3,0,0),"小米":De().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Be},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};a(541);function Te(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let Le=[];const Ue=200;for(let Re=0;Re<Ue;Re++)Le.push(De().mock({id:De().Random.guid(),name:De().Random.cname(),addr:De().mock("@county(true)"),"age|18-60":1,birth:De().Random.date(),sex:De().Random.integer(0,1)}));var Ze={getUserList:e=>{const{name:t,page:a=1,limit:n=20}=Te(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+n);const l=Le.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=l.filter(((e,t)=>t<n*a&&t>=n*(a-1)));return{code:2e4,count:l.length,list:r}},createUser:e=>{const{name:t,addr:a,age:n,birth:l,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),Le.unshift({id:De().Random.guid(),name:t,addr:a,age:n,birth:l,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(Le=Le.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=Te(e.url);return t=t.split(","),Le=Le.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:n,age:l,birth:r,sex:o}=JSON.parse(e.body),s=parseInt(o);return Le.some((e=>{if(e.id===t)return e.name=a,e.addr=n,e.age=l,e.birth=r,e.sex=s,!0})),{code:2e4,data:{message:"编辑成功"}}}};De().mock("/api/home/getData",Me.getStatisticalData),De().mock("/api/user/add","post",Ze.createUser),De().mock("/api/user/edit","post",Ze.updateUser),De().mock("/api/user/del","post",Ze.deleteUser),De().mock("/api/user/getUser","get",Ze.getUserList),r["default"].config.productionTip=!1,r["default"].use(l()),new r["default"]({router:we,store:Oe,render:e=>e(m)}).$mount("#app")},9392:function(e,t,a){e.exports=a.p+"img/user.36929a03.png"}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,r){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],r=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,l,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,o=n[0],s=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var u=i(a)}for(t&&t(n);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9995)}));n=a.O(n)})();
//# sourceMappingURL=app.af382219.js.map