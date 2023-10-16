<template>
  <div class="page">
    <v-btn @click="openPDF">OPEN PDF</v-btn>
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

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
(<any>pdfMake).fonts = {
  NanumGothic: {
    normal: "NanumGothic.ttf",
    bold: "NanumGothic.ttf",
  },
};

function openPDF() {
  var docDefinition = {
    content: [
      { text: "HYEPPY TISTORY", style: "header" }, // pdf에 들어갈 content 및 스타일 정의
      {
        text: "안녕하세요!! pdf 문서를 만들어봅시다~~~.",
        style: "subheader",
        margin: 30,
      },
    ],
    styles: {
      header: {
        fontSize: 40,
        bold: true,
      },
      subheader: {
        fontSize: 20,
        bold: true,
      },
    },
    defaultStyle: {
      font: "NanumGothic",
    },
  };
  pdfMake.createPdf(docDefinition).open();
}
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
