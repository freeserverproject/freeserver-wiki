---
title: QuickShop
description: チェストでショップを作成できるプラグイン"QuickShop"の説明です。
sidebar: true
---

# QuickShop

## 概要

売る・買い取るアイテムを手に持った状態で、チェストに`/qs create <金額>`と書くと、チェストショップが作成できます。

## ショップの作り方

用意するもの:`チェスト`,`売りたいもの`

### Step.1 チェストを設置する

![a Chest](https://i.imgur.com/92o4XMa.png)

### Step.2 コマンドを打つ

```plaintext
/qs create <売る個数> <買うときの金額> <売却するときの金額>
```
**※各自で適切な数を当てはめてください。**

#### Wiki Editor's Tip


### Step3. 商品を登録する

![Chest](https://i.imgur.com/33KSdXX.png)

チャットに緑色の`Open your inventory, and drop an item to select it.`というメッセージがあるので、インベントリを開き、アイテムをインベントリ内に入れてください。

### Step4. チェストを指定する

チャットに`Click a chest within 15 seconds to create a shop.`とあるので、15秒以内にチェストをクリックしましょう。

### Step5. 完成

お疲れさまでした！

Shopが完成しました！

なお、ショップを建てるのに5FP必要ですが、これはショップの乱立を防ぐための対策です。

![完成品](https://i.imgur.com/d9FDCCa.png)


## コマンドリスト

※代表的と思われるものをまとめています。

|構文|説明|
|---|---|
|`/qs buy`|視点を合わせているショップの買い取り用ショップにします。|
|`/qs sell`|視点を合わせているショップの購入用ショップにします。|
|`/qs price`|視点を合わせているショップの金額を変更します。|
|`/qs clean`|在庫がないショップを削除します。|
|`/qs find <item>`|`<item>`のアイテムが売られている・買えるショップを安い順に表示します。|
|`/qs staff add <MCID>`|`<MCID>`で指定したプレイヤーをショップのスタッフ（在庫管理などができます）に追加します。|
|`/qs staff del <MCID>`|`<MCID>で指定したプレイヤーをショップのスタッフから削除します。`|
|`/qs staff list`|ショップのスタッフのリストを表示します。|

## コマンド例

`/qs create 100`

![簡易なショップ例](https://i.imgur.com/2z8Wfe6.png)
