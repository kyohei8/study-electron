var app = require('app');
var BrowserWindow = require('browser-window');  
var mainWindow = null;
var ipc = require('ipc');

// すべてのウィンドウを閉じた場合アプリケーションを終了する
app.on('window-all-closed', function() {
  app.quit();
});

// フロント側から送信されるイベントを定義
ipc.on('online-status-changed', function(event, isOnline) {
  if(isOnline){
    console.log('オンラインになりました');
  }else{
    console.log('オフラインになりました');
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // index.htmlをロード
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});