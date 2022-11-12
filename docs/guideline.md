---
title: ガイドライン
description: FREESERVER Wikiを書く際に心がけてほしいこと
sidebar: true
---
# Guideline for editor

このページはWikiを編集するときに
統一、注意してほしいことが書いてありますので
このガイドラインに基づいて書いてください。

## 解説ページ内に写真を添付する際

### 写真内には紹介するもの以外の情報を載せないこと

写真内に紹介するもの以外の情報があると何を説明したいのかわからなくなってしまいます。  
そのため、なるべく説明したい対象をクローズアップし、その他の要素を排除した画像にしてください。

- **とっても悪い例**  

タスクバーなど不要な要素が多数存在しています。  
また、撮影対象からも遠く何を被写体としているのかわかりません。  
![とっても悪い例](https://i.imgur.com/AHgVlSk.png)

- **良い例**

![良い例](https://i.imgur.com/vTv3TLz.png)

### Minecraft内でのスクリーンショットを載せる際の注意点

サーバー内リソースパック以外は入れないようにしましょう。  
初めて見る人が見づらかったり分かりづらかったりするかもしれません。

### 動画でも同じです。出来れば見やすくなるように軽く編集してください。

**音声を載せる際は、ハキハキと元気よく聞こえやすいように、見ている人が誰でも分かるような発言、[フィラー](https://makitani.net/shimauma/filler)をなくす努力をしましょう。**

何を見せたいのか、何を見せているのか、それを考えて撮影しましょう。

## コマンドの表記

```plaintext
`/rg claim <保護名>`
```
と書くと

`/rg claim <保護名>`

このように表示されますので\`でコマンドを囲んでください

### 引数を書くとき

いい例: `/rg claim <保護名>`

悪い例: `/rg claim {保護名}` `/rg claim [保護名]`

引数は<>で囲んでください

## 改行の方法

**段落を区切るほどの改行をするには**

```md
一行目

二行目
```

---

`結果`

一行目

二行目

---

**改行をするには**

```md
一行目（後ろに半角スペース2つ）  
二行目
```

---

`結果`

一行目（後ろに半角スペース2つ）  
二行目

---

を使いましょう。

## なるべくMarkdownを使おう

Markdownの中にHTMLを使うことは出来ますが、見た目上の問題ゆえ、Markdownで書けるところはなるべくMarkdownで書けるようにしましょう。

## 画像の埋め込みにはImgur（イムガー）を使おう

画像はImgurを使って添付するようにしましょう。
添付する方法は、まず画像を用意したら<https://imgur.com>に行って、撮影した画像をページ枠内にドラックアンドドロップします。

そうしたら、下のような画面になると思われます。
![Imgur.com](https://i.imgur.com/zjHxHNJ.png)

更に、
  Give your post title...
の下の画像を右クリックして、画像のリンクをコピーというボタンをクリックすると、その画像へのリンクがクリップボードにコピーされます。

そして、Wikiのコードに
```Markdown
![]()
```
と入力し、左の括弧に画像の説明、右の括弧の中に先ほどコピーしたURLをペーストしてください。

※参考動画

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1IVctVQfUW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
