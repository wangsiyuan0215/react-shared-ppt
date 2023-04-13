---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!--
React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？

首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list

然后引用我们的脚本文件 script.js

（点击跳转到 script.js 文件，然后折叠所有函数）

先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，

首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；

fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：
- 获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；
- 我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；
- 在获取到接口数据后，我首先要清空 $container；
- 接下来就是需要将数据渲染出来，那么在这里我是这么做的：
  -  首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；
  - 然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；
  - 最后我将整个 $fragement append 到 $container 完成列表的渲染；

大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；

那如果我们用 React 实现的话，会是什么样子的呢？
-->

---
hideInToc: true
---

# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

<div class="h-2" />


```tsx {all|1-7|9-18|2,6,10,17|3,5,11-12,16|13,15|4,14}
function AlertButton({ message, children }) {
  return (
    <button className="btn__alert" style={{ width: '20px' }} onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <img src="/public/images/react.png" />
      <AlertButton message="我是糖炒 🌰">
        我是糖炒 🌰
      </AlertButton>
    </div>
  );
}
```

<!--
那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。

这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；

（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。

（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；

（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；

（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。
-->

---
hideInToc: true
---

# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比         | React                          | Vue                                               |
| ------------ | ------------------------------ | ------------------------------------------------- |
| 组件调用       | 大驼峰                         | 大驼峰、小驼峰、短横线均可                        |
| 原生标签     | **必须**闭合（包括自闭合）             | 无区别                                            |
| 作用域       | 全局、函数和块级作用域         | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 变量、表达式 | 用 `{}` 表示                   | 用 `{{}}` 表示                                    |
| 属性         | 小驼峰，_class 改为 className_ | 小驼峰、短横线命名均可                            |
| 动态属性     | 参数后加 `{}`                  | 参数前加 `:`                                      |
| 事件         | 事件后加 `{}`，值为函数              | 事件前加 `v-on` 或 `@`                            |
| <span :class="{'text-highlight-2 ': highlight }">动态渲染</span>      | <span :class="{'text-highlight-2 ': highlight }">一切皆为 JavaScript </span>             | `v-for` / `v-if` / `v-show` ...                        |

<span class="absolute left-[20px] bottom-[42px]" :class="{'text-highlight-2 ': highlight}" @click="trigger"><uim-rocket /></span> 


<!--
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  const highlight = ref(false)

  const trigger = () => (highlight.value = !highlight.value )
</script>


---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->