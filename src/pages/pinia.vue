<template>
  <div>
    <v-btn @click="increment">{{ store.count }}</v-btn>
    <div>doubleValue : {{ doubleValue }}</div>
    <div>name : {{ name }}</div>
    <div>doubleCount : {{ doubleCount }}</div>
    <div>store : store{{ store }}</div>
  </div>
</template>

<script setup lang="ts">
// https://pinia.vuejs.kr/core-concepts/

import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
import { computed } from "vue";

// 컴포넌트 어디에서나 `store` 변수에 액세스 ✨
const store = useCounterStore();

// ❌ 반응성을 깨뜨리기 때문에 작동하지 않습니다.
// `props`에서 디스트럭처링하는 것과 동일합니다.
// const { name, doubleCount } = store;
// name; // 언제나 "Eduardo"
// doubleCount; // 언제나 0

// ✅ 이것은 반응적일 것입니다
// 💡 또한 `store.doubleCount`로 직접 사용할 수도 있습니다.
const doubleValue = computed(() => store.doubleCount);

// `name`과 `doubleCount`는 반응형 refs임.
// 이것은 플러그인에 의해 추가된 속성에 대한 'refs'도 추출함.
// 그러나 모든 액션 또는 비반응형(ref/반응형이 아닌) 속성을 건너뜀.
const { name, doubleCount } = storeToRefs(store);
// increment 액션은 그냥 구조화 가능.
const { increment } = store;
</script>
