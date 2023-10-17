<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-title
        ><v-btn exact to="/">Hyebin Company</v-btn></v-app-bar-title
      >
    </template>

    <v-btn-group>
      <v-btn exact to="/mouse">mouseEvent</v-btn>
      <v-btn exact to="/pinia">try pinia</v-btn>
      <v-btn>원가 계산기</v-btn>
      <v-btn>이벤트</v-btn>
      <v-btn>마이페이지</v-btn>
    </v-btn-group>

    <template v-slot:append>
      <v-btn> 로그인 </v-btn>

      <v-menu open-on-click class="text-center" transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon>mdi-earth</v-icon>
            KR
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
let items = [{ title: "KR" }, { title: "EN" }, { title: "VIETNAM" }];
</script>

<style lang="scss">
// @use "@/styles/settings.scss";

// .my-button {
//   height: settings.$button-height;
// }
</style>
