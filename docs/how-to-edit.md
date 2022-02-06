---
title: Wikiへの寄稿の仕方
description: FREESERVER Wikiに寄稿する方法
sidebar: true
---

# Wikiへの寄稿の仕方

このページはWikiへの寄稿の方法が書いてあります。

## GitHubアカウントの作成

まず，Wikiの管理に使用する，"GitHubアカウント"を作成しましょう。

[`github.com/signup`](https://github.com/signup)にアクセスし，画面の指示に従ってアカウントを作成しましょう。

アカウントの作成に関してはWeb上に情報が存在しますので，それを参考に進めてください。

GitHubは英語で分かりにくいかもしれませんが，翻訳サイトなどを使って頑張ってみてください。

## アカウント各種設定

アカウントが作成できたら，最低限の設定を行います。

[`github.com`](https://github.com)にアクセスし，右上のプロフィール画像をクリックしてメニューを開き`Settings`をクリックします。
![GitHub](https://i.imgur.com/v8Wwmz3.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/EyF5tIkKlsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

「Email」をクリックし，ページの下の方に
`Keep my email addresses private`
というチェックボックスがあるので**そこにチェックを入れてください。**

このチェックを入れることによって，コミット（変更を確定）したときにメールアドレスが知られてしまうことを防ぐことができます。

※余談ですがこの記事を執筆した人は，このチェックを入れずにコミットしてしてしまいサーバー上層部の方に超個人用のメールアドレスを知られてしまいました。（私みたいにならないように皆さんはチェックを入れておきましょう！）

チェックを入れることができたら，いよいよ本番の執筆です。

## 執筆作業

執筆を行うには，いくつかの方法がありますが，今回はGitHubで直接執筆を行う方法と`Visual Studio Code`及び`GitHub Desktop`を使って執筆を行う方法を紹介します。

### GitHubで直接執筆する

まず，GitHubのレポジトリ（フォルダーみたいなもの）をフォーク（自分のアカウントにコピーすること）します。

GitHubでの[FREESERVER Wikiのレポジトリ](https://github.com/freeserverproject/freeserver-wiki)に移動し，`Fork`のボタン（画像赤枠）をクリックします。

![Forked](https://i.imgur.com/BVkxyGM.png)

Forkできたら，`Nakatai-0322/freeserver-wiki`のように`{アカウント名}/freeserver-wiki`になっていると思います。

そのレポジトリを編集して，本番環境の`freeserver-project/freeserver-wiki`に変更を持っていくという感じです。

編集したい内容にもよりますが，今回は例として`docs/menu.md`（「メニューについて」の記事）を編集します。

![WikiRepo](https://i.imgur.com/sTuirHh.png)

レポジトリを開き，

<iframe width="560" height="315" src="https://www.youtube.com/embed/wsWQhDu9P0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>