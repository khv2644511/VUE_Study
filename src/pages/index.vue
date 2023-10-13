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
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfMake from "pdfMake";

import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "@assets/font/vfs_fonts";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

// (pdfMake as any).vfs = pdfFonts;
// (<any>pdfMake).vfs = pdfFonts;
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

function openPDF() {
  // const fonts = {
  //   NotoSansCJKkr: {
  //     normal: "NotoSans-Regular.otf",
  //     bold: "NotoSans-Regular.otf",
  //     italics: "NotoSans-Regular.otf",
  //     bolditalics: "NotoSans-Regular.otf",
  //   },
  //   Roboto: {
  //     normal: "Roboto-Regular.ttf",
  //     bold: "Roboto-Regular.ttf",
  //     italics: "Roboto-Regular.ttf",
  //     bolditalics: "Roboto-Regular.ttf",
  //   },
  // };

  var docDefinition = {
    content: [
      // {
      //   image: "snow",
      //   width: 150,
      //   height: 150,
      // },
      { text: "YOLCARGO", style: "header" },
      {
        text: "서울시 서초구 서초대로 127, 303호(혁성빌딩) T.02-755-7144 EMAIL:MAEKETING@YOLCARGO.COM",
        style: "subheader",
      },
      "The following table has nothing more than a body array",
      {
        style: "tableExample",
        table: {
          body: [
            ["Column 1", "Column 2", "Column 3"],
            ["One value goes here", "Another one here", "OK?"],
          ],
        },
      },

      { text: "zebra style", margin: [0, 20, 0, 8] },
      {
        style: "tableExample",
        table: {
          body: [
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 40,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      tableOpacityExample: {
        margin: [0, 5, 0, 15],
        fillColor: "blue",
        fillOpacity: 0.3,
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
      },
    },
    defaultStyle: {
      // font: "NotoSansCJKkr",
    },
    patterns: {
      stripe45d: {
        boundingBox: [1, 1, 4, 4],
        xStep: 3,
        yStep: 3,
        pattern: "1 w 0 1 m 4 5 l s 2 0 m 5 3 l s",
      },
    },
  };
  // pdfMake.fonts = fonts;
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
