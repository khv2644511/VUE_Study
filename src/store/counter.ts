// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  console.log("count", count);
  console.log("doubleCount", doubleCount);

  return { count, name, doubleCount, increment };
});
