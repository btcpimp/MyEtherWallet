(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c7e598"],{"5af3":function(t,e,n){},"6db3":function(t,e,n){"use strict";var s=n("5af3"),a=n.n(s);a.a},"90e9":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"already-owned-container"},[n("h3",[t._v(t._s(t.$t("ens.already-owned",{domain:t.fullDomainName})))]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.label-hash"))+"("+t._s(t.hostName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.name-hash"))+"("+t._s(t.fullDomainName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.owner"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"}],staticClass:"content-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),t._l(t.supportedCoins,(function(e,s){return e.value?n("div",{key:s.id},[n("span",{staticClass:"currency"},[t._v(t._s(e.symbol)+" "+t._s(t.$t("common.lowercase-addr"))+":\n      ")]),n("span",{staticClass:"content"},[t._v(t._s(e.value))])]):t._e()}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasAnyTxt,expression:"hasAnyTxt"}],staticClass:"content-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),t._l(t.txtRecords,(function(e,s){return""!==e?n("div",{key:s},[n("span",{staticClass:"currency"},[t._v(t._s(s)+": ")]),n("span",{staticClass:"content"},[t._v(t._s(e))])]):t._e()}))],2),n("div",{staticClass:"owner-options"},[t.owner.toLowerCase()===t.account.address.toLowerCase()?n("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v("\n      "+t._s(t.$t("ens.manage"))+"\n    ")]):t._e()]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("539d"),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={components:{"interface-bottom-text":r["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""},supportedCoins:{type:Object,default:function(){}},resolverMultiCoinSupport:{type:Boolean,default:!1},txtRecords:{type:Object,default:function(){}}},computed:l({},Object(c["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},hasAnyTxt:function(){for(var t in this.txtRecords)if(""!==this.txtRecords[t])return!0;return!1}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},p=u,d=(n("6db3"),n("2877")),f=Object(d["a"])(p,s,a,!1,null,"7ca169a1",null),m=f.exports;n.d(e,"default",(function(){return m}))}}]);
//# sourceMappingURL=chunk-79c7e598.3aff93e1.js.map