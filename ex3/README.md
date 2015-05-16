# API

メニューの設定方法

https://github.com/atom/electron/blob/master/docs/api/menu.md

## context menu
右クリックで表示されるメニュー

フロント側(htmlから呼ばれるjs)に以下のように記述

```js
// 'remote'ライブラリはElectron側のAPIを呼び出すメソッドを提供する。
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var menu = new Menu();
menu.append(new MenuItem({ 
	label: 'MenuItem1', 
	click: function() { 
		console.log('item 1 clicked'); 
	} 
}));

menu.append(new MenuItem({ 
	type: 'separator' 
}));

menu.append(new MenuItem({ 
	label: 'MenuItem2', 
	type: 'checkbox', 
	checked: true
}));

// contextmenuイベントは右クリックを押下したときのイベント
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
```

## application menu
メニューバーに表示されるメニュー

Electron側のjsで設定する

```js
//メニューのテンプレートを作成
var template = [
  {
    label: 'Electron',
    submenu: [
      {
        label: 'About Electron',
        selector: 'orderFrontStandardAboutPanel:'
      }]		
	}
];

// buildFromTemplateを使ってメニューオブジェクトを生成
menu = Menu.buildFromTemplate(template);

app.on('ready', function() {
  
  // readyイベント時、メニューを設定
  Menu.setApplicationMenu(menu);
  
});
```