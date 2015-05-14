
## アプリケーションの作成

起動ファイルとなる`index.js`を作成  
（これは`package.js`のmainに記述されたjsのファイル名であること）

ただのウィンドウを表示するだけのjavascriptコード

```js
// index.js

// application life をコントロールするモジュールを読み込む
var app = require('app');
// ブラウザウィンドウを利用するモジュールを読み込む
var BrowserWindow = require('browser-window');  

// Electronが起動したとき呼び出される
// 初期化とブラウザウィンドウを生成
app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800, 
	  height: 600
  });
});
```

electron をビルド
package.jsonの場所、もしくはindex.jsを指定する
```
$ electron .
# or electron ./index.js
```

## with node.js API

Chromiunを利用しているので、node.jsのAPIを利用できる
* require
* node.js組み込み変数・クラス
等

`index.html` を作成

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<h1> hello world </h1>
	<script>
		// commonjs形式のモジュールを利用できる
		require('app.js');
	</script>
</body>
</html>
```

`app.js`を生成

```js
// app.js

// node.jsのprocess変数が利用できる
document.write(process.version);

// node.jsの組み込みクラスであるfsを利用できる
var fs = require('fs');
var contents = fs.readFileSync('./package.json', 'utf8');

// alertを使い、画面上に表示できる
alert(contents);
```

`index.js` に htmlを読み込む処理を追加

```js
app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
```

electron をビルド

```
$ electron .
```
