(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiancejieguo/add-or-update"],{"00ff":function(e,n,a){"use strict";var r=a("808b"),t=a.n(r);t.a},"028b":function(e,n,a){"use strict";a.r(n);var r=a("b4e6"),t=a("8b87");for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);a("00ff");var u,c=a("f0c5"),o=Object(c["a"])(t["default"],r["b"],r["c"],!1,null,"488dd85b",null,!1,r["a"],u);n["default"]=o.exports},"808b":function(e,n,a){},"8b87":function(e,n,a){"use strict";a.r(n);var r=a("b6dc"),t=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);n["default"]=t.a},b4e6:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"5735"))}},t=function(){var e=this,n=e.$createElement;e._self._c},i=[]},b6dc:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,r,t,i,u){try{var c=e[i](u),o=c.value}catch(s){return void a(s)}c.done?n(o):Promise.resolve(o).then(r,t)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(r,t){var u=e.apply(n,a);function c(e){i(u,r,t,c,o,"next",e)}function o(e){i(u,r,t,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5735"))}.bind(null,a)).catch(a.oe)},o={data:function(){return{cross:"",ruleForm:{jiancemingcheng:"",jianceleixing:"",jianceshijian:"",jiancejieguo:"",jiancetupian:"",zhanghao:"",xingming:"",yiyuanbianhao:"",yiyuanmingcheng:"",userid:""},user:{},ro:{jiancemingcheng:!1,jianceleixing:!1,jianceshijian:!1,jiancejieguo:!1,jiancetupian:!1,zhanghao:!1,xingming:!1,yiyuanbianhao:!1,yiyuanmingcheng:!1,userid:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(r.default.mark((function t(){var i,u,c,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,a.$api.session(i);case 3:if(u=t.sent,a.user=u.data,a.ruleForm.yiyuanbianhao=a.user.yiyuanbianhao,a.ro.yiyuanbianhao=!0,a.ruleForm.yiyuanmingcheng=a.user.yiyuanmingcheng,a.ro.yiyuanmingcheng=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=17;break}return a.ruleForm.id=n.id,t.next=15,a.$api.info("jiancejieguo",a.ruleForm.id);case 15:u=t.sent,a.ruleForm=u.data;case 17:if(a.cross=n.cross,!n.cross){t.next=65;break}c=e.getStorageSync("crossObj"),t.t0=r.default.keys(c);case 21:if((t.t1=t.t0()).done){t.next=65;break}if(o=t.t1.value,"jiancemingcheng"!=o){t.next=27;break}return a.ruleForm.jiancemingcheng=c[o],a.ro.jiancemingcheng=!0,t.abrupt("continue",21);case 27:if("jianceleixing"!=o){t.next=31;break}return a.ruleForm.jianceleixing=c[o],a.ro.jianceleixing=!0,t.abrupt("continue",21);case 31:if("jianceshijian"!=o){t.next=35;break}return a.ruleForm.jianceshijian=c[o],a.ro.jianceshijian=!0,t.abrupt("continue",21);case 35:if("jiancejieguo"!=o){t.next=39;break}return a.ruleForm.jiancejieguo=c[o],a.ro.jiancejieguo=!0,t.abrupt("continue",21);case 39:if("jiancetupian"!=o){t.next=43;break}return a.ruleForm.jiancetupian=c[o],a.ro.jiancetupian=!0,t.abrupt("continue",21);case 43:if("zhanghao"!=o){t.next=47;break}return a.ruleForm.zhanghao=c[o],a.ro.zhanghao=!0,t.abrupt("continue",21);case 47:if("xingming"!=o){t.next=51;break}return a.ruleForm.xingming=c[o],a.ro.xingming=!0,t.abrupt("continue",21);case 51:if("yiyuanbianhao"!=o){t.next=55;break}return a.ruleForm.yiyuanbianhao=c[o],a.ro.yiyuanbianhao=!0,t.abrupt("continue",21);case 55:if("yiyuanmingcheng"!=o){t.next=59;break}return a.ruleForm.yiyuanmingcheng=c[o],a.ro.yiyuanmingcheng=!0,t.abrupt("continue",21);case 59:if("userid"!=o){t.next=63;break}return a.ruleForm.userid=c[o],a.ro.userid=!0,t.abrupt("continue",21);case 63:t.next=21;break;case 65:a.styleChange();case 66:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jianceshijianConfirm:function(e){console.log(e),this.ruleForm.jianceshijian=e.result,this.$forceUpdate()},jiancetupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.jiancetupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function a(){var t,i,u,c,o,s,l,f,g,d;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(c=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==c){a.next=16;break}if(s=e.getStorageSync("crossObj"),c.startsWith("[")){a.next=12;break}for(l in s)l==c&&(s[l]=o);return f=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(f),s);case 10:a.next=16;break;case 12:t=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!t){a.next=38;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:t,crossrefid:i},a.next=22,n.$api.list("jiancejieguo",g);case 22:if(d=a.sent,!(d.data.total>=u)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("jiancejieguo",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("jiancejieguo",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("jiancejieguo",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("jiancejieguo",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,a("543d")["default"])},d69f:function(e,n,a){"use strict";(function(e){a("69a3");r(a("66fd"));var n=r(a("028b"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])}},[["d69f","common/runtime","common/vendor"]]]);