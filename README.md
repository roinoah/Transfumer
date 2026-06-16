# カリフォルニア・コミカレ編入情報サイト (California Community College Transfer Guide)

このプロジェクトは、カリフォルニア州のコミュニティカレッジ（California Community Colleges: CCC）から、UC（カリフォルニア大学）やCSU（カリフォルニア州立大学）をはじめとする4年制大学への編入を目指す学生に向けて、必要な情報をまとめたウェブサイト「Transfumer」です。

## プロジェクトの目的

カリフォルニアのコミュニティカレッジ（CCC）からの編入プロセス（IGETCの要件、専攻別の必修科目（Major Prep）、Assist.orgの活用法など）に関する複雑な情報を分かりやすく整理し、編入を目指す学生が迷わずスムーズに準備を進められるようサポートすることを目的としています。

## サイトの主なコンテンツ

本サイトでは、編入に向けて以下の情報を網羅的に提供します。

- **必修科目について**: 編入先の大学・専攻によって異なる必修科目の情報。Major Requirement（専攻要件）の内容は、Assist.orgから情報を取得して構成します。
- **編入に必要なクラス**: 一般教養科目（GE）や専攻準備科目（Major Prep）のリスト
- **履修モデル・クラスの選び方**: いつ、どのクラスを取るべきか（履修計画）のガイダンス
- **編入条件・要件**: 必要なGPAの基準、移行可能な単位数、出願に必要なその他の条件など

## 技術スタック (Tech Stack)

- **コア/フレームワーク**: Next.js (App Router), React, TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **開発アシスタント**: Google Anti-gravity

## 開発環境のセットアップ (Getting Started)

まずは開発用サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認します。

`src/app/page.tsx` を編集して開発を進めることができます。

## 関連ドキュメント
- [PRD.md](file:///Users/risaohara/sideproject/Transfumer/PRD.md) - プロジェクトの製品要件定義書 (Product Requirements Document)
- [Meetings.md](file:///Users/risaohara/sideproject/Transfumer/Meetings.md) - 定例会議事録
