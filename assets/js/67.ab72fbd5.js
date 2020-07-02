(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{432:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目结构及开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构及开发规范"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 项目结构及开发规范")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("阅读本小节前，请确保你已经完成了"),a("RouterLink",{attrs:{to:"/start/koa/"}},[t._v("上一节")]),t._v("的内容，当然\n你非常熟悉 koa 的开发也可直接阅读本小节")],1)]),t._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("blockquote",[a("p",[t._v("koa 是一个优美的微框架。这既是一件好事——你可以按照自己的习惯和想法来组织你的项\n目，不过对于团队来说这可能是一件坏事——团队每个人都有自己的喜好，这会使整体项目\n的结构很混乱。因此我们提供了 starter 模板项目，它是我们团队从诸多项目开发中提\n炼而来的一种规范，它不仅仅是结构，风格还有诸多细节，你会在后续逐渐了解到。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("app\n├── api                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# api 层")]),t._v("\n│   ├── cms             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关于 cms 的 api")]),t._v("\n│   │   ├── admin.js\n│   │   ├── log.js\n│   │   ├── test.js\n│   │   └── user.js\n│   └── v1              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 普通api")]),t._v("\n│       └── book.js\n├── config              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件目录")]),t._v("\n│   ├── code-message.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回成功码错误码和返回信息配置")]),t._v("\n│   ├── log.js          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志配置文件")]),t._v("\n│   ├── secure.js       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安全性配置文件")]),t._v("\n│   └── setting.js      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 普通配置文件")]),t._v("\n├── dao                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库操作")]),t._v("\n│   ├── admin.js\n│   ├── book.js\n│   ├── log.js\n│   └── user.js\n├── extensions          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 扩展目录")]),t._v("\n├── libs                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其它类库")]),t._v("\n│   ├── db.js           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sequelize 实例")]),t._v("\n│   ├── exception.js    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 异常类库")]),t._v("\n│   ├── type.js         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 枚举")]),t._v("\n│   └── util.js         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 助手函数")]),t._v("\n├── middleware          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间件目录")]),t._v("\n│   ├── jwt.js\n│   └── logger.js\n├── models              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模型层")]),t._v("\n│   ├── book.js\n│   ├── file.js\n│   ├── group-permission.js\n│   ├── group.js\n│   ├── log.js\n│   ├── permission.js\n│   ├── user-group.js\n│   └── user.js\n├── plugins             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件目录")]),t._v("\n├── validators          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 校验层")]),t._v("\n│   ├── admin.js        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 校验器模块")]),t._v("\n│   ├── book.js\n│   ├── common.js\n│   ├── log.js\n│   └── user.js\n├── app.js              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建koa实例及应用扩展")]),t._v("\n└── starter.js          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 程序的启动文件")]),t._v("\n")])])]),a("p",[t._v("上面是 starter 项目的整体结构，开发时我们强烈建议你遵循如下规范开发，在前期你肯\n定会不适应，但慢慢地你会爱上它。")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("app/api")]),t._v(" 文件夹中开发 API，并将不同版本，不同类型的 API 分开，如：v1 代表\n第一版本的 API，v2 代表第二版本，cms 代表属于 cms 的 API。")]),t._v(" "),a("li",[t._v("将程序的配置文件放在 "),a("code",[t._v("app/config")]),t._v(" 文件夹下，并着重区分 "),a("code",[t._v("secure（安全性配置）")]),t._v("\n和 "),a("code",[t._v("setting（普通性配置）")]),t._v("。配置更详细内容参考"),a("RouterLink",{attrs:{to:"/server/koa/config.html"}},[t._v("配置")])],1),t._v(" "),a("li",[t._v("将可重用的类库放在 "),a("code",[t._v("app/libs")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将数据模型放在 "),a("code",[t._v("app/models")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将开发的插件放在 "),a("code",[t._v("app/plugins")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将校验类放在 "),a("code",[t._v("app/validators")]),t._v(" 文件夹下。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在你自己的实际开发中你可能不需要"),a("code",[t._v("dao")]),t._v("这一层，对于简单的模型操作，我们建议你直接\n在视图函数中操作，而对于复杂的操作，我们建议你为每一类的 router 封装一个 dao。")]),t._v(" "),a("p",[t._v("dao 全称 "),a("strong",[t._v("data access object")]),t._v("，主要是负责数据对对象的操作，实际上它也属于模型\n层，属于 MVC 中的 M 层。")])]),t._v(" "),a("h2",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("h3",{attrs:{id:"api-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-规范"}},[t._v("#")]),t._v(" API 规范")]),t._v(" "),a("p",[t._v("koa 的 API 开发规范是一个很棘手的问题，目前社区中知名的基于 koa 二次的开发的\nthink.js 与 egg.js 都为 API 的开发引入了 Controller 这个概念。但 koa 官方以及它\n的生态大多都是以匿名函数的形式来进行 API 的开发的。koa-router 是目前很流行的路由\n管理库，它也遵循了匿名函数这一方式。所以 Lin 仍然是选择了与 koa 官方文档一致的做\n法，通过匿名函数来进行 API 的开发，从而降低学习成本。")]),t._v(" "),a("p",[t._v("Lin 是一套高可用的 CMS 系统，因为权限的控制是必须的，但是 koa-router 本身并不能\n满足我们的需求，因此我们在 koa-router 的基础上扩展除了 LinRouter 这一概念，它\n100%兼容了 koa-router 的开发，并且也提供了相应的方式进行权限的配置与管理。")]),t._v(" "),a("p",[t._v("一般的，我们推荐你在一类 API 中新建一个 router(如 Book 这一类，它负责与图书相关\n的 API)。如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LinRouter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lin-mizar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bookApi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/v1/book"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbookApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello, I am a book"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你熟悉 koa 和 koa-router，你会发现这几乎与 koa 的标准开发方式一样。新建\nrouter 时，你需传入红图的前缀"),a("code",[t._v("prefix")]),t._v("，如"),a("code",[t._v("/v1/book")]),t._v("，而后红图会自己在访问的 url\n中加入"),a("code",[t._v("/v1/book")]),t._v("前缀。当然你可以查看 koa-router\n的"),a("a",{attrs:{href:"https://github.com/ZijianHe/koa-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("，获得更多的初始化参数。")]),t._v(" "),a("h3",{attrs:{id:"数据库模型规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库模型规范"}},[t._v("#")]),t._v(" 数据库模型规范")]),t._v(" "),a("p",[t._v("koa 本身并非对数据库做出支持，Lin 通过集成"),a("code",[t._v("sequelize")]),t._v("这个 orm 库来进行数据访问，\n如果你不熟悉，请先阅读"),a("a",{attrs:{href:"http://docs.sequelizejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("Sequelize")]),t._v(" 实例放在"),a("code",[t._v("app/libs/db.js")]),t._v("文件，你可以通过如下方式拿到这个实例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路径根据实际情况进行引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sequelize "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../libs/db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 Sequelize 实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sequelize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"异常处理规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理规范"}},[t._v("#")]),t._v(" 异常处理规范")]),t._v(" "),a("p",[t._v("提起异常，大多时候我们都并不想碰见，因为它经常会与程序 crash 一起出现。但它确实\n又是程序中不可或缺的一部分，在 Lin 中我们默认集成了全局异常处理机制。因此不论你\n程序出现何种异常，都将会返回固定格式的提示信息给前端。对于前端来说，这是非常友好\n的一种交互。")]),t._v(" "),a("p",[t._v("在项目开发中我们强力推荐，甚至可以说是"),a("strong",[t._v("要求")]),t._v("你在开发的过程中，关于某一类的异常\n一定要通过继承"),a("code",[t._v("HttpException")]),t._v("的方式来自定义，这会让前后端的交互更加友好。")]),t._v(" "),a("p",[t._v("当然，当你每自定义一个异常后，别忘记在根目录下的"),a("code",[t._v("code.md")]),t._v("中记录相关异常的\nerror_code 和 msg，方便前端查阅和团队协作。")]),t._v(" "),a("h3",{attrs:{id:"数据校验规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据校验规范"}},[t._v("#")]),t._v(" 数据校验规范")]),t._v(" "),a("p",[t._v("我们强烈建议你为每个有数据校验的接口定义一个相应的校验类。Lin 整合\n了"),a("code",[t._v("validator.js")]),t._v("这个好用的校验库，并提供了一个基础的校验类"),a("code",[t._v("LinValidator")]),t._v("来方便参\n数的校验。 validator.js 包含了很多的校验函数，你可以查\n看"),a("a",{attrs:{href:"https://github.com/chriso/validator.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookSearchValidator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinValidator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isNotEmpty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"必须传入搜索关键字"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上，我们定义了一个图书搜索的校验类，在"),a("code",[t._v("BookSearchValidator")]),t._v("类中定义了一个字\n段"),a("code",[t._v("q")]),t._v("，并且传入了 q 的校验规则为 "),a("code",[t._v("isNotEmpty")]),t._v("，表示 q 不可为空。该字段会对前端传\n入的数据做出校验，若传入的数据中不存在"),a("code",[t._v("q")]),t._v("字段，则会返回前端一个错误信息，错误信\n息为"),a("code",[t._v("必须传入搜索关键字")]),t._v("。")]),t._v(" "),a("p",[t._v("到这里，你或许未发现校验类的可取之处，因为这个简单的校验直接在视图函数中实现，或\n许更为直接和简单。")]),t._v(" "),a("p",[t._v("但是，一旦我们的数据变多，且校验规则变得复杂，如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegisterValidator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinValidator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isNotEmpty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"昵称不可为空"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isLength"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"昵称长度必须在2~10之间"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isInt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"分组id必须是整数，且大于0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isOptional"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isEmail"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"电子邮箱不符合规范，请输入正确的邮箱"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"matches"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码长度必须在6~22位之间，包含字符、数字和 _ "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[A-Za-z0-9_*&$#@]{6,22}$/")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm_password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isNotEmpty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"确认密码不可为空"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validateConfirmPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"两次输入的密码不一致，请重新输入"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"两次输入的密码不一致，请重新输入"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以发现，当我们需要校验的参数变得复杂时，一个专注于校验的类可以让我们的代码变得\n更易维护，提升代码整体的可读性。")]),t._v(" "),a("p",[t._v("Lin 的校验器十分灵活，详细内容的请参考"),a("RouterLink",{attrs:{to:"/server/koa/validator.html"}},[t._v("校验器")]),t._v("这一节。")],1),t._v(" "),a("h3",{attrs:{id:"配置规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置规范"}},[t._v("#")]),t._v(" 配置规范")]),t._v(" "),a("p",[t._v("在我们的 starter 项目中，统一把项目的配置文件放在了"),a("code",[t._v("app/config")]),t._v("文件夹下。当然，\n我们也强烈建议你如此做。不仅如此，由于 Node.js 的特点你必须导出每一个配置项。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apiDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/api"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如上我们导出了 apiDir 这个配置项，Lin 会自动将配置加载到 config 中，如果你需要扩\n展配置，请直接在"),a("code",[t._v("module.exports")]),t._v("中添加其他的配置项，详细内容的请参\n考"),a("RouterLink",{attrs:{to:"/server/koa/config.html"}},[t._v("配置")]),t._v("这一节。")],1),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("到此，我们介绍了项目的结构和开发规范。本小节注重的不是项目的开发实现与细节，而是\n项目的整体与规范，对于很多人来说，去适应一个规范会觉得不舒服，但对于团队来说，这\n是一件必须的事。最后，送大家一句话——越规矩，越自由。")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);