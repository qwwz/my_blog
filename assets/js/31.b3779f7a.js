(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{220:function(e,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_004-script标签中defer和async的区别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_004-script标签中defer和async的区别是什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" 004: script标签中defer和async的区别是什么？")]),e._v(" "),s("p",[e._v("默认情况下，脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。")]),e._v(" "),s("p",[e._v("下面是async和defer两者区别：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("当script中有defer属性时，脚本的加载过程和文档加载是异步发生的，等到文档解析完(DOMContentLoaded事件发生)脚本才开始执行。")])]),e._v(" "),s("li",[s("p",[e._v("当script有async属性时，脚本的加载过程和文档加载也是异步发生的。但脚本下载完成后会停止HTML解析，执行脚本，脚本解析完继续HTML解析。")])]),e._v(" "),s("li",[s("p",[e._v("当script同时有async和defer属性时，执行效果和async一致。")])])])])}],!1,null,null,null);t.default=r.exports}}]);