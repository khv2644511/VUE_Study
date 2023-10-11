<!--  공통적으로 사용될 레이아웃 -->
<template>
  <div class="basic-layout" :layout-theme="theme">
    <!-- slot 속성을 통해  BasicLayout 컴포넌트에 무엇이든 담길 수 있는 주머니 역할을 만듦 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  theme?: string;
}

const props = defineProps<Props>();
const { theme } = toRefs(props);
</script>

<style lang="scss" scoped>
.basic-layout {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background-color: $color-white-000;

  border-radius: 24px;

  &[layout-theme="blue"] {
    background-color: $color-blue-000;
  }
}
</style>
