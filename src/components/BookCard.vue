<template>
  <v-card :style="style">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ publishedAt }}</v-card-text>
    <v-card-text>{{ publisher }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  /**
   * 本のタイトル
   */
  title: string;
  /**
   * 出版日
   */
  publishedAt: string;
  /**
   * 出版社
   */
  publisher: string;
  /**
   * カード背景色
   */
  backgroundColor?: string;
  /**
   * カード文字色
   */
  fontColor?: string;
}>();

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.fontColor,
}));
</script>
