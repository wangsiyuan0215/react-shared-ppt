---
title: Custom Hook in Vue3
---

# `useOnlineStatus.ts` in Vue3

<div flex="~" class="max-h-[calc(100%-40px)]">

<div class=" flex-1 overflow-y-auto">

```ts {11-13|15-17|19-21|23-31}
import { ref, watchEffect } from "vue";

export enum Options {
  ON_LINE = "Online",
  OFF_LINE = "Offline",
}

export default () => {
  const status = ref(
    window.navigator.onLine ? Options.ON_LINE : Options.OFF_LINE
  );

  function handleOnline() {
    status.value = Options.ON_LINE;
  }

  function handleOffline() {
    status.value = Options.OFF_LINE;
  }

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
