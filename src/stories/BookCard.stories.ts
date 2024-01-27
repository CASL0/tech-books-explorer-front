import type { Meta, StoryObj } from "@storybook/vue3";

import BookCard from "../components/BookCard.vue";

const meta = {
  title: "Example/BookCard",
  component: BookCard,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    fontColor: { control: "color" },
  },
  args: { title: "本の名前", publisher: "出版社", publishedAt: "2099-01-01" },
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "サンプル本",
    publisher: "XX出版",
    publishedAt: "2099-01-01",
  },
};
