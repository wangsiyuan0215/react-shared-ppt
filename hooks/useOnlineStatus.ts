import { ref, watchEffect } from "vue";

export enum Options {
  ON_LINE = "Online",
  OFF_LINE = "Offline",
  Online = "OFF_LINE",
  Offline = "ON_LINE",
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
