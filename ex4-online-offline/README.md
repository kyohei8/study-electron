# online / offline
オンラインとオフラインを検知する方法

## onlineイベントとofflineイベント
フロント側のjsで`online`もしくは`offline`イベントを定義することで
ネットワークがオンラインかそうでないかを判定できる。

オンラインかどうかは`navigator.onLine`変数で判定できる。

```js
window.addEventListener('online',  function(){
	window.alert(navigator.onLine); // true
});

window.addEventListener('offline',  function(){
	window.alert(navigator.onLine); // false
});
```

## オンラインであるかをelectron側で受け取る方法

モジュール`ipc`を使ってフロント側の情報をElectron(裏側)で受け取ることができる。

electron側は`ipc`を使って受け取るイベントを定義
```js
// index.js(electron側)
var ipc = require('ipc');

// フロント側から送信されるイベントを定義
ipc.on('online-status-changed', function(event, status) {
  console.log(status);
});

```

フロント側で`ipc`を利用し、定義したイベント送信する
```js
// index.js(electron側)
var ipc = require('ipc');

window.addEventListener('online',  function(){
	ipc.send('online-status-changed', navigator.onLine); // trueを送信
});

window.addEventListener('offline',  function(){
	ipc.send('online-status-changed', navigator.onLine); // falseを送信
});

```
---
ref: https://github.com/atom/electron/blob/master/docs/tutorial/online-offline-events.md