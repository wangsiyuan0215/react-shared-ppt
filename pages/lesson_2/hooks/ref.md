---
title: Ref Hooks
hideInToc: true
---

# Ref Hooks

Ref hooks 允许组件保存一些不用于渲染的信息。

- `useRef`：引用渲染不需要的值；
- `useImperativeHandle`：自定义公开 ref 的句柄；

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-135px)] mt-[16px]" />

<!--
引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。

首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；

useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。

接下来给大家演示下这两个 Hooks 的用法：

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref
 -->
