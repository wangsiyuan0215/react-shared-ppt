import { defineWindiSetup } from "@slidev/types";

// 对内部 windicss 配置进行扩展
export default defineWindiSetup(() => ({
  shortcuts: {
    // 自定义默认背景
    "bg-main": "bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]",
  },
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
}));
