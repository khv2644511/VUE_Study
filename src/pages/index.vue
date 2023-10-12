<template>
  <div class="page">
    <BasicLayout>
      <div class="page__container">
        <section class="page__container__navigation">
          <Navigations></Navigations>
        </section>
        <section class="page__container__notice">
          <Notice />
        </section>
      </div>
    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import Navigations from "@/components/organisms/Navigations.vue";
import BasicLayout from "@components/atoms/layout/BasicLayout.vue";
import Notice from "@/components/organisms/Notice.vue";
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: $color-black-900;

  &__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 86vw;
    height: 61vh;

    &__navigation {
      width: 20%;
      height: 100%;
    }

    &__notice {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
