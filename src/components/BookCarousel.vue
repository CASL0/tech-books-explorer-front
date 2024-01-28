<template>
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
    /></SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Book } from "@/models/Book";
import { Pagination } from "swiper/modules";
import BookCard from "@/components/BookCard.vue";
import "swiper/swiper-bundle.css";

defineProps<{
  books: Book[];
}>();

const modules = [Pagination];
</script>
<style scoped>
.swiper-container {
  height: auto;
  padding: 8px;
}
</style>
