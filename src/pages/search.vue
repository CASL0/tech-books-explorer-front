<template>
  <v-container>
    <v-row>
      <span class="header">検索結果：{{ keyword }}</span>
    </v-row>
    <div v-if="searchedBooks.length === 0">
      {{ keyword }}の検索結果が見つかりませんでした。
    </div>
    <v-else>
      <v-row no-gutters>
        <v-col cols="4" v-for="book in searchedBooks" :key="book.isbn">
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
    </v-else>
  </v-container>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/app";
import BookCard from "@/components/BookCard.vue";
import { openUrl } from "@/utils/windowUtils";

const route = useRoute();
const store = useAppStore();

const keyword = computed(() => route.query["keyword"] as string);

const searchedBooks = computed(() =>
  store.books.filter((e) => e.title.indexOf(keyword.value) !== -1)
);

const onClickCard = (url: string) => {
  const width = 800;
  const height = 650;

  openUrl(url, width, height);
};
</script>
<style scoped>
.header {
  padding: 16px;
  font-size: 24px;
}

.card {
  margin: 8px;
}
</style>
