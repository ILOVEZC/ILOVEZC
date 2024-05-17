(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd1f5"],{"2b3b":function(s,t){function a(){var s=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},t=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"frontmatter-markdown"},[a("h1",[s._v("拾遗")]),s._v(" "),a("ol",[a("li",[s._v("只有顶级的 Ref 属性才会被解包，非顶级的 Ref 属性在视图层的展示为[object Object]")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//此处的0为顶级Ref属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" count = ref("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//此处的1为非顶级Ref属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" object = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": ref("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") }\n")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("computed 的作用其实可以被 function 代替，但是 computed 的缓存作用可以减少计算。")]),s._v(" "),a("li",[s._v("computed 的值其实可以修改")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<script setup>\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { ref, computed } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" firstName = ref("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'John'")]),s._v(")\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" lastName = ref("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Doe'")]),s._v(")\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" fullName = computed({\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// getter")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("get")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" firstName.value + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("' '")]),s._v(" + lastName.value\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// setter")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("set")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("newValue")]),s._v(")")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 注意：我们这里使用的是解构赋值语法")]),s._v("\n    [firstName.value, lastName.value] = newValue.split("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("' '")]),s._v(")\n  }\n})\n<\/script>\n")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("动态控制样式的选择，常用 computed 的方式进行")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" isActive = ref("),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" error = ref("),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" classObject = computed("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" ({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("active")]),s._v(": isActive.value && !error.value,\n  "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text-danger'")]),s._v(": error.value && error.value.type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fatal'")]),s._v(",\n}))\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<div :"),a("span",{pre:!0,attrs:{class:"hljs-class"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")])]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"classObject"')]),s._v("></div>\n")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 "),a("code",{pre:!0},[a("span",{pre:!0,attrs:{class:"hljs-meta"}},[a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("$attrs")])])]),s._v(" 属性来实现指定：")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("\x3c!-- MyComponent 模板使用 $attrs 时 --\x3e\n"),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"$attrs.class"')]),s._v(">")]),s._v("Hi!"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("This is a child component"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<MyComponent "),a("span",{pre:!0,attrs:{class:"hljs-class"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")])]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baz"')]),s._v(" />\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("\x3c!-- 实际渲染情况 --\x3e\n"),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baz"')]),s._v(">")]),s._v("Hi!"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("This is a child component"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("v-for 可以遍历对象")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" myObject = reactive({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'How to do lists in Vue'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("author")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jane Doe'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("publishedAt")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016-04-10'")]),s._v(",\n})\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<li v-"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(value, key, index) in myObject"')]),s._v(">\n  {{ index }}. {{ key }}: {{ value }}\n</li>\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-cmd"}},[a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(". "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("title")]),s._v(": How to "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(" lists "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("in")]),s._v(" Vue\n"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(". author: Jane Doe\n"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(". publishedAt: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2016")]),s._v("-"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("04")]),s._v("-"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("ul",[a("li",[s._v("v-key 的作用是使得 Dom 能够移动位置，key 作为 Dom 的唯一标识。Diff 算法靠 v-key 来识别 Dom 准确插入位置。如果没有 v-key，data 只会在 Dom 上按照数据顺序重新渲染")])]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[s._v("在方法渲染中，可以采用$event 来获取 Dom")])]),s._v(" "),a("li",[a("p",[s._v("input 里面的复选框等标签，也可以和 v-model 联用。")])]),s._v(" "),a("li",[a("p",[s._v("input 里面有 true-value 和 false-value 属性可以设置选择后 v-model 的值")])]),s._v(" "),a("li",[a("p",[s._v("watch 可以监听的对象有 ref 对象，getter 函数、多个数据源组成的数组，前者是响应式对象，后者是属性副本")])]),s._v(" "),a("li",[a("p",[s._v("watchEffect 隐式追踪函数内一切 ref 值，一旦变动立刻触发。而一般 watch 先于 dom 的更新，但是可以通过 watchPostEffect 来控制执行顺序。")])]),s._v(" "),a("li",[a("p",[s._v("异步 watch 需要手动删除，一般我们都是同步 watch 绑定在组件上，随组件生死")])])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" unwatch = watchEffect("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...当该侦听器不再需要时")]),s._v("\nunwatch()\n")])]),s._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[a("p",[s._v("对于 HTML 使用 vue 的情况来看，component 属性 is 的值必须加上前缀 vue:才可以被解析为一个 Vue 组件。这一点是必要的。")])]),s._v(" "),a("li",[a("p",[s._v("组件全局注册时没有 tree shaking,即代码依赖仍然存在")])]),s._v(" "),a("li",[a("p",[s._v("关于组件里面，props 应该怎注册;同时,props 符合单向数据流的特征，可以用不带参数的 v-bind 绑定对象来传递 props。")])])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 考虑校验")]),s._v("\n<script setup lang="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ts"')]),s._v(">\ndefineProps({\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 基础类型检查")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// （给出 `null` 和 `undefined` 值则会跳过任何类型检查）")]),s._v("\n  propA: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 多种可能的类型")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("propB")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 必传，且为 String 类型")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("propC")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Number 类型的默认值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("propD")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("default")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对象类型的默认值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("propE")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对象或数组的默认值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 必须从一个工厂函数返回。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 该函数接收组件所接收到的原始 prop 作为参数。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("default")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("rawProps")]),s._v(")")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'hello'")]),s._v(" }\n    },\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 自定义类型校验函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在 3.4+ 中完整的 props 作为第二个参数传入")]),s._v("\n  propF: {\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("validator")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("value, props")]),s._v(")")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// The value must match one of these strings")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'danger'")]),s._v("].includes(value)\n    },\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 函数类型的默认值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("propG")]),s._v(": {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Function")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 不像对象或数组的默认，这不是一个")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 工厂函数。这会是一个用来作为默认值的函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("default")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Default function'")]),s._v("\n    },\n  },\n})\n<\/script>\n")])]),s._v(" "),a("ol",{attrs:{start:"15"}},[a("li",[a("p",[s._v("emit 可携带数据检验功效")])]),s._v(" "),a("li",[a("p",[s._v("组件透传 Attributes 可以被人为地控制继承，通过$attrs 控制属性继承")])])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<script setup>\ndefineOptions({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("inheritAttrs")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...setup 逻辑")]),s._v("\n<\/script>\n")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<span>Fallthrough attribute: {{ $attrs }}</span>\n")])]),s._v(" "),a("ol",{attrs:{start:"17"}},[a("li",[a("p",[s._v("插槽内容只能访问父组件的数据作用域，不能访问子组件的数据作用域，在样式上存在样式传递关系")])]),s._v(" "),a("li",[a("p",[s._v("越辈的数据传输采用 provide 和 inject 来实现")])]),s._v(" "),a("li",[a("p",[s._v("异步组件 defineAsyncComponent，可以用来优化白屏")])]),s._v(" "),a("li",[a("p",[s._v("组合式函数并没有状态管理，而是一份拷贝")])]),s._v(" "),a("li",[a("p",[s._v("构建自定义指令全局注册")])])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" app = createApp({})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使 v-focus 在所有组件中都可用")]),s._v("\napp.directive("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'focus'")]),s._v(", {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v("\n})\n")])]),s._v(" "),a("ol",{attrs:{start:"22"}},[a("li",[s._v("编写插件，一般途径是通过 inject，provide，vue.config.properties 来进行全局注册。")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// plugins/i18n.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("install")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("app, options")]),s._v(") =>")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 注入一个全局可用的 $translate() 方法")]),s._v("\n    app.config.globalProperties.$translate = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("key")]),s._v(") =>")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 获取 `options` 对象的深层属性")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用 `key` 作为索引")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" key.split("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.'")]),s._v(").reduce("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("o, i")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (o) "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" o[i]\n      }, options)\n    }\n  },\n}\n")])]),s._v(" "),a("ol",{attrs:{start:"23"}},[a("li",[s._v("一个持续存在的组件可以通过 onActivated,onDeactivated 注册相应的两个状态的生命周期钩子")])]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-js"}},[s._v("<script setup>\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {(onActivated, onDeactivated)} "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(" onActivated("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v("{"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("' '")]),s._v("}\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 调用时机为首次挂载")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 以及每次从缓存中被重新插入时")]),s._v("\n  }\n  ) onDeactivated("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在从 DOM 上移除、进入缓存")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 以及组件卸载时调用")]),s._v("\n  })\n<\/script>\n")])]),s._v(" "),a("ol",{attrs:{start:"24"}},[a("li",[a("p",[s._v("teleport 在 dom 渲染上是偏移位置，但是在逻辑上，仍与调用 teleport 的组件间存在父子关系。")])]),s._v(" "),a("li",[a("p",[s._v("suspense 属于异步组件解决方案，同样是白屏问题解决")])]),s._v(" "),a("li",[a("p",[s._v("状态管理的必要性:")])])]),s._v(" "),a("ul",[a("li",[s._v("多个视图依赖于同一份状态")]),s._v(" "),a("li",[s._v("来自不同视图的交互也可能需要更改同一份状态")])]),s._v(" "),a("ol",{attrs:{start:"27"}},[a("li",[s._v("vue-jest 可以用于单元测试")]),s._v(" "),a("li",[s._v("前端开发的两种形式分别是 SSR，SSG")])]),s._v(" "),a("ul",[a("li",[s._v("SSR： more rapid loading rate, higher CPU comsumption, nicer for reptile")]),s._v(" "),a("li",[s._v("SSG： static station like this blog.")])]),s._v(" "),a("ol",{attrs:{start:"29"}},[a("li",[s._v("列表虚拟化的社区:")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("vue-virtual-scroller")])]),s._v(" "),a("li",[a("p",[s._v("vue-virtual-srcoll-grid")])]),s._v(" "),a("li",[a("p",[s._v("vueuc/VVirtualList")])])]),s._v(" "),a("ol",{attrs:{start:"30"}},[a("li",[s._v("在 vue 里面无论使用模板还是渲染函数，内容都是自动转义的的，从而达到防止脚本注入的目的。")])])])}];return{render:s,staticRenderFns:t}}const r=a();s.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(s){return this.templateRender?this.templateRender():s("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);
//# sourceMappingURL=chunk-2d0bd1f5.5f827289.js.map