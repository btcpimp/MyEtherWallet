(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3e9acfc"],{"2aa9":function(t,e,n){"use strict";var i=n("8c1d"),a=n.n(i);a.a},"8c1d":function(t,e,n){},c2b1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"permanent-registration-container"},[n("div",{staticClass:"permanent-registration-content"},[n("div",{staticClass:"commitment-wait",attrs:{id:"wait-container"}},[t._m(0),n("h3",[t._v("\n        "+t._s(t.$t("ens.hang-on"))+" "),n("br"),t._v("\n        "+t._s(t.$t("ens.finalize-registration"))+" "),n("br"),n("span",{staticClass:"domain-name"},[t._v(" "+t._s(t.fullDomainName)+". ")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.commitmentCreated,expression:"commitmentCreated"}],staticClass:"permanent-registration-button"},[n("button",{class:["large-round-button-green-filled",t.canRegister?"":"disabled"],on:{click:t.registerWithDuration}},[n("span",[t._v("\n          "+t._s(t.canRegister?t.$t("ens.register"):t.ticker)+"\n        ")])])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circles-container"},[n("div",{staticClass:"circle"}),n("div",{staticClass:"circle"}),n("div",{staticClass:"circle"})])}],r=n("539d"),s={components:{"interface-bottom-text":r["a"]},props:{hostName:{type:String,default:""},registerWithDuration:{type:Function,default:function(){}},tld:{type:String,default:""},loading:{type:Boolean,default:!1},minimumAge:{type:String,default:"0"},commitmentCreated:{type:Boolean,default:!1}},data:function(){return{ticker:"0".concat(this.minimumAge/60<10?this.minimumAge/60:"00",":00"),timer:function(){},canRegister:!1}},computed:{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}},watch:{commitmentCreated:function(t){var e=this;if(t){clearInterval(this.timer);var n=this;n.canRegister=!1,""===n.hostName&&n.$router.push("/interface/dapps/manage-ens");var i=(new Date).getTime(),a=i+1e3*n.minimumAge;n.minimumAge>0&&(n.timer=setInterval((function(){var t=(new Date).getTime(),i=a-t,r=Math.floor(i%36e5/6e4),s=Math.floor(i%6e4/1e3);n.ticker="".concat(r>=10?r:r<0?"00":"0"+r,":").concat(s>=10?s:s<0?"00":"0"+s),s<0&&(n.canRegister=!0,e.$root.$emit("bv::toggle::collapse","commitment-inputs-container"),e.$root.$emit("bv::toggle::collapse","wait-container"),clearInterval(n.timer))}),1e3))}else clearInterval(this.timer)}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},destroyed:function(){clearInterval(this.timer)}},c=s,o=(n("2aa9"),n("2877")),m=Object(o["a"])(c,i,a,!1,null,"4709921b",null),l=m.exports;n.d(e,"default",(function(){return l}))}}]);
//# sourceMappingURL=chunk-d3e9acfc.1cfa3e97.js.map