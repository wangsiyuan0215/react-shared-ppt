<script setup lang="ts">
import { computed } from 'vue';
import { ElSwitch } from 'element-plus'
import useOnlineStatus, { Options } from "../hooks/useOnlineStatus";

const { status } = useOnlineStatus();
const value = computed<boolean>(() => status.value === Options.ON_LINE)
</script>

<template>
  <div>
    Current status: {{status === Options.ON_LINE ? '✅ Online' : '🛑 Offline'}}
  </div>
  <div class="mt-2 select-none">
    <ElSwitch v-model="value" active-text="Online" inactive-text="Offline" @change="v => status = (v ? Options.ON_LINE : Options.OFF_LINE) " />
  </div>
</template>

<style scoped>
:deep(.el-switch__label):not(.is-active) {
  @apply text-gray-500;
}
:deep(.el-switch__label.is-active) {
  color: var(--purple) !important;
}
:deep(.el-switch.is-checked .el-switch__core) {
  background-color: var(--purple) !important;
  border-color: var(--purple) !important;
}
</style>