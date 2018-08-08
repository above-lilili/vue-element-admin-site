(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{176:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。")]),e("p",[t._v("使用 Lint 会有什么好处呢？在我看来至少具有如下 3 点：")]),t._m(1),t._m(2),t._m(3),t._m(4),e("p",[t._v("常见的流程：本地写好了代码，提交，开始跑 lint，发现不通过，本地修改代码，再提交，在等待 CI 的结果，若还有问题再重复之前的操作。")]),t._m(5),e("p",[t._v("最有效的解决方案就是将 "),e("code",[t._v("Lint")]),t._v(" 校验放到本地，常见做法是使用 "),e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 或者 "),e("a",{attrs:{href:"https://github.com/observing/pre-commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-commit"),e("OutboundLink")],1),t._v(" 在本地提交之前做 "),e("code",[t._v("Lint")]),t._v("。这里我们选用 "),e("code",[t._v("husky")]),t._v("。")]),t._m(6),e("p",[t._v("然后修改 package.json，增加配置：")]),t._m(7),e("p",[t._v("最后尝试 Git 提交，你就会很快收到反馈：")]),t._m(8),t._m(9),t._m(10),e("p",[t._v("解决上面的痛点就需要使用 "),e("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1),t._v(" 了。它只会校验检查你提交或者说你修改的部分。")]),t._m(11),e("p",[t._v("然后，修改 package.json 配置：")]),t._m(12),e("p",[t._v("如上配置，每次它只会在你本地 "),e("code",[t._v("commmit")]),t._v(" 之前，校验你提交的内容是否符合你本地配置的 "),e("code",[t._v("eslint")]),t._v("规则(这个见文档 "),e("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESlint")]),t._v(" )，如果符合则提交成功。如果不符合它会自动执行 "),e("code",[t._v("eslint --fix")]),t._v(" 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。")],1),t._m(13),e("p",[t._v("最佳的 "),e("code",[t._v("lint")]),t._v(" 规范流程就是推荐团队成员先在自己的编辑器中配置 "),e("code",[t._v("eslint")]),t._v("，在 webpack 中配置并开启 "),e("code",[t._v("eslint-loader")]),t._v(" 错误提示，这样平时写的时候编辑器就能帮你修正一些简单的格式错误，同时提醒你有哪些不符合 "),e("code",[t._v("lint")]),t._v(" 规范的的地方，并在命令行中提示你错误。这方面详细的内容见 "),e("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESlint")]),t._v("。")],1),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Hooks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("更少的 Bug")]),s("li",[this._v("更高的开发效率，Lint 很容易发现低级的、显而易见的错误")]),s("li",[this._v("更高的可读性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("很多时候我们"),s("code",[this._v("lint")]),this._v("的校验是放在那个在持续集成阶段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("代码提交 --\x3e 跑 CI 发现问题(远程) --\x3e 本地修复问题 --\x3e 重新提交 --\x3e 通过检查(远程)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但这样有一个问题，我们的 "),s("code",[this._v("CI")]),this._v("(持续集成) 往往不是仅仅只做 "),s("code",[this._v("Lint")]),this._v("工作，它还有会有很多其它的任务，这样就导致特别的浪费时间，往往可能需要几分钟之后你才会发现问题，或者有的时候你根本就没有发现你的 "),s("code",[this._v("CI")]),this._v(" 没有跑通过。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"husky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#husky","aria-hidden":"true"}},[this._v("#")]),this._v(" husky")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" husky -D -S\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"precommit"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"eslint src/**/*.js"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('git commit -m "Keep calm and commit"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但这样会有一个问题，就是这次提交我可能只改了一个文件，比如我就改了 "),s("code",[this._v("foo.js")]),this._v(" 的文件，但它依然会校验所有"),s("code",[this._v("src")]),this._v(" 下面的"),s("code",[this._v(".js")]),this._v("文件，非常的不友好。导致的问题就是：我提交我写的代码，还先要帮人的代码问题解决了才能提交。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"lint-staged"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged","aria-hidden":"true"}},[this._v("#")]),this._v(" lint-staged")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" lint-staged -D -S\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[t._v('"precommit"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("\n\n"),e("span",{attrs:{class:"token property"}},[t._v('"lint-staged"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"src/**/*.{js,vue}"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{attrs:{class:"token string"}},[t._v('"eslint --fix"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但这并不是强制的，有些团队成员或者说刚来的实习生没有在编辑器中配置或者无视命令行中提示的错误，这时候就需要配置"),s("code",[this._v("precommit")]),this._v(" 这种强制性校验的东西，保证所有提交到远程仓库的内容都是符合团队规范的。")])}],!1,null,null,null);n.options.__file="git-hook.md";s.default=n.exports}}]);