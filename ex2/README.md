# packaging

作成したアプリケーションをパッケージ化する方法

## electron-packagerを使う

electron-packagerを使って実行可能なアプリケーションを生成する。

https://github.com/maxogden/electron-packager

```bash
$ npm install electron-packager -g
```

### 実行

```
$ electron-packager . MyApp --platform=darwin --arch=x64 --version=0.26.0
```
必須オプションの`--platform`は各プラットフォーム(OS)を設定
`--arch`は32bitか64bitをいずれか設定、
`--version`はElectronのバージョンを設定

デフォルトでは生成されたアプリケーションの中にnode_modulesディレクトリとelectron-prebuildなどの不要なパッケージが入ってしまうので
`--ignore`オプションを付けて除外する。正規表現が使える。

```
$ electron-packager . MyApp --platform=darwin --arch=x64 --version=0.26.0 --ignore=node_modules/electron-\.+
```

## asar

[asar](https://github.com/atom/asar) (Atom-Shell Archive)というatom用に作られたアーカイブフォーマットを利用し、
ファイルをまとめる。(tarのようなもの）

先ほどのパッケージングの方法だと`MyApp.app/Contents/Resources/`の中がソース丸出しなので、
asarを使ってファイルをまとめるようにする。

オプションの`--asar`を使う。

```
$ electron-packager . MyApp --platform=darwin --arch=x64 --version=0.26.0 --ignore=node_modules/electron-\.+ --asar
```

`MyApp.app/Contents/Resources/app.asar` となりファイルがまとまっている。
