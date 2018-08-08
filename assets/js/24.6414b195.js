(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{191:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[a("code",[t._v("@/src/utils/request.js")]),t._v(" is based on the "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v(", to facilitate the uniform handling of POST, GET and other request parameters, request headers, and error messages。Specific can see "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),a("OutboundLink")],1),t._v(".")]),t._m(7),t._m(8),t._m(9),t._m(10),a("p",[t._v("See "),a("router-link",{attrs:{to:"./mock-api.html"}},[t._v("Mock Data")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"work-with-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-with-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Work with Server")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"front-end-request-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-end-request-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Front-end request flow")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In "),s("code",[this._v("vue-element-admin")]),this._v(" , a complete front-end UI interacts to the server-side processing flow as follows:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("UI component interaction;")]),s("li",[this._v("Call unified management API service request function;")]),s("li",[this._v("Send requests using encapsulated request.js;")]),s("li",[this._v("Get server return;")]),s("li",[this._v("Update data;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you can see from the above flow, in order to facilitate management and maintenance, unified request processing is placed in the "),s("code",[this._v("src/api")]),this._v(" folder and the files are generally split according to the model latitude,such as:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("api/\n  login.js\n  article.js\n  remoteSearch.js\n  ...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"request-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-js","aria-hidden":"true"}},[this._v("#")]),this._v(" request.js")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("It encapsulates the global "),a("code",[t._v("request interceptor")]),t._v(", "),a("code",[t._v("respone interceptor")]),t._v(","),a("code",[t._v("unified error handling")]),t._v(", "),a("code",[t._v("unified timeout, baseURL settings, etc.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"an-example-of-a-request-article-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-example-of-a-request-article-list","aria-hidden":"true"}},[this._v("#")]),this._v(" An example of a request article list:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// api/article.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" request "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../utils/request'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fetchList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/article/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'get'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" query\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// views/example/list")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fetchList "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/api/article'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    listLoading"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listLoading "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("fetchList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listLoading "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"switch-from-mock-directly-to-server-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-from-mock-directly-to-server-request","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch from mock directly to server request")])}],!1,null,null,null);e.options.__file="server.md";s.default=e.exports}}]);