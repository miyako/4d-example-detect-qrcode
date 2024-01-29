# 4d-example-detect-qrcode
HTMLとORDAでQRコードリーダー

* ブラウザ標準のバーコード読み取りAPI[`BarcodeDetector`](https://caniuse.com/?search=BarcodeDetector%20API)はiOSでサポートされていない

* `BarcodeDetector`の[`polyfill`](https://github.com/undecaf/barcode-detector-polyfill)を検証
  * 解読できたのはきれいなバーコード画像のみ・カメラで撮影した写真は無理だった
  * `.fetch()`が`application/wasm`のMIME（4Dは`application/octet-stream`を返す）でエラーになるので[非同期APIを削除した](https://github.com/miyako/4d-example-detect-qrcode/blob/main/detect-qrcode/WebFolder/js/zbar-wasm.js)

