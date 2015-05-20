# Electron Study Note

http://electron.atom.io/

## Electronとは
* node.js(io.js) + ChromiumでWebテクノロジー(html + css + javascript)でデスクトップアプリケーションを作れるもの  
→ ブラウザのAPIとnodeのAPIを組み合わせて使える
* クロスプラットフォーム(mac, windows, Linux)対応
* オープンソース(maintained by GitHub and an active community.)
* 旧名 Atom-shell
* Electronはコア部分はC++とPythonで書かれている

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
* kobito http://kobito.qiita.com/
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