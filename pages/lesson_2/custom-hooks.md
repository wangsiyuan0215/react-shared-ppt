---
title: Custom Hooks
---

# Custom Hooks

约定：
- 以 `use` 开头并以**小驼峰**的方式命名，比如 `useState` (内置) 或 `useOnlineStatus`；
- 可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 `useState` 的返回方式；
- 只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。<span v-click="2" class="text-highlight">?</span>

<div v-click="1">

_❗️不提倡单纯地为了自定义 hook 而去自定义。_

</div>

<div v-click="3">

_❗️自定义 hook 仅共享了逻辑，并不共享状态。_

</div>

*<a v-click="4" href="https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx" target="_blank">Show me the code</a>*

<!-- 
之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。

但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。

在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：

（按照 PPT 内容读）

……不可放到分之或循环中（click）。

当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）

还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。

这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？

那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）
 -->