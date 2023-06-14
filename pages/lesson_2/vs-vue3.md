---
title: Custom Hook in Vue3
---

# `useOnlineStatus.ts` in Vue3

<div flex="~" class="max-h-[calc(100%-40px)]">

<div class=" flex-1 overflow-y-auto">

```ts {none|9-15|16-39}
import { ref, watchEffect } from "vue";

export enum Options {
  ON_LINE = "Online",
  OFF_LINE = "Offline",
}

export default () => {
  // const [status, setStatus] = React.useState(
  //   window.navigator.onLine ? Options.ON_LINE : Options.OFF_LINE
  // );
  // =>
  const status = ref(
    window.navigator.onLine ? Options.ON_LINE : Options.OFF_LINE
  );

  // React.useEffect(() => {
  //   function handleOnline() { setStatus(Options.ON_LINE); }
  //   function handleOffline() { setStatus(Options.OFF_LINE); }
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);
  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  // };
  // }, []);
  // =>
  const handleOnline = () => status.value = Options.ON_LINE;
  const handleOffline = () => status.value = Options.OFF_LINE;

  watchEffect((onCleanup) => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    onCleanup(() => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    });
  });

  const toggleStatus = (v: Options) => (status.value = v);

  return {
    status,
    toggleStatus,
  };
};


```

</div>

<div class="w-[240px] px-4 py-2">
    <OnlineStatus />
</div>

</div>

<!--
之前我们看到的 useOnlineStatus 自定义钩子是用 React 来实现的，那么如果用 Vue3 来实现的话，应该怎么改造呢？

首先我们先用 Vue3 中的 ref 去替代 React 的 useState 去创建 status 状态变量；

其次我们用 watchEffect 来替代 useEffect，但是这里需要注意的是：

- 第一点在 Vue3 中是不需要将 handleOnline 和 handleOffline 函数放到 watchEffect 内部的，但是在 React 中则需要，这与为什么大家可以想一想；
- 同时，在 handleOnline 和 handleOffline 方法中，不用去调用 setState，而是直接使用 status.value 赋值就行了；
- 第二点就是无论是 React 还是 Vue3 都需要在 effect 中清理副作用，在 React 中清理当前副作用的函数放在了 useEffect 返回的函数中；在 Vue3 中放在了 watchEffect 回调参数 onCleanup 函数的参数的函数中；

至此，这个获取当前用户网络状态的自定义钩子就改造完成了。

接下来给大家演示下这个钩子好不好用。（show time）

通过改变这个开关的状态，可以更改当前网络状态；

还可通过改变系统的网络开关来改变这个显示，因为是线上，我就用浏览器给大家模拟下。
-->
