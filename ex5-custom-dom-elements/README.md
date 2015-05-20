# Custom Dom Elements

## File object

HTML5のfileAPIを使ってローカルファイルを読み込むことができる。
ブラウザ版のAPIに加え、特殊なプロパティとして、ファイルの絶対パスを返す`path`が使える。

```js
var holder = document.getElementById('holder');

holder.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
	console.log(file.path);
  return false;
};
```

ref: [file-object](https://github.com/atom/electron/blob/master/docs/api/file-object.md)

## &lt;webview> tag

Electronのウィンドウ内部でWebページを表示できる。
戻る進むやuser-agentなど簡易のブラウザ機能も利用できる。

ref: [web-view-tag](https://github.com/atom/electron/blob/master/docs/api/web-view-tag.md)

## window.open()

`window.opne(url)` でWebページを新しくウィンドウを開くことができる。
戻り値は`BrowserWindowProxy`クラスのインスタンスとなり、
このインスタンスを通じて開いたウィンドウを操作することができる。

ref: [window-open](https://github.com/atom/electron/blob/master/docs/api/window-open.md)
