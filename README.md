# タイッツー・ユーザー・スクリプト

[タイッツー](https://taittsuu.com/)はこれまでにない革新的なマイクロブロギングサービスです。これらをさらに使いやすくするためのユーザ・スクリプトです。

タイッツーは公開されたばかりで、逐次機能が更新されていくことでしょう。ユーザ・スクリプトはサイトの作りに強く依存するため、更新されると上手く動かなくなることが多いです。ご了承ください。また、タイッツーに新機能が追加された場合は、動作に悪影響がでる可能性がありますので、その場合はユーザ・スクリプトを無効にしてください。

# インストール方法

1. ブラウザに [Tampermonkey](https://www.tampermonkey.net/) を導入します。
2. 下の記事から、導入したいスクリプトのソースを表示します。
3. `RAW` ボタンを押し、表示されるメニューに従ってインストールを行います。

# iOS Safariでの導入方法

* 若干難易度は高めですが、iOSでも動作するようです。設定の流れの概要は次の通りです。
* 私のほうでも「とりあえず動いた！」ってのを確認できた程度です。動かないこともあるかもしれません。
* ファイルの送信法法は、AirDropのほかにiCloudなどを使ったり直接ダウンロードするもあるかとおもいます。

1. このページにある *.user.js をダウンロードします。
2. iOSの「ファイル」で任意のフォルダを作成します。
3. AirDropなどで *.user.js を作ったフォルダに転送します。
4. [こちらの](https://github.com/quoid/userscripts) の App Store Linkから Userscriptsを導入します。
5. Userscripts で先ほどつくったフォルダを指定します。
6. 「設定 → Safari → 機能拡張 → UserScripts」と移動する
7. オンにして、アクセス権を「すべてのWebサイト」にする
8. Safariでタイッツーを開く
9. アドレスバーのところのジグソーパズルのところを押して「Userscript」を選ぶ
10. リロードボタンを押す
11. タイッツーをリロードする

# ユーザ・スクリプト

## リタイーツ

* [ソースコード](./reOkiniTaittsuu.user.js)

リタイーツを動作するようにしました。お気にタイーツ機能は公式の実装が完了しましたので削除しました。

## ステータスのリンクをタイツアイコンに移動

* [ソースコード](./moveStatusLink.user.js)

ステータスのリンクを本文からタイツアイコンに移動します。これによって本文のコピペがやりやすくなります。

# LICENSE

MIT