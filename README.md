<h1>🕺weightManagement</h1>

「weightManagement」は、体重管理アプリです。
このアプリを使用して日々の体重を記録することができます。

<h2>💡機能紹介</h2>
<h3>◼︎サインアップ</h3>
メールアドレス/パスワードを入力してユーザー登録ができます

<h3>◼︎ログイン</h3>
メールアドレス/パスワードの入力、またはGoogleアカウントによってログインができます

<h3>◼︎ホーム画面</h3>
直近で最後に測定した体重のデータを表示します

<h3>◼︎体重の記録</h3>
体重の測定日、測定値を入力して記録ボタンをクリックするとDBに体重が記録されます
1日１回のみ体重を入力することができます

<h3>◼︎記録した体重データの修正</h3>
指定した日付の体重データを修正できます
日時指定後、体重を修正し記録してください

<h3>◼︎体重データの閲覧</h3>
過去に入力してきた体重データを折線グラフで確認できます
表示するデータの期間も、ボタン操作で切り替えることができます


<h2>📈アプリ使用方法</h2>

postgresコマンドでDATA BASEを作成してください

```sh
psql CREATE DATABASE <YOUR DB_NAME> 
```

元のターミナルに移動

```sh
\q
```



.envファイルを作成し下記のように記述

```sh
USER_NAME=<YOUR USER NAME>
DB_NAME=<YOUR DB NAME>
NODE_ENV=development
```

.env.localを作成し下記のようにFirebaseの接続情報を記述（＝以降は自身で取得した接続情報を記述）

```sh
VITE_APP_FIREBASE_API_KEY=
VITE_APP_FIREBASE_AUTH_DOMAIN=
VITE_APP_FIREBASE_PROJECT_ID=
VITE_APP_FIREBASE_STORAGE_BUCKET=
VITE_APP_FIREBASE_MESSAGE_SENDER_ID=
VITE_APP_FIREBASE_APP_ID=
```

ビルドコマンドを実行

```sh
npm run build
```

サーバー起動

```sh
npm run start
```



