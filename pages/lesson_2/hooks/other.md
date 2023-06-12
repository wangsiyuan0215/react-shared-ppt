---
title: Other Hooks
hideInToc: true
---

# Other Hooks

这些 Hooks 对库作者有用，在业务代码中不常用。

- `useId`：组件的顶层调用 `useId` 以生成唯一 ID；
- `useDebugValue`: 在自定义 Hook 的顶层调用 `useDebugValue` 以显示 React DevTools 的可读调试值；
- `useSyncExternalStore`：在组件的顶层调用 `useSyncExternalStore` 以从外部数据存储中读取值。

<br />

```tsx {4,11}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}
```

<!-- 
还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。

useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。

第二个是 useDebugValue 在自定义 Hook 的顶层调用 `useDebugValue` 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 `useSyncExternalStore` 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。
 -->