(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{425:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"插件机制（目前处于测试状态）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件机制（目前处于测试状态）"}},[a._v("#")]),a._v(" "),s("H2Icon"),a._v(" 插件机制（目前处于测试状态）")],1),a._v(" "),s("blockquote",[s("p",[a._v("本小节让我们来详细介绍一下 Lin 的精髓——插件机制\n我们在这里再次强调，诸如 Flask-JWT 这样的第三方库，Flask 官方把它称之为"),s("code",[a._v("扩展")]),a._v("（extension）\n而在 Lin 中，我们的插件（plugin）某种程度上类似于扩展，但是它们完全不是一种东西！")])]),a._v(" "),s("h2",{attrs:{id:"插件的规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的规范"}},[a._v("#")]),a._v(" 插件的规范")]),a._v(" "),s("p",[a._v("首先，我们通过 一个 oss（用于图片上传到本地或阿里云） 插件来看看插件的目录规范和开发规范。")]),a._v(" "),s("h3",{attrs:{id:"目录规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[a._v("#")]),a._v(" 目录规范")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("├───oss\n│   │   config.py // 配置文件（必需），记录关于插件的可用配置\n│   │   info.py // 当前插件信息文件\n│   │\n│   └───app // 应用开发目录\n│           controller.py  // 控制层，每个控制层文件要求只有一个红图实例，当然你可以将文件名换成你喜欢的名字，而且你也可以拥有多个红图实例文件\n│           enums.py // 枚举类文件\n│           oss.py // 日志核心类库，插件的核心文件，如oss插件的核心文件为oss.py，当然你也可有多个核心文件\n│           model.py // 模型层，数据库模型类\n│           __init__.py // 导出文件（必需）。重要！！！\n")])])]),s("p",[a._v("Lin 的插件可能与你以前了解的插件概念不一样，"),s("em",[a._v("你可以把每个插件理解为一个小 app")]),a._v("。每个插件都有自己的配置、控制层、模型层甚至校验层（forms），换言之每个插件都有自己的业务，它的功能很像"),s("strong",[a._v("微服务")]),a._v("，即每个插件只负责完成某一项功能。")]),a._v(" "),s("h3",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[a._v("#")]),a._v(" 开发规范")]),a._v(" "),s("p",[a._v("由于插件本身就是一个微型的 app，插件的开发规范与项目的开发规范几乎一致，如果你还不够熟悉，那么请你再次阅读"),s("RouterLink",{attrs:{to:"/server/flask/"}},[a._v("开发规范")]),a._v("。")],1),a._v(" "),s("p",[a._v("当然，插件这里也有一个自己独特的机制——加载。在前面，我们在介绍项目开发时，红图以及模型都是我们主动去通过"),s("code",[a._v("import")]),a._v("导入的。但是在插件中，我们可以不用做这件事情，因为 Lin 会自动通过 loader（加载器）来帮我们做这件事，loader 可以帮我们自动去加载插件中的红图 api 和数据模型类。")]),a._v(" "),s("p",[a._v("但是，在你开发的插件中，你必须明确告诉 loader，因为 loader 真的不够聪明，它到底该加载哪些东西。而"),s("code",[a._v("oss/app/__init__.py")]),a._v("这个文件则扮演这个角色，它里面的代码很简单，如下：")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("controller "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" api\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Image\n")])])]),s("p",[a._v("在代码的第一行，我们从当前目录中的"),s("code",[a._v("controller")]),a._v("导入了"),s("code",[a._v("api")]),a._v("这个红图，第二行从"),s("code",[a._v("model")]),a._v("中导入了"),s("code",[a._v("Image")]),a._v("这个模型类。而后，loader 会自动的从"),s("code",[a._v("__init__.py")]),a._v("文件得到刚才导出的"),s("code",[a._v("api")]),a._v("和"),s("code",[a._v("Image")]),a._v("，然后存储到自身的容器中。")]),a._v(" "),s("p",[a._v("当然，在"),s("code",[a._v("__init__.py")]),a._v("你可以导入多个的红图和模型，如你还可能需要加载另外一个红图"),s("code",[a._v("some_api")]),a._v("和另外一个模型"),s("code",[a._v("Some")]),a._v("，接下来你应该在上段的代码中加入：")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("some "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" some_api\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Some\n")])])]),s("p",[a._v("被 loader 加载红图会被直接挂载到默认的 plugin 蓝图中，你可通过相应的 url 直接访问。而加载的模型你可通过如下的方式得到：")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("core "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" manager "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到manager")]),a._v("\nImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("get_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到加载到容器中的Log模型")]),a._v("\n")])])]),s("p",[a._v("当然如果你不喜欢这种方式，你也可以通过"),s("code",[a._v("import")]),a._v("方式得到这个模型：")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("oss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Image\n")])])]),s("h2",{attrs:{id:"插件的加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的加载"}},[a._v("#")]),a._v(" 插件的加载")]),a._v(" "),s("p",[a._v("在"),s("RouterLink",{attrs:{to:"/server/flask/run_process.html"}},[a._v("运行流程")]),a._v("一节中我们留下了一个悬念，那就是插件的加载流程。在 Lin 源代码中，可以在 Manager 的构造函数中找到如下代码段：")],1),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Loader\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Loader "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("这里初始化的 loader （插件加载器），由它来负责所有插件的加载，我们继续打开 Loader 的构造函数。")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("assert")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("is")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'plugin_path must be a dict'")]),a._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugin_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" plugin_path\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("load_plugins_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加载插件配置")]),a._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("load_plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加载插件")]),a._v("\n")])])]),s("p",[a._v("这里大致的流程是这样的，loader 率先从主 app 中读取插件的路径和配置（setting.py 文件中），然后加载每个插件单独的配置，最后加载插件。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 加载插件配置  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   ----"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  加载插件各自配置  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     ----"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 加载插件 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n")])])]),s("p",[a._v("接下来我们继续，在 Loader 类中还有两个方法"),s("code",[a._v("_load_plugin")]),a._v("和"),s("code",[a._v("_load_config")]),a._v("，这两个方法是 loader 的核心方法，由它们向容器中加载插件和插件配置。这两个方法的思路很明确，我们相信你完全可以自己理解。")]),a._v(" "),s("p",[a._v("好，插件的整体流程的梳理到此已经结束了。如果你感到疑惑，请记住 loader 的加载本身只是一个很简单的过程，当你亲身通过断点 Debug 的方式去运行程序时，你就会觉得豁然开朗。")]),a._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[a._v("在本节中，我们梳理插件的概念与流程，并通过"),s("code",[a._v("oss")]),a._v("这个插件来熟悉了插件的规范，当然插件的精彩绝不止于此，在下一节我们会"),s("RouterLink",{attrs:{to:"/server/flask/plugin_practice.html"}},[a._v("实操")]),a._v(" 插件。")],1),a._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);t.default=n.exports}}]);