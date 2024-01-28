/**
 * 本のモデル
 */
export interface Book {
  /**
   * 本のタイトル
   */
  title: string;
  /**
   * 出版日
   */
  publishedAt: string;
  /**
   * 出版社
   */
  publisher: string;
  /**
   * isbn
   */
  isbn: string;
  /**
   * 本の価格
   */
  price: string;
  /**
   * 本の出版社ページのURL
   */
  url: string;
}
