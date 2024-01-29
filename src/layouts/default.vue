<template>
  <v-app>
    <DefaultBar class="app-bar" />

    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./default/AppBar.vue";
import DefaultView from "./default/View.vue";
</script>
<style scoped>
.app-bar {
  background-color: #131921;
  color: #fff;
}
</style>
