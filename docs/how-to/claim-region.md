---
title: 土地を保護する
description: "FREESERVER内にて土地を保護する方法"
---

# 保護の方法

このページでは、FREESERVER内における保護の方法に関して解説をします。

## WorldGuard(範囲保護)の保護方法

Step1. まず、金の斧を用意します。    <item-sprite name="golden-axe" :scale="1" />

Step2. 用意ができたら、保護する範囲を選択します。

- 始点を**左**クリック
- 終点を**右**クリック

```plaintext
この農場を保護する場合であれば、赤のブロックを左クリック、青のブロックを右クリックしてください。
```

![WorldEditの解説](https://i.imgur.com/k3F5gK6.png)

Step3. コマンドを使い、保護します。

まず始めに、`//expand vert`（**スラッシュ２つ注意**）というコマンドを入力し、実行します。

```plaintext
Wiki Editor's Tip
このコマンドには、岩盤から建築高度上限まで保護範囲の高さを広げるという意味があります。
```

次に、`/rg claim <保護名>`というコマンドを入力し、実行します。

これで保護完了です！
手順は次の動画でも確認できます

### 保護の解説動画

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TSzUAPYouX8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## BlockLocker(個別保護)の保護方法

![BlockLockerの使用例](https://i.imgur.com/6PmoAHW.png)

保護したいブロックに看板をつけるだけ！お手軽な簡易保護です。
保護のカスタマイズなどは[BlockLockerの解説ページ](/plugin/blocklocker)を参照してください。
