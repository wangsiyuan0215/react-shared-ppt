---
title: Hooks
clicks: 2
---

# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要有**六种**：

- (2) <a href="/#/16">状态 Hooks</a> - `useState`；
- (1) <a href="/#/17">上下文 Hooks</a> - `useContext`；
- (2) <a href="/#/18">引用 Hooks</a> - `useRef`；
- (3) <a href="/#/19">副作用 Hooks</a> - `useEffect`；
- (4) <a href="/#/20">性能 Hooks</a> - `useMemo`；
- (3) <a href="/#/21">其他 Hooks</a> - `useId`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>
