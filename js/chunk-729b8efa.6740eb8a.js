(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729b8efa"],{"28c5":function(t,e,a){"use strict";var n=a("a396"),s=a.n(n);s.a},"2ab9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},"4dc8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interact-with-contract-container"},[n("interface-container-title",{attrs:{title:t.$t("contract.interact")}}),t.interact?n("div",{staticClass:"contract-methods-container"},[n("h4",[t._v(t._s(t.$t("contract.read-write")))]),n("div",{staticClass:"contract-addr-container"},[n("div",{staticClass:"contract-addr"},[n("p",[t._v(t._s(t.$t("contract.addr"))+": "+t._s(t.address))])]),n("div",{staticClass:"picker-container"},[n("currency-picker",{attrs:{currency:t.contractMethods,"clear-currency":t.clearCurrency,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedFunction}})],1)]),void 0!==t.selectedMethod.name?n("div",{staticClass:"method-arguments-container"},[n("h4",[t._v(t._s(t._f("capitalize")(t.selectedMethod.name)))]),t._l(t.selectedMethod.inputs,(function(e,a){return n("div",{key:e.name+a,staticClass:"input-item-container"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),n("div",{staticClass:"input-container"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(a){var n=t.inputs[e.name],s=a.target,i=!!s.checked;if(Array.isArray(n)){var r=null,c=t._i(n,r);s.checked?c<0&&t.$set(t.inputs,e.name,n.concat([r])):c>-1&&t.$set(t.inputs,e.name,n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.inputs,e.name,i)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(a){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(a){a.target.composing||t.$set(t.inputs,e.name,a.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?n("div",{staticClass:"bool-input-container"},[n("div",{staticClass:"bool-items"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(a){return t.$set(t.inputs,e.name,!0)}}}),n("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.true")))])]),n("div",{staticClass:"bool-items"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(a){return t.$set(t.inputs,e.name,!1)}}}),n("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.false")))])])]):t._e(),t.noInput?t._e():n("i",{class:["radio"!==t.getType(e.type).type?"non-bool-i":"",t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])})),n("div",[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.value-in-eth"))+":")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"non-bool-input",attrs:{step:"any",type:"text",name:"",placeholder:"ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.selectedMethod.constant?n("div",[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.result"))+":")])])]),n("div",{staticClass:"result-inputs"},["string"===t.resType||"boolean"===t.resType||"number"===t.resType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}):t._e(),"object"===t.resType?n("div",t._l(t.selectedMethod.outputs,(function(e,a){return n("div",{key:e.name+a,staticClass:"result-container"},[n("label",{attrs:{for:""!==e.name?e.name:e.type+a}},[t._v("\n                "+t._s(t._f("capitalize")(""!==e.name?e.name:e.type))+"\n              ")]),n("input",{staticClass:"result-input",attrs:{name:""!==e.name?e.name:e.type+a,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result[a]}})])})),0):t._e()])]):t._e()],2):t._e(),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"interact-buttons"},[n("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(e){return t.switchView("backwards")}}},[t._v("\n          "+t._s(t.$t("common.back"))+"\n        ")]),t.selectedMethod.hasOwnProperty("inputs")&&(t.selectedMethod.constant&&t.selectedMethod.inputs.length>0||!t.selectedMethod.constant)?n("div",{class:[t.allValid?"":"disabled",t.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:t.write}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[t._v("\n            "+t._s(t.$t("contract.write"))+"\n          ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[t._v(t._s(t.$t("contract.read")))]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):t._e()]),n("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v("\n        "+t._s(t.$t("common.clear-all"))+"\n      ")])])]):n("div",{staticClass:"interact-div"},[n("div",{staticClass:"send-form contract-address-container"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",{staticClass:"contract-address-title"},[t._v("\n            "+t._s(t.$t("contract.addr"))+"\n          ")]),n("div",{staticClass:"select-contract no-border"},[n("currency-picker",{attrs:{currency:t.mergedContracts,token:!1,"clear-currency":t.clearCurrency,page:"interactWContract"},on:{selectedCurrency:t.selectedContract}})],1)])]),n("div",{staticClass:"the-form domain-name"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:t.$t("contract.enter-addr"),type:"text",name:"nameAddr"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),n("i",{staticClass:"address-validation-check",class:[t.isValidAddress&&""!==t.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.abi-json-int")))]),n("div",{staticClass:"copy-buttons"},[n("span",{on:{click:function(e){return t.deleteInput("abi")}}},[t._v(t._s(t.$t("common.clear")))]),n("span",{on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])])]),n("div",{staticClass:"the-form domain-name"},[n("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),n("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"submit-button-container"},[n("div",{class:[t.isValidAbi&&t.isValidAddress&&!t.errors.has("nameAddr")&&!t.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return t.switchView("forward")}}},[t._v("\n        "+t._s(t.$t("common.continue"))+"\n        "),n("img",{attrs:{src:a("2ab9"),alt:""}})]),n("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v("\n        "+t._s(t.$t("common.clear-all"))+"\n      ")])])])],1)},s=[],i=(a("8e6e"),a("456d"),a("c5f6"),a("75fc")),r=(a("96cf"),a("3b8d")),c=(a("a481"),a("28a5"),a("6b54"),a("7f7f"),a("ac6a"),a("7618")),o=a("bd86"),d=a("2f62"),l=a("d7a2"),u=a("55c1"),p=a("ce96"),h=a("b7d3"),m=a("70c1"),v=a("8ded"),f=a.n(v);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={components:{"interface-container-title":u["a"],"currency-picker":l["a"]},data:function(){return{abi:"",address:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{},clearCurrency:!1}},computed:y({},Object(d["b"])(["network","gasPrice","account","web3"]),{mergedContracts:function(){var t=f.a.get("customContracts")||[],e=this.network.type.contracts.concat(t);return e},isValidAbi:function(){return p["d"].isJson(this.abi)},isValidAddress:function(){return Object(h["a"])(this.address)},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(c["a"])(this.result)},allValid:function(){var t=this,e=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach((function(a){t.isValidInput(t.inputs[a.name],t.getType(a.type).solidityType)||(e=!1)})),e&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var t=this,e=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach((function(a){if("bytes32[]"===a.type){var n=t.formatInput(t.inputs[a.name]);e.push(n)}else"address"===a.type?e.push(t.inputs[a.name].toLowerCase().trim()):e.push(t.inputs[a.name])})),e},txValue:function(){return p["d"].sanitizeHex(m["toWei"](this.value,"ether").toString(16))}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={},this.clearCurrency=!this.clearCurrency},isValidInput:p["d"].isContractArgValid,getType:p["d"].solidityType,selectedContract:function(t){""===t.abi?this.abi="":this.abi=JSON.stringify(t.abi),this.address=t.address},selectedFunction:function(t){var e=this;if(t.hasOwnProperty("constant")){var a=new this.web3.eth.Contract([t],this.address.toLowerCase());!0===t.constant&&0===t.inputs.length?a.methods[t.name]().call({from:this.account.address.toLowerCase()}).then((function(t){e.result=t})).catch((function(t){e.loading=!1,p["e"].responseHandler(t,p["e"].WARN)})):this.result="",this.loading=!1,this.selectedMethod=t,this.selectedMethod.inputs.forEach((function(t){"bool"===t.type&&(e.inputs[t.name]=!1)}))}},formatInput:function(t){if("["===t[0])return t;var e=t.split(",");return e.map((function(t){return t.replace(" ","")}))},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this.$refs[t].value=""},switchView:function(t){var e=this;switch(t){case"forward":""!==this.abi&&JSON.parse(this.abi).forEach((function(t){"constructor"!==t.type&&void 0!==t.constant&&e.contractMethods.push(t)})),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,n,s,r,c,o,d,l,u,h=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.web3,a=new e.eth.Contract([this.selectedMethod],this.address.toLowerCase()),this.loading=!0,!0!==this.selectedMethod.constant){t.next=7;break}(n=a.methods)[this.selectedMethod.name].apply(n,Object(i["a"])(this.contractArgs)).call({from:this.account.address.toLowerCase()}).then((function(t){h.result=t,h.loading=!1})).catch((function(t){h.loading=!1,p["e"].responseHandler(t,!1)})),t.next=15;break;case 7:return t.next=9,e.eth.getTransactionCount(this.account.address.toLowerCase());case 9:return r=t.sent,c=!1,t.next=13,(s=a.methods)[this.selectedMethod.name].apply(s,Object(i["a"])(this.contractArgs)).estimateGas({from:this.account.address.toLowerCase(),value:this.txValue}).then((function(t){return t})).catch((function(t){h.loading=!1,p["e"].responseHandler(t,p["e"].ERROR),c=!0}));case 13:o=t.sent,c||(l=(d=a.methods)[this.selectedMethod.name].apply(d,Object(i["a"])(this.contractArgs)).encodeABI(),u={from:this.account.address.toLowerCase(),gas:o,nonce:r,gasPrice:Number(m["toWei"](this.gasPrice,"gwei")),value:this.txValue,to:this.address.toLowerCase(),data:l},this.loading=!1,e.eth.sendTransaction(u).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)})));case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},C=g,w=(a("28c5"),a("2877")),_=Object(w["a"])(C,n,s,!1,null,"61fd8eac",null),k=_.exports;a.d(e,"default",(function(){return k}))},a396:function(t,e,a){}}]);
//# sourceMappingURL=chunk-729b8efa.6740eb8a.js.map