---
title: Wikiへの寄稿の仕方
description: FREESERVER Wikiに寄稿する方法
sidebar: true
---

# Wikiへの寄稿の仕方

このページはWikiへの寄稿の方法が書いてあります。

## 用語解説

この記事には専門用語がたくさん出てくるので，それらを解説します。

この説明でわからなかった方はGoogleなどで検索してみてください。

| 用語|解説|
| Git（ギット）|  ソースコード向けのバージョン管理システム|
| レポジトリ| コンピューターの「フォルダー」のようなもので，データをしまうところ|
| プルリクエスト（Pull request）| 修正した際，本番環境への反映を別の誰かに要請する機能|
| コミット（Commit）| 追加や変更したファイルをGitHubに持っていき，GitHubの方で変更すること|
| フォーク（Fork）| GitHubで，べつの人のレポジトリを複製すること（この記事では自分のところに複製すること）|


## GitHubアカウントの作成

まず，Wikiの管理に使用する，"GitHubアカウント"を作成しましょう。

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

このチェックを入れることによって，コミットしたときにメールアドレスが知られてしまうことを防ぐことができます。

※余談ですがこの記事を執筆した人は，このチェックを入れずにコミットしてしてしまいサーバー上層部の方に超個人用のメールアドレスを知られてしまいました。（私みたいにならないように皆さんはチェックを入れておきましょう！）

チェックを入れることができたら，いよいよ執筆です。

## 執筆作業

執筆を行うには，いくつかの方法がありますが，今回はGitHubで直接執筆を行う方法を使って執筆を行う方法を紹介します。

### GitHubで執筆する

まず，GitHubのレポジトリ（フォルダーみたいなもの）をフォーク（自分のアカウントにコピーすること）します。

GitHubでの[FREESERVER Wikiのレポジトリ](https://github.com/freeserverproject/freeserver-wiki)に移動し，`Fork`のボタン（画像赤枠）をクリックします。

![Forked](https://i.imgur.com/BVkxyGM.png)

Forkできたら，`Nakatai-0322/freeserver-wiki`のように`{アカウント名}/freeserver-wiki`になっていると思います。

そのレポジトリを編集して，本番環境の`freeserver-project/freeserver-wiki`に変更を持っていくという感じです。

#### 編集する場合

編集の方法は内容にもよりますが，今回は例として`docs/menu.md`（「メニューについて」の記事）を編集します。

![WikiRepo](https://i.imgur.com/sTuirHh.png)

レポジトリを開き，該当の記事の元ファイル（`*.md`）を探しましょう。

<iframe width="560" height="315" src="https://www.youtube.com/embed/wsWQhDu9P0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Edit this file](https://i.imgur.com/IJ2lSfJ.png)

ペンのマークのボタンをクリックして，編集します。

編集が終了したら，ページの下に`Commit Changes`というボタンがありますので，クリックしてコミットします。

コミットできたら自分がフォークしたレポジトリに戻って，`Contribute`と書かれたボタンがあるのでクリックします。

![contribute](https://i.imgur.com/KzT9036.png)

すると，`Open pull request`と書かれたボタンが出てきますので，クリックします。

![Open pull request](https://i.imgur.com/OXlQ3Qk.png)

`Comparing changes`という画面に移動します。

自分のした変更が確認できますので，確認したら`Create pull request`と書かれたボタンをクリックします。.

![Create pull request](https://i.imgur.com/wwZYmuE.png)

`Open a pull request`という画面に移動しますので分かりやすいプルリクエスト名にして，必要であれば変更内容を書いたコメントを書きましょう。

プルリクエストが作成できたらサーバー運営からのチェックを受けて正式にWikiの方に反映されます。

※反映するにあたってあなたの案が修正される，もしくは修正をお願いされることがあります。

どこがいけないのかを確認し，それに合わせて自分のフォークしたレポジトリを確認しましょう。
