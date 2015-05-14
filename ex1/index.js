// application life をコントロールするモジュールを読み込む
var app = require('app');
// ブラウザウィンドウを利用するモジュールを読み込む
var BrowserWindow = require('browser-window');  

// crash reportをelectronのサーバに送る（モジュールを読み込む）
require('crash-reporter').start();

// ウィンドウオブジェクトをグローバルとして保持
// そうしないとウィンドウを閉じたとき（javascriptのGCによって）で
// 自動的にアプリケーションが終了してしまう
var mainWindow = null;

// すべてのウィンドウを閉じた場合アプリケーションを終了する
app.on('window-all-closed', function() {
  app.quit();
});

// Electronが起動したとき呼び出される
// 初期化とブラウザウィンドウを生成
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // index.htmlをロード
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  //　ウィンドウが閉じるときに呼ばれる
  mainWindow.on('closed', function() {
    // window objectの参照を解除する,
    // 通常はウィンドウは配列に保持される。
    // もし複数のウィンドウオブジェクトが配列に保持している場合は
    // 対応する要素を個別で削除する
    mainWindow = null;
  });
});