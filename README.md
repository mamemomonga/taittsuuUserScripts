# タイッツー・ユーザー・スクリプト

[タイッツー](https://taittsuu.com/)はこれまでにない革新的なマイクロブロギングサービスです。これらをさらに使いやすくするためのユーザ・スクリプトです。

タイッツーは現在鋭意開発中です。ユーザ・スクリプトはサイトの作りに強く依存するため、そちらが更新されると上手く動かなくなることが多いです。ご了承ください。

また、タイッツーに新機能が追加された場合は、動作に悪影響がでる可能性がありますので、その場合はユーザ・スクリプトを無効にしてください。

# インストール方法

1. ブラウザに [Tampermonkey](https://www.tampermonkey.net/) を導入します。
2. 下の記事から、導入したいスクリプトのソースを表示します。
3. `RAW` ボタンを押し、表示されるメニューに従ってインストールを行います。

# ユーザ・スクリプト

## リタイーツができるようにする

* [ソースコード](./retaittsuu.user.js)

リタイーツボタンをとりあえず使えるようにします。

## ステータスのリンクをタイツアイコンに移動

* [ソースコード](./moveStatusLink.user.js)

ステータスのリンクを本文からタイツアイコンに移動します。これによって本文のコピペがやりやすくなります。

## お気にタイツ

* [ソースコード](./okiniTaittsuu.user.js)

ファボボタンを押すと、お気にタイツできるようになります。機能としてはリタイーツとほぼ同じです。

# LICENSE

MIT