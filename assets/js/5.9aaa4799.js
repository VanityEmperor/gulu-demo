(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},380:function(t,e,n){var o=n(27),s="["+n(379)+"]",a=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},381:function(t,e,n){"use strict";var o=n(1),s=n(380).trim;o({target:"String",proto:!0,forced:n(382)("trim")},{trim:function(){return s(this)}})},382:function(t,e,n){var o=n(2),s=n(379);t.exports=function(t){return o((function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t}))}},418:function(t,e,n){},419:function(t,e,n){},420:function(t,e,n){},421:function(t,e,n){},422:function(t,e,n){},423:function(t,e,n){},468:function(t,e,n){"use strict";n(418)},469:function(t,e,n){"use strict";n(419)},470:function(t,e,n){"use strict";n(420)},471:function(t,e,n){"use strict";n(421)},472:function(t,e,n){"use strict";n(422)},473:function(t,e,n){"use strict";n(423)},487:function(t,e,n){"use strict";n.r(e);n(381),n(116),n(78),n(117);var o={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(468),n(53)),a=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"0e97b45e",null).exports,r=(n(469),Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"6c0f69e0",null).exports),c={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},i=(n(470),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"14111186",null).exports),l=(n(471),Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"ce94e266",null).exports),u=(n(472),{components:{"g-layout":a,"g-header":r,"g-sider":i,"g-content":l,"g-footer":Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"21c58782",null).exports},data:function(){return{content1:'\n<g-layout>\n  <g-layout>\n    <g-header class="demo" style="background:#7DBCEA;">header</g-header>\n    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>\n    <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>\n  </g-layout>\n</g-layout>\n    '.trim(),content2:'\n<g-layout style="overflow:hidden;">\n  <g-header class="demo" style="background:#7DBCEA;">header</g-header>\n  <g-layout>\n    <g-sider class="demo" style="background:#3BA0E9;width:150px;height:200px;">sider</g-sider>\n    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>\n  </g-layout>\n  <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>\n</g-layout>\n      '.trim(),content3:'\n<g-layout style="overflow:hidden;">\n  <g-header class="demo" style="background:#7DBCEA;">header</g-header>\n  <g-layout>\n    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>\n    <g-sider class="demo" style="background:#3BA0E9;width:150px;height:200px;">sider</g-sider>\n  </g-layout>\n  <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>\n</g-layout>  \n      '.trim(),content4:'\n<g-layout style="overflow:hidden;">\n  <g-sider class="demo" style="background:#3BA0E9;width:200px;">sider</g-sider>\n  <g-layout>\n    <g-header class="demo" style="background:#7DBCEA;">header</g-header>\n    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>\n    <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>\n  </g-layout>\n</g-layout>\n      '.trim()}}}),d=(n(473),Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("上中下布局")]),t._v(" "),n("g-layout",[n("g-layout",[n("g-header",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("header")]),t._v(" "),n("g-content",{staticClass:"demo",staticStyle:{background:"#108EE9",height:"200px"}},[t._v("content")]),t._v(" "),n("g-footer",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("footer")])],1)],1),t._v(" "),n("h2",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content1))])]),t._v(" "),n("h2",[t._v("顶部-侧边布局")]),t._v(" "),n("g-layout",{staticStyle:{overflow:"hidden"}},[n("g-header",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("header")]),t._v(" "),n("g-layout",[n("g-sider",{staticClass:"demo",staticStyle:{background:"#3BA0E9",width:"150px",height:"200px"}},[t._v("sider")]),t._v(" "),n("g-content",{staticClass:"demo",staticStyle:{background:"#108EE9",height:"200px"}},[t._v("content")])],1),t._v(" "),n("g-footer",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("footer")])],1),t._v(" "),n("h2",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content2))])]),t._v(" "),n("h2",[t._v("侧边布局")]),t._v(" "),n("g-layout",{staticStyle:{overflow:"hidden"}},[n("g-sider",{staticClass:"demo",staticStyle:{background:"#3BA0E9",width:"200px"}},[t._v("sider")]),t._v(" "),n("g-layout",[n("g-header",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("header")]),t._v(" "),n("g-content",{staticClass:"demo",staticStyle:{background:"#108EE9",height:"200px"}},[t._v("content")]),t._v(" "),n("g-footer",{staticClass:"demo",staticStyle:{background:"#7DBCEA"}},[t._v("footer")])],1)],1),t._v(" "),n("h2",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content2))])])],1)}),[],!1,null,"0cfffa11",null));e.default=d.exports}}]);