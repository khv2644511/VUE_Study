// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const age = 10;
  const arr = [{ name: "shoes", quantity: 1 }];
  const doubleCount = computed(() => count.value * 2);
  const bool = false;

  function increment(): number {
    return count.value++;
  }
  function $reset() {
    count.value = 0;
  }
  console.log("count", count);
  console.log("doubleCount", doubleCount);

  return { count, name, arr, age, doubleCount, bool, increment, $reset };
});
