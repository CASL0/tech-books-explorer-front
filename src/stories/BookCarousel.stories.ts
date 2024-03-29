import type { Meta, StoryObj } from "@storybook/vue3";

import BookCarousel from "../components/BookCarousel.vue";
import { Book } from "../models/Book";

const books: Book[] = [
  {
    title: "サンプル本１",
    publisher: "XX出版",
    publishedAt: "2099-01-01",
    isbn: "111-111",
    price: "3000円",
    url: "https://xxx/yyy/zzz",
  },
  {
    title: "サンプル本２",
    publisher: "YY出版",
    publishedAt: "2099-02-02",
    isbn: "222-222",
    price: "3000円",
    url: "https://xxx/yyy/zzz",
  },
  {
    title: "サンプル本３",
    publisher: "ZZ出版",
    publishedAt: "2099-03-03",
    isbn: "333-333",
    price: "3000円",
    url: "https://xxx/yyy/zzz",
  },
  {
    title: "サンプル本４",
    publisher: "XX出版",
    publishedAt: "2099-04-04",
    isbn: "444-444",
    price: "3000円",
    url: "https://xxx/yyy/zzz",
  },
  {
    title: "サンプル本５",
    publisher: "YY出版",
    publishedAt: "2099-05-05",
    isbn: "555-555",
    price: "3000円",
    url: "https://xxx/yyy/zzz",
  },
];

const meta = {
  title: "Example/BookCarousel",
  component: BookCarousel,
  tags: ["autodocs"],
  args: { books: books, label: "カルーセルのヘッダ" },
} satisfies Meta<typeof BookCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    books: books,
    label: "おすすめ",
  },
};
