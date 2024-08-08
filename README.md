# Office Online Viewer Redirect

このChrome拡張機能は、Officeファイルを自動的にOffice Online Viewerで開くようにリダイレクトします。Excel、PowerPoint、Wordファイルをブラウザで直接表示するのに便利です。

## 機能

- `.xls`, `.xlsx`, `.ppt`, `.pptx`, `.doc`, `.docx` 形式のOfficeファイルを検出
- Office Online Viewerで自動的に開く
- Chromeブラウザでの閲覧体験を向上

## インストール方法

1. このリポジトリをクローンまたはダウンロードします。
2. Chromeブラウザを開き、`chrome://extensions` にアクセスします。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックします。
5. `manifest.json` があるディレクトリを選択します。

## 使用方法

拡張機能がインストールされると、対応するOfficeファイルへのリンクが検出されるたびに、Office Online Viewerで自動的に開きます。特別な設定は必要ありません。

## 開発者情報

- `background.js`: OfficeファイルのURLを検出し、Office Online Viewerで開くようにリダイレクトするスクリプト
- `manifest.json`: 拡張機能の設定ファイル

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は `LICENSE` ファイルをご覧ください。
