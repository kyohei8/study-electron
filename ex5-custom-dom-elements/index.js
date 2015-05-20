var app = require('app');
var BrowserWindow = require('browser-window');  
var mainWindow = null;

// すべてのウィンドウを閉じた場合アプリケーションを終了する
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // index.htmlをロード
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});