(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e93aacbc"],{"00a0":function(t,e,i){},1768:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[i("div",{staticClass:"title-bar-container"},[i("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?i("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():i("div",{staticClass:"button-text"},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]),t.showEnable&&!t.expanded?i("div",{staticClass:"button-text"},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]):t._e(),t.showEnable&&t.expanded?i("div",{staticClass:"button-text"},[t._v("\n      "+t._s(t.$t("common.yes"))+"\n    ")]):t._e(),i("div",{staticClass:"switch sliding-switch-white"},[i("label",{staticClass:"switch"},[i("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),i("span",{staticClass:"slider round"})])])],1),i("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[i("div",{staticClass:"content-block"},[t._t("default")],2)])])},a=[],r={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},o=r,s=(i("a158"),i("2877")),c=Object(s["a"])(o,n,a,!1,null,"0fe729f8",null),l=c.exports;i.d(e,"a",(function(){return l}))},"412b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-maker"},[i("dai-confirmation-modal",{ref:"daiconfirmation",attrs:{opencdp:t.openCdp,txinfo:t.txInfo,"liquidation-price":t.liquidationPrice,"collat-ratio":t.displayFixedPercent(t.collatRatio),"liquidation-penalty":t.displayPercentValue(t.liquidationPenalty),"min-ratio":t.displayPercentValue(t.liquidationRatio),"current-price":t.displayFixedValue(t.ethPrice,2),collateral:t.ethQty.toString(),generate:t.daiQty.toString()}}),t.loading?i("loading-overlay",{attrs:{loadingmessage:t.$t("dappsMaker.creating-message")}}):t._e(),i("div",{staticClass:"manage-container"},[t._v("\n    Single collateral SAI (previously called DAI) is being migrated to\n    multi-collateral DAI (new DAI). Therefore any new generation should use\n    the new structure.\n    "),i("p",{staticClass:"top-title"},[t._v("\n      "+t._s(t.$t("dappsMaker.maker_title"))+"\n    ")]),i("p",{staticClass:"top-title-sub"},[t._v("\n      "+t._s(t.$t("dappsMaker.create-instruct"))+"\n    ")])])],1)},a=[],r=(i("8e6e"),i("456d"),i("96cf"),i("3b8d")),o=(i("6b54"),i("ac6a"),i("bd86")),s=i("2f62"),c=i("70c1"),l=i.n(c),u=i("55c1"),d=i("539d"),p=i("c8e5"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:t.$t("dappsMaker.dai-confirmation"),centered:"","hide-footer":"",static:"",lazy:""}},[n("div",{staticClass:"modal-content-container"},[n("div",{staticClass:"tx-amount"},[n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.collateral"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9165")}})]),n("div",{staticClass:"amount"},[t._v("\n              "+t._s(t.collateral)),n("span",[t._v(t._s(t.$t("common.currency.eth")))])])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:i("432e")}})]),n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.generate"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9b76")}})]),n("div",{staticClass:"amount"},[t._v("\n              "+t._s(t.generate)),n("span",[t._v(t._s(t.$t("dappsMaker.dai")))])])])])]),n("div",{staticClass:"detail-info"},[n("expanding-option",{attrs:{title:t.$t("dappsMaker.details")}},[n("ul",[n("li",[n("p",[t._v("\n                "+t._s(t.$t("dappsMaker.liquid-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+")\n              ")]),n("p",{staticClass:"bold"},[t._v("\n                "+t._s(t.liquidationPrice)+" "+t._s(t.$t("common.currency.usd"))+"\n              ")])]),n("li",[n("p",[t._v("\n                "+t._s(t.$t("dappsMaker.current-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+")\n              ")]),n("p",[t._v(t._s(t.currentPrice)+" "+t._s(t.$t("common.currency.usd")))])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidation-penalty")))]),n("p",[t._v(t._s(t.liquidationPenalty)+"%")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.collateral-ratio")))]),n("p",{staticClass:"bold"},[t._v(t._s(t.collatRatio)+" %")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.minimum-ratio")))]),n("p",[t._v(t._s(t.minRatio)+"%")])])])])],1),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:t.confirmButton},nativeOn:{click:function(e){return t.confirmClicked(e)}}})],1)])])],1)},h=[],v=(i("c5f6"),i("1768")),m=i("a8f0"),g={components:{"expanding-option":v["a"],"standard-button":m["a"]},props:{opencdp:{type:Function,default:function(){}},liquidationPrice:{type:Number,default:0},collatRatio:{type:String,default:"Error"},liquidationPenalty:{type:String,default:"Error"},minRatio:{type:String,default:"Error"},currentPrice:{type:String,default:"Error"},collateral:{type:String,default:"Error"},generate:{type:String,default:"Error"}},data:function(){return{confirmButton:{title:this.$t("dappsMaker.confirm-and-create"),buttonStyle:"green",helpCenter:!0}}},computed:{},watch:{},mounted:function(){},methods:{confirmClicked:function(){this.opencdp()}}},y=g,b=(i("8d55"),i("2877")),_=Object(b["a"])(y,f,h,!1,null,"0ad1ed7a",null),w=_.exports,P=i("7a09"),x=i("c16c"),C=i("901e"),k=i.n(C),R=i("cc82"),S=i.n(R);function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var D=function(t){return new k.a(t)},E=function(t,e,i){return D(t).times(D(e)).div(D(i))},Q={components:{"interface-container-title":u["a"],"interface-bottom-text":d["a"],blockie:p["a"],"dai-confirmation-modal":w,"loading-overlay":P["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"},ethPrice:{type:k.a,default:D(0)},pethPrice:{type:k.a,default:D(0)},liquidationPenalty:{type:k.a,default:D(0)},stabilityFee:{type:k.a,default:D(0)},liquidationRatio:{type:k.a,default:D(0)},wethToPethRatio:{type:k.a,default:D(0)},pethMin:{type:k.a,default:D(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},buildEmpty:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}}},data:function(){return{arrowImage:S.a,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,txInfo:{},loading:!1}},computed:O({},Object(s["b"])(["account","gasPrice","web3","network","ens"]),{validInputs:function(){return!D(this.ethQty).isNaN()&&!D(this.daiQty).isNaN()&&(!!D(this.ethQty).gt(0)&&(!D(this.ethQty).lte(this.values.minEth)&&(!D(this.maxDaiDraw).lte(D(this.daiQty))&&(!D(this.collatRatio).lte(1.501)&&D(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)))))},hasEnoughEth:function(){return!D(this.ethQty).isNaN()&&D(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)},atSetFloor:function(){return this.priceFloor<=0?0:E(this.ethPrice,this.liquidationRatio,this.priceFloor)},collatRatio:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcCollatRatio(this.ethQty,this.daiQty)},liquidationPrice:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcLiquidationPrice(this.ethQty,this.daiQty)},maxDaiDraw:function(){if(this.ethQty<=0)return 0;var t=this.calcDaiDraw(this.ethQty).times(.01);return D(this.calcDaiDraw(this.ethQty)).minus(t)},minEthDeposit:function(){return this.daiQty<=0?0:this.calcMinEthDeposit(this.daiQty)},risky:function(){var t=this.collatRatio;return!!D(t).gt(0)&&D(t).lte(2)},veryRisky:function(){var t=this.collatRatio;return!!D(t).gt(0)&&D(t).lte(1.75)},depositInPeth:function(){return this.ethQty<=0?0:this.toPeth(this.ethQty)},minEth:function(){return this.wethToPethRatio?D(this.pethMin).times(this.wethToPethRatio):"--"}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.buildEmptyInstance();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{buildEmptyInstance:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.buildEmpty();case 2:this.makerCDP=t.sent,this.$forceUpdate();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),displayPercentValue:x["e"],displayFixedValue:x["d"],displayFixedPercent:x["c"],openCdp:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!(this.ethQty<=0)){t.next=3;break}return t.abrupt("return",0);case 3:return setTimeout((function(){e.loading=!1}),5e3),this.$eventHub.$on("showTxConfirmModal",(function(){e.$emit("cdpOpened"),e.loading&&(e.$refs.daiconfirmation.$refs.modal.hide(),e.loading=!1)})),t.next=7,this.makerCDP.openCdp(this.ethQty,this.daiQty);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),openDaiConfirmation:function(){this.$refs.daiconfirmation.$refs.modal.show()},toUSD:function(t){if(void 0===t||null===t)return D(0);var e=this.ethPrice.times(D(t));return e.lt(0)?D(0):e},toPeth:function(t){return D(t).eq(0)?D(0):D(t).div(this.wethToPethRatio)},fromPeth:function(t){return D(t).eq(0)?D(0):D(t).times(this.wethToPethRatio)},calcMinCollatRatio:function(t){return E(this.ethPrice,this.liquidationRatio,t)},calcDaiDraw:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:E(e,D(t),i)},calcMinEthDeposit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:E(i,t,e)},calcCollatRatio:function(t,e){return t<=0||e<=0?0:E(this.ethPrice,t,e)},calcLiquidationPrice:function(t,e){if(t<=0||e<=0)return 0;for(var i=parseInt(this.ethPrice),n=i;n>0;n--){var a=E(n,t,e).lte(this.liquidationRatio);if(a)return n}for(var r=100;r>0;r--){var o=E(r/100,t,e).lte(this.liquidationRatio);if(o)return r/100}return 0}}},q=Q,j=(i("8f5a"),Object(b["a"])(q,n,a,!1,null,"67e1cf5a",null)),M=j.exports;e["default"]=M},4820:function(t,e,i){"use strict";var n=i("eeac"),a=i.n(n);a.a},6764:function(t,e,i){},"7a09":function(t,e,i){"use strict";var n=function(t,e){var i=e._c;return i("div",{staticClass:"loading-overlay"},[i(e.injections.components.LoadingSign,{tag:"component",attrs:{loadingmessage1:e.props.loadingmessage,color:"white"}})],1)},a=[],r=i("c1be"),o={inject:{components:{default:{LoadingSign:r["a"]}}},props:{loadingmessage:{type:String,default:""}}},s=o,c=(i("df84"),i("2877")),l=Object(c["a"])(s,n,a,!0,null,"466143c1",null),u=l.exports;i.d(e,"a",(function(){return u}))},"7bbb":function(t,e,i){},"8d55":function(t,e,i){"use strict";var n=i("ef1c"),a=i.n(n);a.a},"8f5a":function(t,e,i){"use strict";var n=i("00a0"),a=i.n(n);a.a},a158:function(t,e,i){"use strict";var n=i("6764"),a=i.n(n);a.a},c16c:function(t,e,i){"use strict";i.d(e,"e",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"c",(function(){return l})),i.d(e,"f",(function(){return u})),i.d(e,"h",(function(){return d})),i.d(e,"g",(function(){return p})),i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return h}));i("6b54");var n=i("901e"),a=i.n(n),r=function(t){return new a.a(t)},o=function(t,e,i){return r(t).times(r(e)).div(r(i))};function s(t){return a.a.isBigNumber(t)||(t=new a.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.a.isBigNumber(t)||(t=new a.a(t)),!isFinite(t)||isNaN(t)?"--":i?t.toFixed(e,a.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=c(s(t),e,i);return isFinite(n)&&new a.a(n).gt(0)?n:"--"}function u(t,e,i,n){return o(r(t),r(e),r(i)).minus(r(n))}function d(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(o(r(e).plus(.001),r(i),r(n))).minus(r(a).times(1))}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(o(r(e),r(i),r(n))).minus(r(a).times(1))}function f(t,e,i){return o(r(i),t,e)}function h(t,e,i,n){for(var a=parseInt(i),s=a;s>0;s--){var c=o(s,t,e).lte(r(n));if(c)return s}for(var l=100;l>0;l--){var u=o(l/100,t,e).lte(r(n));if(u)return l/100}return 0}},c1be:function(t,e,i){"use strict";var n=function(t,e){var i=e._c;return i("div",[i("div",{class:[e.props.color,"loading-container","loading-sign"]},[e._m(0),""!=e.props.loadingmessage1?i("p",{staticClass:"loading-message1"},[e._v("\n      "+e._s(e.props.loadingmessage1)+"\n    ")]):e._e(),""!=e.props.loadingmessage2?i("p",{staticClass:"loading-message2"},[e._v("\n      "+e._s(e.props.loadingmessage2)+"\n    ")]):e._e()])])},a=[function(t,e){var i=e._c;return i("div",{staticClass:"lds-spinner"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])}],r={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},o=r,s=(i("4820"),i("2877")),c=Object(s["a"])(o,n,a,!0,null,"3944612c",null),l=c.exports;i.d(e,"a",(function(){return l}))},df84:function(t,e,i){"use strict";var n=i("7bbb"),a=i.n(n);a.a},eeac:function(t,e,i){},ef1c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e93aacbc.1832c8ff.js.map