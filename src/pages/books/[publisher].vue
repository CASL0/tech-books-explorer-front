<template>
  <v-container>
    <v-row>
      <span class="label">{{ publisher }}</span>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4" v-for="book in books" :key="book.isbn">
        <BookCard
          :title="book.title"
          :publishedAt="book.publishedAt"
          :publisher="book.publisher"
          background-color="#414963"
          font-color="#fff"
          @click="onClickCard(book.url)"
          class="card"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/app";
import BookCard from "@/components/BookCard.vue";
import { Book } from "@/models/Book";
import { computed } from "vue";
import dayjs from "dayjs";
import { openUrl } from "@/utils/windowUtils";

const route = useRoute();
const appStore = useAppStore();

const publisher = route.params.publisher;

const books = computed<Book[]>(() => {
  const aYearAgo = dayjs().subtract(1, "year");
  return appStore.books.filter(
    (e: Book) => e.publishedAt >= aYearAgo.format("YYYY-MM-DD")
  );
});

const onClickCard = (url: string) => {
  const width = 800;
  const height = 650;

  openUrl(url, width, height);
};
</script>

<style scoped>
.label {
  padding: 16px;
  font-size: 24px;
}

.card {
  margin: 8px;
}
</style>
