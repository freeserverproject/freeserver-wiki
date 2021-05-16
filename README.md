# FREESERVER Wiki
Welcome to FREESERVER Wiki!

## 使い方
masterに対してコミットがあると自動でデプロイされ

Netlifyでビルドされ[wiki.freeserver.pro](https://wiki.freeserver.pro)
または[freeserver-wiki.netlify.app](https://freeserver-wiki.netlify.app/)に適用されます。

## ローカルで検証
### 必要環境
- Node.js v14.*
- npm 6.14.*

### 手順
1. 依存関係をインストール
```sh
npm ci
```
2. ローカル環境で起動
```sh
npm run docs:dev
```
3. ブラウザで[http://localhost:3000/](http://localhost:3000/)にアクセス

この手順を踏むとローカル環境でWikiをリアルタイムで見ることができます。
Viteなので保存した瞬間記事が更新されてほんとに見たまま編集ができます。

## カスタムHTML要素

### Minecraft Avatar
``` html
<mc-avatar user="uuid | mcid" type="helm" :width="32" />
```
| プロパティ名 | 必須  | デフォルト | 説明 |
| ------------| ----- | --------- | ---- |
| user        | yes   | \-        | MCIDかプレイヤーのUUID |
| type        | no    | helm      | [https://minotar.net/](Minotor)のプロパティ |
| width       | no    | 32        | 横幅 |
| height      | no    | \-        | 立幅 基本的には横幅と比率になるので特別なことがない限り指定する必要なし |

### Discord Widget
```html
<discord-widget url="Discord Widget JSON API URL"/>
```
| プロパティ名 | 必須  | デフォルト | 説明 |
| ------------| ----- | --------- | ---- |
| URL         | yes   | \-        | Discord WidgetにあるJSON APIのURL |

### Item Sprite
```html
<item-sprite name="snowball" :scale="1">
``` 
| プロパティ名 | 必須  | デフォルト | 説明 |
| ------------| ----- | --------- | ---- |
| name        | yes   | \-        | [Minecraft Wiki - ItemSprite](https://minecraft.fandom.com/wiki/Template:ItemSprite) ここのアイテム名を入力 |
| scale       | no    | 1         | 倍率 |
