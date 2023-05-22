---
title: Effect Hooks
clicks: 2
hideInToc: true
---

# Effect Hooks

用以处理**副作用**的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。

- `useEffect`：处理副作用，在 React 挂载 DOM 之前**异步**执行；
- `useLayoutEffect`：`useEffect` 的变体，在浏览器绘制 DOM 之前**同步**执行；

<br />

<div v-show="$slidev.nav.clicks === 1">

```tsx {4-12}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    fetch('heros.json'))
      .then((result) => result.json())
      .then(({ users }) => {
        setHeros(users);
      })
  }, []);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
```

</div>

<div v-show="$slidev.nav.clicks === 2">

```tsx {4-9}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useLayoutEffect(() => {
    const $list = document.querySelector('#user-list');
    const { width, height } = $list.getBoundingClientRect();
    console.log(width, height);
  }, [heros]);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
```

</div>

<!--
还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。
 -->
