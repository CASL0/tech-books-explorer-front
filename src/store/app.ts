// Utilities
import { defineStore } from "pinia";
import { Book } from "@/models/Book";
import Papa from "papaparse";

export const useAppStore = defineStore("app", {
  state: (): { books: Book[] } => ({
    books: new Array<Book>(),
  }),
  getters: {
    /**
     * オライリー本を取得します
     * @param state
     * @returns
     */
    oreillyBooks(state: { books: Book[] }): Book[] {
      return state.books.filter((e) => e.publisher === "オライリー・ジャパン");
    },
    /**
     * 翔泳社の本を取得します
     * @param state
     * @returns
     */
    shoeishaBooks(state: { books: Book[] }): Book[] {
      return state.books.filter((e) => e.publisher === "翔泳社");
    },
    /**
     * 技術評論社の本を取得します
     * @param state
     * @returns
     */
    gihyoBooks(state: { books: Book[] }): Book[] {
      return state.books.filter((e) => e.publisher === "技術評論社");
    },
  },
  actions: {
    async fetch(): Promise<void> {
      Papa.parse("./tech-books.csv", {
        header: true,
        delimiter: ",",
        download: true,
        step: (row: {
          data: {
            isbn: string;
            price: string;
            published_at: string;
            publisher: string;
            title: string;
            url: string;
          };
        }) => {
          this.books.push({
            title: row.data.title,
            price: row.data.price,
            isbn: row.data.isbn,
            publisher: row.data.publisher,
            publishedAt: row.data.published_at,
            url: row.data.url,
          });
        },
      });
    },
  },
});
