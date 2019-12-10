(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a681726e"],{"0f87":function(t,e,n){"use strict";var s=n("31b9"),a=n.n(s);a.a},"21ed":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ambrpay-container"},[n("back-button",{attrs:{title:t.$t("dappsAmbrpay.exit-dapp")}}),n("b-container",{staticClass:"pl-5 pr-5"},[n("div",{staticClass:"ambrpay-header mt-5"},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"page-title"},[t._v(t._s(t.$t("dappsAmbrpay.title")))]),n("popover",{staticClass:"dapp-popover",attrs:{popcontent:t.$t("dappsAmbrpay.ambrpay-popover")}})],1),n("div",{staticClass:"btns-container"},[n("b-button",{staticClass:"withdraw-btn",on:{click:function(e){return t.openManageFundsModal("Withdraw")}}},[t._v(t._s(t.$t("dappsAmbrpay.withdraw-funds")))]),n("b-button",{staticClass:"add-btn",on:{click:function(e){return t.openManageFundsModal("Add")}}},[t._v(t._s(t.$t("dappsAmbrpay.add-funds")))])],1)]),n("div",{staticClass:"funds-container"},[n("span",{staticClass:"fund-text"},[t._v(t._s(t.$t("dappsAmbrpay.balance")))]),n("div",{staticClass:"balance-container"},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.loadingBalance,expression:"loadingBalance"}],staticClass:"fa fa-spinner fa-spin"}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"fund-text"},[t._v(t._s(t.availableBalanceEth)+" "+t._s(t.$t("common.currency.eth"))+"\n        ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"usd-text"},[t._v(t._s(t.availableBalanceUSD)+" "+t._s(t.$t("common.currency.usd")))])])]),n("subscription-form",{attrs:{subscriptions:t.subscriptions},on:{startSubscription:t.startSubscription,openManageSubModal:t.openManageSubModal}})],1),n("manage-funds-modal",{ref:"manageFunds",attrs:{"manage-funds-text":t.manageFundsText,"available-balance-eth":t.availableBalanceEth,"available-balance-usd":t.availableBalanceUSD},on:{addFunds:t.addFunds,withdrawFunds:t.withdrawFunds}}),n("manage-subscriptions-modal",{ref:"manageSubs",attrs:{subscriptions:t.subscriptions},on:{unsubscribeSub:t.unsubscribeSub}})],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("7618")),i=(n("96cf"),n("3b8d")),o=(n("6b54"),n("bd86")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subscription-container"},[s("div",{staticClass:"subscription-content"},[s("div",{staticClass:"subscription-form-container"},[s("b-container",[s("b-row",{staticClass:"address-block"},[s("dropdown-address-selector",{attrs:{"clear-address":t.clearAddress,title:t.$t("sendTx.to-addr")},on:{toAddress:function(e){return t.getToAddress(e)}}})],1),s("b-row",[s("b-col",{staticClass:"mt-3",attrs:{cols:"12",md:"5"}},[s("span",{staticClass:"label-text"},[t._v(t._s(t.$t("sendTx.type")))]),s("div",{staticClass:"fake-input"},[s("p",[s("img",{staticClass:"currency-icon",attrs:{src:n("9165")}}),s("span",{staticClass:"token-txt"},[t._v(t._s(t.$t("common.currency.eth")))]),t._v("-"+t._s(t.$t("common.currency.ethereum"))+"\n              ")])])]),s("b-col",{staticClass:"amount-container mt-3",attrs:{cols:"12",md:"7"}},[s("div",{staticClass:"amount-text"},[s("span",{staticClass:"label-text"},[t._v(t._s(t.$t("sendTx.amount")))]),s("span",{staticClass:"action-text entire-balance",on:{click:t.sendEntireBalance}},[t._v(t._s(t.$t("sendTx.button-entire")))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],attrs:{type:"number",placeholder:"0.01",min:"0.01"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),s("p",{staticClass:"sub-text"},[t._v(t._s(t.$t("dappsAmbrpay.automation-fee")))]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.amountErrMsg,expression:"amountErrMsg"}],staticClass:"sub-text err-msg"},[t._v("\n              "+t._s(t.amountErrMsg)+"\n            ")])])],1),s("b-row",{staticClass:"row-style mt-1 interval-container"},[s("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.interval-in-every")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.intervalDays,expression:"intervalDays"}],staticClass:"days-text"},[t._v(t._s(t.$t("dappsAmbrpay.days")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.intervalDays,expression:"intervalDays"}],attrs:{placeholder:t.$t("dappsAmbrpay.enter-days"),type:"number",min:"1",max:"365"},domProps:{value:t.intervalDays},on:{input:function(e){e.target.composing||(t.intervalDays=e.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.intervalErrMsg,expression:"intervalErrMsg"}],staticClass:"sub-text err-msg"},[t._v("\n            "+t._s(t.intervalErrMsg)+"\n          ")])]),s("b-row",{staticClass:"mt-5 button-container"},[s("b-button",{staticClass:"active-sub-btn my-subscriptions-container",on:{click:t.openManageSubModal}},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.title"))+"\n          ")]),s("b-button",{staticClass:"mew-btn",class:[t.isValidInput?"":"disabled"],on:{click:t.startSubscription}},[t._v(t._s(t.$t("dappsAmbrpay.start-recurring")))])],1),s("b-row",[s("div",{staticClass:"clear-all-btn mx-auto mt-3",on:{click:function(e){return t.clear()}}},[t._v("\n            "+t._s(t.$t("common.clear-all"))+"\n          ")])])],1)],1)])])},u=[],l=(n("f559"),n("c8e5")),d=n("2f62"),p=n("901e"),m=n.n(p),b=n("94b2");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={components:{blockie:l["a"],"dropdown-address-selector":b["a"]},props:{subscriptions:{type:Array,default:function(){return[]}}},data:function(){return{address:"",isValidAddress:!1,hexAddress:"",intervalDays:"",sendAmount:"",amountErrMsg:"",intervalErrMsg:"",clearAddress:!1}},computed:f({},Object(d["b"])(["web3","network","account"]),{isValidInput:function(){return this.isValidAddress&&!this.amountErrMsg&&this.sendAmount&&this.address&&!this.intervalErrMsg}}),watch:{sendAmount:function(t){var e=new m.a(t),n=this.web3.utils.fromWei(new m.a(this.account.balance).toFixed(),"ether"),s=new m.a(e.times(.1)),a=e.plus(s);if(!t)return this.amountErrMsg="";e.lt(.01)?this.amountErrMsg="The minimum amount is 0.01 or greater":a.gt(n)?this.amountErrMsg="Amount higher than balance (including 1% automation fee)":this.amountErrMsg=""},intervalDays:function(t){t.startsWith("0")&&t.length>1?this.intervalErrMsg="Please enter a correct number":this.intervalErrMsg=t>365?"Number cannot exceed 365 days":""}},methods:{clear:function(){this.address="",this.isValidAddress=!1,this.hexAddress="",this.intervalDays="",this.sendAmount="",this.amountErrMsg="",this.intervalErrMsg="",this.clearAddress=!this.clearAddress},getToAddress:function(t){this.address=t.address,this.hexAddress=t.address,this.isValidAddress=t.valid},sendEntireBalance:function(){this.account&&(this.sendAmount=this.web3.utils.fromWei(new m.a(this.account.balance).toFixed(),"ether"))},openManageSubModal:function(){this.$emit("openManageSubModal")},startSubscription:function(){var t=this,e={subscriptionPlan:"sp_f06PoxHvvutJZd",amount:new m.a(this.sendAmount).toNumber(),receiverWallet:this.address,interval:new m.a(this.intervalDays).toNumber(),transferOut:!0,network:"auto"};this.$emit("startSubscription",e),this.$nextTick((function(){t.clear(),t.sendAmount="",t.address="",t.intervalDays=""}))}}},w=v,g=(n("72b0"),n("2877")),y=Object(g["a"])(w,c,u,!1,null,"65e8fa69",null),A=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"manageFundsModal",attrs:{title:t.manageFundsText+" "+t.$t("dappsAmbrpay.manage-funds.funds"),centered:"","hide-footer":"",static:"",lazy:""}},[n("div",{staticClass:"modal-contents"},[n("div",{staticClass:"balance-container"},[n("span",{staticClass:"funds-txt"},[t._v(t._s(t.$t("dappsAmbrpay.manage-funds.avail-balance")))]),n("div",[n("p",{staticClass:"funds-txt"},[t._v("\n            "+t._s(t.availableBalanceEth)+" "+t._s(t.$t("common.currency.eth"))+"\n          ")]),n("p",{staticClass:"text-right"},[t._v("$"+t._s(t.availableBalanceUsd))])])]),n("hr"),t.actionStep?n("div",{staticClass:"action-container"},[n("p",{staticClass:"funds-txt"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.how-much-eth"))+"\n          "),n("span",{staticClass:"action-txt"},[t._v(" "+t._s(t.manageFundsText)+"? ")])]),n("span",{staticClass:"eth-text"},[t._v(t._s(t.$t("common.currency.eth")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAmount,expression:"ethAmount"}],staticClass:"mt-3",attrs:{type:"number"},domProps:{value:t.ethAmount},on:{input:function(e){e.target.composing||(t.ethAmount=e.target.value)}}}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.errMsg,expression:"errMsg"}],staticClass:"err-msg pl-2"},[t._v(t._s(t.errMsg))])]):t._e(),t.actionStep?t._e():n("div",{staticClass:"confirmation-container"},[n("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),"Add"===t.manageFundsText?n("p",{staticClass:"mr-5 ml-5 mt-3 mb-1"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.subscription-fund"))+"\n          "),n("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+"\n        ")]):t._e(),"Withdraw"===t.manageFundsText?n("p",{staticClass:"mr-5 ml-5 mt-2"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.withdraw-fund"))+"\n          "),n("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+"\n        ")]):t._e()]),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"mew-btn mt-4 mb-4",class:t.errMsg||!t.ethAmount?"disabled":"",on:{click:function(e){return t.onClick()}}},[t._v("\n          "+t._s(t.actionStep?t.manageFundsText:t.$t("common.ok"))+"\n        ")])])])])],1)},C=[];function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={props:{manageFundsText:{type:String,default:""},availableBalanceEth:{type:String,default:""},availableBalanceUsd:{type:String,default:""}},data:function(){return{actionStep:!0,ethAmount:0,errMsg:""}},computed:S({},Object(d["b"])(["web3","account"])),watch:{manageFundsText:function(t,e){t!==e&&(this.ethAmount=0,this.errMsg="")},ethAmount:function(t){var e=new m.a(t),n=this.web3.utils.fromWei(new m.a(this.account.balance).toFixed(),"ether"),s=new m.a(this.availableBalanceEth);t<=0?this.errMsg="Amount must be higher than 0":"Add"===this.manageFundsText&&e.gt(n)?this.errMsg="Amount higher than balance":"Withdraw"===this.manageFundsText&&e.gt(s)?this.errMsg="Amount higher than subscription balance":this.errMsg=""}},methods:{onClick:function(){"Add"===this.manageFundsText&&!0===this.actionStep?(this.$emit("addFunds",this.ethAmount),this.actionStep=!1):"Withdraw"===this.manageFundsText&&!0===this.actionStep?(this.$emit("withdrawFunds",this.ethAmount),this.actionStep=!1):(this.$refs["manageFundsModal"].hide(),this.actionStep=!0,this.ethAmount="")}}},O=M,k=(n("0f87"),n("8ca3"),Object(g["a"])(O,_,C,!1,null,"c4f09f34",null)),$=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"manageSubscriptionsModal",attrs:{title:t.$t("dappsAmbrpay.my-subscriptions"),centered:"","hide-footer":"",static:"",lazy:""}},[n("div",{staticClass:"modal-contents"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.subscriptions.length,expression:"subscriptions.length === 0"}],staticClass:"no-sub-container"},[n("p",{staticClass:"mx-auto pl-3"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.no-active"))+"\n        ")])]),t._l(t.subscriptions,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.subscriptions.length>0,expression:"subscriptions.length > 0"}],key:e.key,staticClass:"subscription-container"},[n("div",{staticClass:"info-container"},[n("div",{staticClass:"header-txt"},[n("span",[n("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"active-txt"},[t._v("\n                "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.active"))+"\n              ")]),n("span",{staticClass:"next-pay-txt"},[t._v("("+t._s(t.$t("dappsAmbrpay.manage-subscriptions.next-payment"))+"\n                "+t._s(t.formatDate(e.cycleEnd))+")")])]),n("span",[n("i",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"},on:{click:function(n){return t.toggleMoreInfo(e)}}}),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.moreInfo,expression:"!sub.moreInfo"}],staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"},on:{click:function(n){return t.toggleMoreInfo(e)}}})])]),n("div",{staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.receiver-wallet")))]),n("a",{staticClass:"address-txt prevent-user-select",attrs:{title:e.receiverWallet,href:"https://etherscan.io/address/"+e.receiverWallet,rel:"noopener noreferrer"}},[t._v("\n              "+t._s(e.receiverWallet)+"\n            ")])]),n("div",{staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("sendTx.amount")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(e.price)+" "+t._s(t.$t("common.currency.eth")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"more-info-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.current-cycle")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(t.formatDate(e.cycleStart))+"-"+t._s(t.formatDate(e.cycleEnd)))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.interval")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(t.$t("dappsAmbrpay.in-every"))+"\n                "+t._s(e.subscriptionInterval)+"\n                "+t._s(t.$t("dappsAmbrpay.days-lowercase")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionPlan,expression:"sub.subscriptionPlan"}],staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-plan")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionPlan))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionCurrencyCode,expression:"sub.subscriptionCurrencyCode"}],staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-currency")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionCurrencyCode))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionStatus,expression:"sub.subscriptionStatus"}],staticClass:"info-row"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-status")))]),n("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionStatus))])])])]),n("hr",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}]}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"btn-container mb-2"},[n("button",{on:{click:function(n){return t.unsubscribe(e.storagePos,e.smartContractAddress)}}},[t._v("\n            "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.unsubscribe"))+"\n          ")])])])}))],2)])],1)},P=[],F={props:{subscriptions:{type:Array,default:function(){return[]}}},methods:{formatDate:function(t){return t?t.substr(3,2)+"/"+t.substr(0,2)+"/"+t.substr(6,4):""},toggleMoreInfo:function(t){t.moreInfo=!t.moreInfo},unsubscribe:function(t,e){var n=this;this.$emit("unsubscribeSub",{pos:t,addr:e}),this.$nextTick((function(){n.$refs["manageSubscriptionsModal"].hide()}))}}},I=F,T=(n("f7b3"),Object(g["a"])(I,E,P,!1,null,"5fc7e548",null)),j=T.exports;n("c5f6");
/*!
 * ambrpay JavaScript Library v0.2.2
 * https://ambrpay.io/
 */
function B(t,e){if(!n)var n="https://ambrpay.io/api";var s=e,a=t.address,r={apiKey:!1,testMode:!1,contractAddress:!1,contractAddresses:!1,network:"auto",setApiKey:function(t){if(r.apiKey=t,-1!=r.apiKey.indexOf("test_public"))r.testMode=!0;else{if(-1==r.apiKey.indexOf("api_public"))throw"invalid public api key";r.testMode=!1}},getContractAddresses:function(){return new Promise((function(t,e){if(r.contractAddress)return t(r.contractAddress);if(s||e("MetaMask is not installed. Download it at https://metamask.io/"),r.contractAddresses)return t(r.contractAddresses);var a=n+"/smartContractAddresses";return r.getRequest(a,r.apiKey).then((function(e){return r.contractAddresses=JSON.parse(e),t(r.contractAddresses)}))})).then((function(){switch(t.netId){case"1":if("mainnet"!=r.network&&"auto"!=r.network)throw"your wallets network (mainnet) does not match the selected network for the transaction ("+r.network+")";"Mainnet",r.contractAddress=r.contractAddresses.mainnet.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.mainnet.abi)};break;case"2":throw"Morden testnet is not available. Try ropsten testnet.";case"3":if("ropsten"!=r.network&&"auto"!=r.network)throw"your wallets network (ropsten) does not match the selected network for the transaction ("+r.network+")";"Ropsten Testnet",r.contractAddress=r.contractAddresses.ropsten.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.ropsten.abi)};break;case"4":throw"Rinkeby testnet is not available. Try ropsten testnet.";case"42":throw"Kovan testnet is not available. Try ropsten testnet.";default:throw"Uknown testnet. Try ropsten testnet."}return r.contractAddress}))},getSubscriptionPlan:function(t){var e=n+"/plan/"+t;return r.getRequest(e).then((function(t){return JSON.parse(t)}))},subscribe:function(t){var e,n,a,i,o,c,u=!1;return t.network&&(r.network=t.network),r.getContractAddresses().then((function(){return r.metaMaskLoaded()})).then((function(){return r.getMetaMaskAccount()})).then((function(n){return e=n,r.getSubscriptionPlan(t.subscriptionPlan)})).then((function(e){if(a=e,!a.wallet&&!t.receiverWallet)throw"Subscription plan has no wallet assigned to it, therefore param 'receiverWallet' is required when calling ambrpay.subscribe()";if(n=a.wallet?a.wallet:t.receiverWallet,!s.utils.isAddress(n))throw"receiverAddress is not a valid address";if(-1==a.daysInterval&&!t.interval)throw"Subscription plan has interval set to custom, therefore param 'interval' is required when calling ambrpay.subscribe()";if(-1==a.daysInterval&&!r.isInt(t.interval))throw"interval must be an integer";if(-1==a.daysInterval&&t.interval&&parseInt(t.interval)>=1&&parseInt(t.interval)<=365)a.daysInterval=parseInt(t.interval);else if(-1==a.daysInterval&&t.interval)throw"interval must be between 1 and 365";if("undefined"!==typeof t.transferOut&&"boolean"!==typeof t.transferOut)throw"transferOut must be a boolean";if(u=!(!t.transferOut||1!=a.transferOut),a.acceptedCryptoCurrencies.Ethereum.price>0)return a.acceptedCryptoCurrencies.Ethereum.price;if(t.amount){if(!r.isInt(t.amount)&&!r.isFloat(t.amount))throw"amount must be an integer or a float";if(o=t.amount,"ETH"!=a.currencyCode){if(o<1)throw"the minimum amount is "+a.currencyCode+" 1.00 ";return r.getExchangePrice(a.currencyCode,"ETH",o).then((function(t){return t}))}if(t.amount<.01)throw"the minimum amount is 0.01 ETH";return t.amount}})).then((function(t){if(i=t,c=t/100*a.fee,c=1e18*c/1e18,s.utils.isAddress(a.wallet))var o=parseFloat(i);else o=parseFloat(i)+parseFloat(c);var l=o*(1+a.priceLimitPercentage/100);return new Promise((function(t,i){var d=new s.eth.Contract(r.ABI.abi,r.contractAddress);return d.methods.createSubscriptionWithTransfer(n,a.daysInterval,s.utils.toWei(l.toString(),"ether"),u,s.utils.toWei(c.toString(),"ether")).send({value:s.utils.toWei(o.toString(),"ether"),gas:5e5,from:e}).then((function(e){return t(e)})).catch((function(t){return i(t)}))}))})).then((function(s){var c={subscriptionPlanId:a.id,senderWallet:e,receiverWallet:n,customerId:t.customerId,customerEmail:t.customerEmail,customerDescription:t.customerDescription,transactionHash:s.transactionHash,subscriptionCurrency:"ETH",subscriptionPrice:i,customPrice:o,interval:t.interval,transferOut:u,smartContractAddress:r.contractAddress};return r.createSubscription(c).then((function(){return s.transactionHash}))}))},createSubscription:function(t){var e=n+"/subscription";return r.postRequest(e,t).then((function(t){return JSON.parse(t)}))},getExchangePrice:function(t,e,s){var a=n+"/price/"+t+"/"+e+"/"+s;return r.getRequest(a)},getRequest:function(t){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(e,n){var s=new XMLHttpRequest;s.open("GET",t,!0),s.setRequestHeader("Authorization","Bearer "+r.apiKey),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status)return e(s.responseText);4==s.readyState&&200!=s.status&&n(s.responseText)},s.send()}))},postRequest:function(t,e){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(n,s){var a=new XMLHttpRequest;a.open("POST",t,!0),a.setRequestHeader("Authorization","Bearer "+r.apiKey),a.onreadystatechange=function(){4==a.readyState&&200==a.status?n(a.responseText):4==a.readyState&&200!=a.status&&s(a.responseText)},a.send(JSON.stringify(e))}))},metaMaskLoaded:function(){return new Promise((function(t,e){return"undefined"==s&&e("MetaMask is missing. Please download the MetaMask browser extension."),t(!0)}))},getMetaMaskAccount:function(){return new Promise((function(t,e){return t(a)}))},getSubscriptionFunds:function(){return r.getContractAddresses().then((function(){return r.getMetaMaskAccount()})).then((function(t){if(!t)throw"Error retrieving your metamask wallet address. Make sure metamask is unlocked";return new Promise((function(e,n){var a=new s.eth.Contract(r.ABI.abi,r.contractAddress),i=a.methods.getBalances(t).call();return e(i)}))}))},getSubscriptions:function(t){return new Promise((function(e,s){if(t){var a=n+"/subscriptions/"+t;return r.getRequest(a,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}return r.getMetaMaskAccount().then((function(t){var s=n+"/subscriptions/"+t;return r.getRequest(s,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}))}))},getMetaMaskBalance:function(){return new Promise((function(t,n){return r.getMetaMaskAccount().then((function(a){return s.eth.getBalance(a,(function(a,r){if(a)return n(a);var i=s.utils.fromWei(r,"ether");return i=e.utils.toDecimal(i),t(i)}))}))}))},unsubscribe:function(t,e){return new Promise((function(n,a){var i=new s.eth.Contract(r.ABI.abi,e);return r.getMetaMaskAccount().then((function(e){return i.methods.deactivateSubscription(t).send({gas:5e5,from:e}).then((function(t){n(t)})).catch((function(t){a(t)}))}))}))},addFunds:function(t){return new Promise((function(e,n){return r.getMetaMaskAccount().then((function(a){var i=new s.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.addFunds(a).send({value:s.utils.toWei(t),gas:5e5,from:a}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}))},withdrawFunds:function(t){return new Promise((function(e,n){return r.getMetaMaskAccount().then((function(a){var i=new s.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.withdrawFunds(s.utils.toWei(t)).send({gas:5e5,from:a}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}))},isInt:function(t){return Number(t)===t&&t%1===0},isFloat:function(t){return Number(t)===t&&t%1!==0}};return r.setApiKey(t.publicApiKey),r}var D=n("572c"),R=n("ce96");function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H={components:{"subscription-form":A,"back-button":D["a"],"manage-funds-modal":$,"manage-subscriptions-modal":j},data:function(){return{availableBalanceEth:"",availableBalanceUSD:"",manageFundsText:"",ethPrice:0,loadingBalance:!0,ambrpay:"",subscriptions:[]}},computed:W({},Object(d["b"])(["web3","account","network","online"])),mounted:function(){var t=this;this.init(),this.getSubscriptions(),this.$refs.manageSubs.$refs.manageSubscriptionsModal.$on("show",(function(){t.getSubscriptions()})),this.online&&this.getEthPrice()},methods:{init:function(){var t={publicApiKey:"api_public_DXfGdjBB4eIVgbURCCCAIQ2S",address:this.account.address,netId:this.network.type.chainID.toString()};this.ambrpay=new B(t,this.web3),this.getSubscriptionFunds()},getSubscriptionFunds:function(){var t=this;this.ambrpay.getSubscriptionFunds().then((function(e){t.availableBalanceEth=new m.a(t.web3.utils.fromWei(e,"ether")).toFixed(),t.convertToUSD(),t.loadingBalance=!1})).catch((function(e){t.loadingBalance=!1,R["e"].responseHandler(e,R["e"].ERROR)}))},convertToUSD:function(){this.availableBalanceUSD="--",this.availableBalanceEth&&(this.availableBalanceUSD=new m.a(new m.a(this.availableBalanceEth).times(new m.a(this.ethPrice))).toFixed(2))},openManageFundsModal:function(t){this.manageFundsText=t,this.$refs.manageFunds.$refs.manageFundsModal.show()},openManageSubModal:function(){this.$refs.manageSubs.$refs.manageSubscriptionsModal.show()},getEthPrice:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}));case 2:e=t.sent,this.ethPrice="object"===Object(r["a"])(e)?e.data.ETH.quotes.USD.price:0;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),startSubscription:function(t){this.ambrpay.subscribe(t).then(this.getSubscriptions).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}))},addFunds:function(t){this.ambrpay.addFunds(t).then(this.getSubscriptionFunds).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}))},withdrawFunds:function(t){this.ambrpay.withdrawFunds(t).then(this.getSubscriptionFunds).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}))},unsubscribeSub:function(t){this.ambrpay.unsubscribe(t.pos,t.addr).then(this.getSubscriptions).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}))},getSubscriptions:function(){var t=this;this.ambrpay.getSubscriptions().then((function(e){t.subscriptions=e.map((function(t){return W({},t,{moreInfo:!1})}))})).catch((function(t){R["e"].responseHandler(t,R["e"].ERROR)}))}}},K=H,q=(n("a1c0"),Object(g["a"])(K,s,a,!1,null,"905243b4",null));e["default"]=q.exports},"31b9":function(t,e,n){},4162:function(t,e,n){},"60c2":function(t,e,n){},"72b0":function(t,e,n){"use strict";var s=n("60c2"),a=n.n(s);a.a},"8ca3":function(t,e,n){"use strict";var s=n("f010"),a=n.n(s);a.a},a1c0:function(t,e,n){"use strict";var s=n("4162"),a=n.n(s);a.a},eece:function(t,e,n){},f010:function(t,e,n){},f559:function(t,e,n){"use strict";var s=n("5ca1"),a=n("9def"),r=n("d2c8"),i="startsWith",o=""[i];s(s.P+s.F*n("5147")(i),"String",{startsWith:function(t){var e=r(this,t,i),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return o?o.call(e,s,n):e.slice(n,n+s.length)===s}})},f7b3:function(t,e,n){"use strict";var s=n("eece"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-a681726e.11f84cfb.js.map