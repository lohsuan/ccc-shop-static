(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6e0e598"],{"0798":function(t,e,s){"use strict";var r=s("5530"),o=s("ade3"),n=(s("caad"),s("0c18"),s("10d2")),i=s("afdd"),a=s("9d26"),l=s("f2e7"),c=s("7560"),u=s("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=s("58df"),p=s("d9bd");e["a"]=Object(h["a"])(n["a"],l["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"736f":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",{staticClass:"d-flex flex-column justify-center align-center"},[s("MyAccountContent")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"d-flex justify-center align-center"},[s("div",{staticStyle:{width:"1000px"}},[s("div",{staticClass:"text-h5 mx-10 my-10"},[t._v("基本資料")]),s("AccountManagementTab")],1)])},i=[],a=s("b668"),l={components:{AccountManagementTab:a["a"]}},c=l,u=s("2877"),d=s("6544"),h=s.n(d),p=s("a523"),m=Object(u["a"])(c,n,i,!1,null,null,null),v=m.exports;h()(m,{VContainer:p["a"]});var f={name:"Account",components:{MyAccountContent:v}},$=f,b=Object(u["a"])($,r,o,!1,null,null,null);e["default"]=b.exports;h()(b,{VContainer:p["a"]})},b668:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{width:"1000px"}},[s("v-alert",{staticClass:"mx-10 mt-5",attrs:{border:"top",icon:"mdi-shield-lock-outline",prominent:"",text:"",type:"info",elevation:"2"}},[s("div",{staticClass:"text-body-2"},[t._v("小提醒")]),s("div",{staticClass:"text-body-2"},[t._v(" 你選擇的「使用者名稱」將會被引用於網站上公開評價及相關連結，如果你不希望你的真實姓名被列入本平台，建議你選擇一個親切的暱稱使用。請放心，你的所有訊息、檔案及相關購買資料，網站將保障你的個人隱私！ ")])]),s("v-card",{staticClass:"mx-10",attrs:{flat:""}},[s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"使用者名稱",type:"text",rules:t.usernameRules,required:"","prepend-icon":"mdi-account-circle"},model:{value:t.$store.state.userStore.username,callback:function(e){t.$set(t.$store.state.userStore,"username",e)},expression:"$store.state.userStore.username"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"手機號碼",type:"tel",rules:t.phoneRules,required:"","prepend-icon":"mdi-cellphone"},model:{value:t.$store.state.userStore.phone,callback:function(e){t.$set(t.$store.state.userStore,"phone",e)},expression:"$store.state.userStore.phone"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"電子郵件",type:"email",rules:t.emailRules,required:"","prepend-icon":"mdi-email"},model:{value:t.$store.state.userStore.email,callback:function(e){t.$set(t.$store.state.userStore,"email",e)},expression:"$store.state.userStore.email"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"信用卡",type:"text",rules:t.creditCardRules,"prepend-icon":"mdi-credit-card"},model:{value:t.$store.state.userStore.creditCard,callback:function(e){t.$set(t.$store.state.userStore,"creditCard",e)},expression:"$store.state.userStore.creditCard"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"住址",type:"text",rules:t.addressRules,"prepend-icon":"mdi-map-marker"},model:{value:t.$store.state.userStore.address,callback:function(e){t.$set(t.$store.state.userStore,"address",e)},expression:"$store.state.userStore.address"}})],1)],1),s("v-row",{staticClass:"mx-3"},[s("v-spacer"),s("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save-all ")]),t._v(" SAVE ")],1)],1)],1)],1)],1)],1)},o=[],n=(s("ac1f"),s("00b4"),s("37a2")),i={name:"AccountManagementPage",data:function(){return{usernameRules:[function(t){return!!t||"欄位不可留空"},function(t){return/^[A-Za-z0-9]+$/.test(t)||"使用者名稱只能有英文字母或數字"}],phoneRules:[function(t){return!!t||"欄位不可留空"},function(t){return/^\d+$/.test(t)||"電話只能包含數字"}],emailRules:[function(t){return!!t||"欄位不可留空"},function(t){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)||"電子郵件格式不符"}],creditCardRules:[],addressRules:[]}},methods:{onEdit:function(){},save:function(){Object(n["e"])(this.$store.state.userStore.id,this.$store.state.userStore.username,"2",this.$store.state.userStore.phone,this.$store.state.userStore.email,this.$store.state.userStore.creditCard,this.$store.state.userStore.address),sessionStorage.setItem("id",this.$store.state.userStore.id),sessionStorage.setItem("username",this.$store.state.userStore.username),sessionStorage.setItem("identity",this.$store.state.userStore.identity),sessionStorage.setItem("phone",this.$store.state.userStore.phone),sessionStorage.setItem("email",this.$store.state.userStore.email),sessionStorage.setItem("creditCard",this.$store.state.userStore.creditCard),sessionStorage.setItem("address",this.$store.state.userStore.address)}}},a=i,l=s("2877"),c=s("6544"),u=s.n(c),d=s("0798"),h=s("8336"),p=s("b0af"),m=s("99d9"),v=s("62ad"),f=s("a523"),$=s("132d"),b=s("0fd9"),S=s("2fa4"),g=s("8654"),C=Object(l["a"])(a,r,o,!1,null,null,null);e["a"]=C.exports;u()(C,{VAlert:d["a"],VBtn:h["a"],VCard:p["a"],VCardText:m["b"],VCol:v["a"],VContainer:f["a"],VIcon:$["a"],VRow:b["a"],VSpacer:S["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-a6e0e598.d5feba53.js.map