---
title: State Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />State Hooks</span>

State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：

- `useState`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1 }" >声明可以直接更新的状态变量；</span>
- `useReducer`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks >= 3 }" >声明一个状态变量，参数为更新逻辑；</span>

<br />

<template v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1">

```tsx {2,3|6,9,12} {at:1}
export default function App() {
  const [heros, setHeros] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("heros.json")
      .then(({ users }) => {
        setHeros(users);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
}
```

</template>

<template v-if="$slidev.nav.clicks >= 3">

```tsx {7|1-4|7|12} {at: 3}
function reducer(state, action) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer(reducer, [] /* ,initFn */);

  React.useEffect(() => {
    fetch("heros.json")
      .then(({ users }) => {
        dispatch({ type: "setHeros", payload: users });
      })
      .catch((error) => console.error(error));
  }, []);
}
```

</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
</script>

<!--
State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)

 -->
