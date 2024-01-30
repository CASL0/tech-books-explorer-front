<template>
  <v-container>
    <v-row>
      <span class="header">{{ $t("search.resultHeader", { keyword }) }}</span>
    </v-row>
    <div v-if="searchedBooks.length === 0">
      {{ $t("search.noResultsFound", { keyword }) }}
    </div>
    <v-else>
      <v-row no-gutters>
        <v-col cols="4" v-for="book in searchedBooks" :key="book.isbn">
          <BookCard
            :title="book.title"
            :publishedAt="book.publishedAt"
            :publisher="book.publisher"
            :background-color="backgroundColor"
            :font-color="fontColor"
            @click="openBookUrl(book.url)"
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
import { useBookCard } from "@/composables/useBookCard";

const route = useRoute();
const store = useAppStore();

const keyword = computed(() => route.query["keyword"] as string);

const searchedBooks = computed(() =>
  store.books.filter((e) => e.title.indexOf(keyword.value) !== -1)
);

const { openBookUrl, backgroundColor, fontColor } = useBookCard();
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
