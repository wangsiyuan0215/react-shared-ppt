---
title: Performance Hooks
---

# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 `useCallback`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- [useTransition](https://stackblitz.com/edit/stackblitz-starters-5kkxa7?ctl=1&embed=1&file=src%2FApp.tsx)：
  - 在不阻塞 UI 情况下更新状态，保持被标记为 transition 的状态变量的响应性（Tab 切换、路由等场景）；
  - 可以被其他状态（非过渡标记）的更新中断，其他状态更新之后会重新执行被标记为 transition 的状态的更新（大数据列表过滤场景）；
  - 无法用于控制文本输入；
- `useDeferredValue`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。

<!-- 
React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
在这里我建议各位同学只有在其他优化方式无法满足的情况再考虑。因为性能优化的方式非常多，比如懒加载、分页、防抖和节流等等。
有兴趣的各位同学可以自行查阅，这两个 hooks 会在未来优化主题再进行更细致的讲解。
 -->