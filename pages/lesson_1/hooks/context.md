---
title: Context Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Context Hooks</span>

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 `createContext` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark" class="w-full h-[calc(100%-60px)]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
</script>

<!--
Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象

-->
