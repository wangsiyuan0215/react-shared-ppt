---
transition: slide-up
---

# Thinking

为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

```vue {3}
<!-- BlogPost.vue -->
<template>
  <h4 @click="onClick">{{ title }}</h4>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>(['title'])
const emits = defineEmits(['click'])
const onClick = () => emits('click', props.title)
</script>
```

```vue {2}
<template>
    <BlogPost title="My journey with Vue" @click="onClick" />
</template>

<script setup>
const onClick = (title: string) => console.log(title)
</script>
```

<!-- 
这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说

delay 2000 （点击右上角时间重置时间）

- OK，其他人还有别的答案吗？
- OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！

接下来，我们进入这次培训的主题，React！
 -->