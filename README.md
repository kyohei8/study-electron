# Electron Study Note

http://electron.atom.io/

## Electronとは
* node.js(io.js) + ChromiumでWebテクノロジー(html + css + javascript)でデスクトップアプリケーションを作れるもの
* クロスプラットフォーム(mac, windows, Linux)対応
* オープンソース(maintained by GitHub and an active community.)
* 旧名 Atom-shell

## 機能
* Automatic updates
* Crash reporting (自動的にどこかに送る?）
* Windows installers  
* Debugging & profiling (webkitのdev tool)
* Native menus & notifications

## 代表的なアプリ
* Atom https://atom.io/
* slack https://slack.com/
* visual studio code https://code.visualstudio.com/
* Avocode http://avocode.com/ (psd->html tool)
* etc..

## Get started

electronをグローバルにインストール

```shell
$ npm install electron-prebuilt -g
```

プロジェクトを作成

```shell
$ mkdir newElectronProject
$ cd newElectronProject
$ npm init
```

ローカルにelectronをインストール

```shell
$ npm install electron-prebuilt --save-dev
```

→ [ex1へ](ex1)