/**
 * 指定のURLを新規ウィンドウで表示します
 * @param url
 * @param width
 * @param height
 */
export function openUrl(url: string, width: number, height: number) {
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
}
