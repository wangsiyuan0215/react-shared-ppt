---
layout: 'center'
---

# <span class="text-[60px]">Lesson 2</span>

---
src: ./component-definition.md
---

# Component Definition

---
src: ./events.md
---

# React Events

---
src: ./hooks.md
---

# Hooks

---
src: ./hooks/state.md
---

# State Hooks

---
src: ./hooks/context.md
---

# Context Hooks

---
src: ./hooks/ref.md
---

# Ref Hooks

---
src: ./hooks/effect.md
---

# Effect Hooks

---
src: ./hooks/performance.md
---

# Performance Hooks

---
src: ./hooks/other.md
---

# Other Hooks

---
title: vs Vue3
---

# React vs Vue3

React hooks 与 Vue3 Composition API 的类比

|                | React hooks             | Vue3 Composition API  | 备注               |
| -------------- | ----------------------- | --------------------- | ------------------ |
| 状态           | `useState` `useReducer` | `reactive` `ref`      | -                  |
| 引用           | `useRef`                | `ref`                 | 不单指引用组件实例 |
| Context        | `useContext`            | `provider` `inject`   | -                  |
| Effect / Watch | `useEffect`             | `watchEffect` `watch` | React 手动指定依赖 |
| 缓存           | `useMemo` `useCallback` | `computed`            | React 机制决定     |
| DOM            | `useLayoutEffect`       | `nextTick`            | -                  |

<style>
    td {
        line-height: 24px;
    }
</style>

<!--

-->

---
src: ./custom-hooks.md
---

# Custom Hooks

---
src: ./vs-vue3.md
---

# vs Vue3

---
src: ./thinking.md
---

# Thinking