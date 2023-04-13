---
clicks: 9
layout: two-cols
transition: slide-up
---

# What is React?

<img src="/public/images/react.png" class="w-100" />

<div class="w-100 mt-5">
<v-clicks>

- React 是一个用于渲染用户界面（UI）的 JavaScript 工具库
- 用组件创建用户界面
- 用代码和标签编写组件
- 在任何地方添加交互
- 渐进式 JavaScript 框架
- NextJs / Remix / UmiJs

</v-clicks>

</div>

Read more about [React](https://react.dev/)

<template v-slot:right>

<div v-click="2">

```tsx {10,11|3-9,12-14|6,9|all} {at:2}
import { FunctionComponentFactory as FC } from 'react'

const Video: FC<{ video: string }> = ({
  video
}) {
  const onPlay = () => { console.log('Play video.'); }

  return (
    <div onClick={onPlay}>
      <Thumbnail video={video} />
      <LikeButton video={video} />
    </div>
  );
}
```

</div>

<v-clicks at="6">

<img src="/public/images/nextjs.png" class="relative z-[2] w-full -mt-40">
<img src="/public/images/remix.png" class="relative w-full z-[3] -mt-16">
<img src="/public/images/umijs.png" class="relative w-full z-[3] -mt-16">

</v-clicks>

</template>

<!--
> The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库

同时 React 还具有以下特点：
- 用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- 组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样
- 允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- 和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看
-->
