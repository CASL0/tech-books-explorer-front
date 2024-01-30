import { openUrl } from "@/utils/windowUtils";

/**
 * [BookCard](../components/BookCard.vue)のビジネスロジック
 * @returns
 */
export function useBookCard() {
  const openBookUrl = (url: string) => {
    const width = 800;
    const height = 650;

    openUrl(url, width, height);
  };

  const backgroundColor = "#414963";
  const fontColor = "#fff";

  return {
    openBookUrl,
    backgroundColor,
    fontColor,
  };
}
