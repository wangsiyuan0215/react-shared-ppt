---
title: Lifecycle
clicks: 2
---

# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 `v16.3` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

<img src="/public/images/old-lifecycle.awebp" class="mt-4"/>

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

<img src="/public/images/new-lifecycle.awebp"  class="mt-4" />

</div>

</div>

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>

<!-- 
v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount

 -->