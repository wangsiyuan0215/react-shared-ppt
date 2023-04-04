---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=script.js" class="w-full h-[calc(100%+5px)]" />

<!--
React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景再不用 Vue 或者 React 的情况下应该怎么用？

（讲解代码）
-->

---
hideInToc: true
---

# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

```tsx {all|1-7|9-18|3,5,11,12,13,16|13,15|4,14}
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
我们先来了解下 JSX 和它的大致用法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

这是一段 React 组件的代码，这里面共有两个组件，一个是 AlertButton，另一个是 Toolbar 组件，其中 Toolbar 组件是 AlertButton 组件的父组件。
-->

---
hideInToc: true
---

# React JSX vs Vue Template

| 对比         | React                          | Vue                                               |
| ------------ | ------------------------------ | ------------------------------------------------- |
| 变量、表达式 | 用 `{}` 表示                   | 用 `{{}}` 表示                                    |
| 作用域       | 全局、函数和块级作用域         | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 属性         | 小驼峰，_class 改为 className_ | 小驼峰、短横线命名均可                            |
| 动态属性     | 参数后加 `{}`                  | 参数前加 `:`                                      |
| 事件         | 事件后加 `{}`                  | 事件前加 `v-on` 或 `@`                            |
| 组件         | 大驼峰                         | 大驼峰、小驼峰、短横线均可                        |
| 原生标签     | **必须**自闭合                 | 无区别                                            |

<!--

（针对表格进行说明）
-->

---
hideInToc: true
---

# How JSX run?

<span class="text-highlight">不论是 React 的 JSX 还是 Vue 的 template，最终都会被编译为原生的 JavaScript 代码。</span>

<!--
事实上，不论是 React 的 JSX 还是 Vue 的 template，最终都会被编译为原生的 JavaScript 代码。
-->

<!-- 

再来看看 React 是怎么实现这个功能的？

-->