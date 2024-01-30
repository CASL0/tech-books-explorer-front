<template>
  <div>
    <v-row align="center">
      <v-col cols="auto">
        <span class="label">{{ label }}</span>
      </v-col>
      <v-col cols="auto">
        <v-icon icon="mdi-chevron-right" @click="onClickExpandAll(label)" />
      </v-col>
    </v-row>
    <Swiper
      class="swiper swiper-container"
      :slidesPerView="3"
      :spaceBetween="16"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <SwiperSlide v-for="book in books" :key="book.isbn" class="slide">
        <BookCard
          :title="book.title"
          :publishedAt="book.publishedAt"
          :publisher="book.publisher"
          :background-color="backgroundColor"
          :font-color="fontColor"
          @click="openBookUrl(book.url)"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Book } from "@/models/Book";
import { Pagination } from "swiper/modules";
import BookCard from "@/components/BookCard.vue";
import "swiper/swiper-bundle.css";
import { useRouter } from "vue-router";
import { useBookCard } from "@/composables/useBookCard";

const router = useRouter();

defineProps<{
  books: Book[];
  label: string;
}>();

const modules = [Pagination];

const { openBookUrl, backgroundColor, fontColor } = useBookCard();

const onClickExpandAll = (publisher: string) => {
  router.push({ path: `/books/${publisher}` });
};
</script>
<style scoped>
.swiper-container {
  height: auto;
  padding: 8px;
}

.label {
  padding: 1rem;
  font-size: 20px;
}
</style>
