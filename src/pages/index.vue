<template>
  <v-container>
    <BookCarousel
      :books="oreillyBooks"
      :label="$t('bookCarousel.oreilly')"
      class="carousel"
    />
    <BookCarousel
      :books="gihyoBooks"
      :label="$t('bookCarousel.gihyo')"
      class="carousel"
    />
    <BookCarousel
      :books="shoeishaBooks"
      :label="$t('bookCarousel.shoeisha')"
      class="carousel"
    />
  </v-container>
</template>

<script lang="ts" setup>
import BookCarousel from "@/components/BookCarousel.vue";
import { computed, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import dayjs from "dayjs";
import { Book } from "@/models/Book";

const appStore = useAppStore();

onMounted(async () => {
  await appStore.fetch();
});

const oreillyBooks = computed<Book[]>(() => {
  const threeMonthsAgo = dayjs().subtract(3, "month");
  return appStore.oreillyBooks
    .filter((e: Book) => e.publishedAt >= threeMonthsAgo.format("YYYY-MM-DD"))
    .slice(0, 10);
});

const gihyoBooks = computed<Book[]>(() => {
  const threeMonthsAgo = dayjs().subtract(3, "month");
  return appStore.gihyoBooks
    .filter((e: Book) => e.publishedAt >= threeMonthsAgo.format("YYYY-MM-DD"))
    .slice(0, 10);
});

const shoeishaBooks = computed<Book[]>(() => {
  const threeMonthsAgo = dayjs().subtract(3, "month");
  return appStore.shoeishaBooks
    .filter((e: Book) => e.publishedAt >= threeMonthsAgo.format("YYYY-MM-DD"))
    .slice(0, 10);
});
</script>
<style scoped>
.carousel {
  margin: 0 16px 32px 16px;
}
</style>
