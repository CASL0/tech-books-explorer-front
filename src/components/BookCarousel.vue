<template>
  <div>
    <v-row class="label"> {{ label }} </v-row>
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
          @click="onClickCard(book.url)"
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

const router = useRouter();

defineProps<{
  books: Book[];
  label: string;
}>();

const modules = [Pagination];

const onClickCard = (url: string) => {
  const width = 800;
  const height = 650;

  // 現在のブラウザウィンドウの位置とサイズを取得
  const windowLeft = window.screenX || window.screenLeft;
  const windowTop = window.screenY || window.screenTop;
  const windowWidth = window.outerWidth;
  const windowHeight = window.outerHeight;

  // 新しいウィンドウの開始位置を計算
  const left = windowLeft + (windowWidth - width) / 2;
  const top = windowTop + (windowHeight - height) / 2;

  // 新しいウィンドウを開く
  window.open(
    url,
    "newWindow",
    `width=${width},height=${height},left=${left},top=${top}`
  );
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
