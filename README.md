# 4d-example-detect-qrcode
HTMLとORDAでQRコードリーダー

* ブラウザ標準のバーコード読み取りAPI[`BarcodeDetector`](https://caniuse.com/?search=BarcodeDetector%20API)はiOSでサポートされていない

* `BarcodeDetector`の[`polyfill`](https://github.com/undecaf/barcode-detector-polyfill)を検証
  * 解読できたのはきれいなバーコード画像のみ・カメラで撮影した写真は無理だった
  *  `.fetch()`で4Dが`application/wasm`の代わりに`application/octet-stream`を返すためにエラー
  *  [非同期APIを削除した](https://github.com/miyako/4d-example-detect-qrcode/blob/main/detect-qrcode/WebFolder/js/zbar-wasm.js)

* `jsQR`もカメラで撮影した写真は無理だった・しかも巨大な画像で固まる
