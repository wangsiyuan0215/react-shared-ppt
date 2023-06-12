---
title: Performance Hooks
hideInToc: true
---

# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 `useCallback`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- `useTransition`：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;
- `useDeferredValue`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。

<!-- 
React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo 

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。
 -->