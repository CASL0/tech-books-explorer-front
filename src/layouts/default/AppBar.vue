<template>
  <v-app-bar flat>
    <div class="title">
      <v-icon icon="mdi-book-search" />

      {{ $t("appName") }}
    </div>
    <v-spacer />
    <form class="search-form" @submit.prevent="onSubmit(keyword)">
      <input
        type="text"
        v-model="keyword"
        class="text-field"
        placeholder="キーワードで検索"
      />
    </form>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const keyword = ref("");
const onSubmit = (keyword: string) => {
  router.push({
    path: "/search",
    query: {
      keyword,
    },
  });
};
</script>
<style scoped>
.title {
  margin-left: 16px;
  font-size: 20px;
}

.search-form {
  margin-right: 16px;

  .text-field {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    background-color: #fff;
    color: #333;
    outline: none;
    transition: border-color 0.3s;
    width: 250px;
  }

  .text-field:focus {
    border-color: #007bff;
  }

  .text-field::placeholder {
    color: #aaa;
  }
}
</style>
