(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{424:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日志系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志系统"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 日志系统")],1),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("不同于"),a("RouterLink",{attrs:{to:"/server/flask/logger_and_notify.html"}},[t._v("行为日志")]),t._v("，日志系统可以记录你的程序在运行时的所有信息。"),a("br"),t._v("\n在一个项目的开发阶段，控制台会显示明了的请求以及报错信息，使用IDE来debug也非常方便，但是到了生产环境，出于安全起见我们必须关闭掉debug模式，当我们的程序发生问题时(要知道在生产环境下也会产生意想不到的bug)，如果没有记录日志，我们就很难定位到错误发生的位置和错误的具体信息，想修复这些线上产生的未知错误就变得非常困难。"),a("br"),t._v("\n日志系统主要依赖于python标准库的logging类实现。Lin自定义了日志记录方式、分割方式和格式。这可以让开发者更明了地查看日志信息。当然，如果你不喜欢Lin的日志处理方式，可以实现自己的日志处理类，按照自己的想法和业务情况记录日志。关于自定义日志类我们会在后面探讨。")],1),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("日志系统拥有自己的配置，和文件上传系统相同，日志系统配置文件也是一个单独的python模块，需要在启动app的时候注册到app上。配置文件的存放位置为"),a("code",[t._v("app/config/log.py")]),t._v("，我们根据下面的配置代码了解一下每个配置项的含义。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("LOG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LEVEL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DEBUG'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志级别")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DIR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存放目录名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SIZE_LIMIT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切分大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'REQUEST_LOG'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启请求日志")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FILE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在上面的代码中，我们已经给出了每一项配置对应的注释。下面我们来详细介绍每一项配置：")]),t._v(" "),a("ul",[a("li",[t._v("LEVEL 为日志级别，当该配置项为DEBUG时，日志会记录客户端的请求参数，当该配置项为INFO时，日志不会记录客户端的详细参数。")]),t._v(" "),a("li",[t._v("DIR 为日志存放目录名称，采用文件的形式来记录日志，默认存放在项目根目录的"),a("code",[t._v("logs")]),t._v("目录下")]),t._v(" "),a("li",[t._v("SIZE_LIMIT 为日志切分大小，在当天的日志文件大小达到切分标准时，会对日志进行切分，旧的日志以 "),a("code",[t._v("yyyy-mm-dd-hh-mm-ss.log")]),t._v(" 的形式命名。而新的日志继续以 "),a("code",[t._v("yyyy-mm-dd.log")]),t._v(" 命名。")]),t._v(" "),a("li",[t._v("REQUEST_LOG 配置项为一个布尔值，表示是否开启"),a("code",[t._v("请求日志")]),t._v("，请求日志即客户端发起request请求的时候，会记录详细的信息，如客户端请求了管理员登录接口，日志文件中就会记录如下配置：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-16 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":19:51,879 DEBUG "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("63566")]),t._v("   ---  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Thread-2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/cms/user/login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" from:127.0.0.1 costs:149.200 ms data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tparam: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# url parameters")]),t._v("\n\tbody: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'super'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# body parameters")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("当设置REQUEST_LOG为False时，系统不会记录任何请求信息。")]),t._v(" "),a("ul",[a("li",[t._v("FILE 配置项同样为布尔值，由于日志系统默认采用文件方式进行记录，当访问量非常庞大时，大量的文件IO操作会消耗系统性能，这时你可以设置FILE配置项为False来关闭文件日志，使用自己的方式去记录日志。当然，通常对于一个中小型项目你可以不必多虑，采用此方式记录日志系统也不会有问题。")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"默认使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认使用"}},[t._v("#")]),t._v(" 默认使用")]),t._v(" "),a("p",[t._v("Lin默认已经开启了日志的记录，当你的程序在生产环境产生错误时，核心库的全局异常处理方法会记录这些错误的堆栈信息，例如：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务层的一个视图函数中产生了一个除零异常。此时模拟线上环境：app.debug = False")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),t._v("\n")])])]),a("p",[t._v("使用postman请求得到数据是这样的：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务器未知错误"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST  /log"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("显然，我们无法通过这样的信息来定位错误，此时日志文件的作用就体现出来了，打开当天的日志文件，你会发现日志文件中新增了两条数据，第一条为错误的堆栈信息，错误级别为"),a("code",[t._v("ERROR")]),t._v("，第二条为请求的具体信息，错误级别为"),a("code",[t._v("DEBUG")]),t._v("，你可以通过分析日志来排查错误。"),a("br"),t._v("\n当然，也可以使用"),a("code",[t._v("tail -f ${日志文件名}")]),t._v("来追踪日志文件，下面为具体日志信息：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":49:54,628 ERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44939")]),t._v("   ---  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Thread-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Traceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/fujiale/.local/share/virtualenvs/Lin-CMS-Flask-Core-PK22Bmbq/lib/python3.6/site-packages/flask/app.py"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1813")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" full_dispatch_request\n    rv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self.dispatch_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/fujiale/.local/share/virtualenvs/Lin-CMS-Flask-Core-PK22Bmbq/lib/python3.6/site-packages/flask/app.py"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1799")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dispatch_request\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" self.view_functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rule.endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("**req.view_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/fujiale/Desktop/flask-api/Lin-CMS-Flask-Core/starter.py"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("144")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" index\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nZeroDivisionError: division by zero\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":49:54,660 DEBUG "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44939")]),t._v("   ---  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Thread-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" from:127.0.0.1 costs:34.990 ms data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tparam: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", \n\tbody: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("h3",{attrs:{id:"自定义使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义使用"}},[t._v("#")]),t._v(" 自定义使用")]),t._v(" "),a("p",[t._v("Lin已经在内部记录了异常日志，如果用户想在自己的业务代码中记录日志，可以直接使用"),a("a",{attrs:{href:"https://dormousehole.readthedocs.io/en/latest/logging.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("flask框架为我们提供的日志记录方式")]),a("OutboundLink")],1),t._v("来记录日志，即"),a("code",[t._v("app.logger.错误级别()")]),t._v("的方式来在任何位置记录。下面我们看一下示例代码：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("’\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app.logger.info('info msg')")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app.logger.warning('warning msg')")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app.logger.debug('debug msg')")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发生了除零异常"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),t._v("\n")])])]),a("p",[t._v("再次查看日志文件，可以看到新增了两条信息：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":00:42,679 ERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45462")]),t._v("   ---  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Thread-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - 发生了除零异常\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":00:42,680 DEBUG "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45462")]),t._v("   ---  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Thread-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" from:127.0.0.1 costs:0.710 ms data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tparam: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", \n\tbody: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在上面的示例中，我们使用app.logger.error()来记录了error级别的日志，这里常用的错误级别还有：app.logger.info()、app.logger.warning()、app.logger.debug()等等。在我们自己记录日志的时候，一定要选择合适的错误级别，不能随便使用。")])]),t._v(" "),a("h2",{attrs:{id:"自定义日志类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志类"}},[t._v("#")]),t._v(" 自定义日志类")]),t._v(" "),a("p",[t._v("在简介中我们提到了如果开发者觉得Lin的日志记录方式不适用于自己的业务场景，可以自定义自己的日志类，本小结我们来看一看如何自定义自己的日志类，首先，我们先来关闭Lin的日志，找到app/app.py的create_app方法，实例化Lin的时候将logger设置为False：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v(" Lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("此时，你就可以实现自己的日志类并且使用到项目当中了。当然，具体的实现方法不一，在标准库"),a("code",[t._v("logging.handlers")]),t._v("模块下，定义了各种方式的记录日志类，可以参考或者直接使用这个模块下面的日志处理类。")])])}),[],!1,null,null,null);s.default=e.exports}}]);