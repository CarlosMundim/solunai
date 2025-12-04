'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DocIntelPage() {
  const features = [
    {
      icon: '👁️',
      title: 'OCR + 文書理解',
      description: '日本語文書を高精度で読み取り、単なるテキスト抽出ではなく文脈を理解。手書き、旧字体、複雑なレイアウトにも対応。'
    },
    {
      icon: '📊',
      title: 'データ抽出',
      description: '請求書、契約書、申請書などから構造化データを自動抽出。フォーマットが異なっても柔軟に対応。'
    },
    {
      icon: '🔄',
      title: 'ワークフロー自動化',
      description: '文書の分類、ルーティング、承認フローを自動化。既存システムとのAPI連携も可能。'
    },
    {
      icon: '🔍',
      title: 'セマンティック検索',
      description: 'キーワードマッチングではなく意味理解に基づく検索。「昨年の契約更新に関する書類」のような自然言語クエリに対応。'
    },
    {
      icon: '🔒',
      title: 'セキュリティ',
      description: '日本国内データレジデンシー、エンドツーエンド暗号化、アクセスログ、ISMS対応可能。'
    },
    {
      icon: '🇯🇵',
      title: '日本語最適化',
      description: '日本語特有の文書形式（縦書き、元号表記、印鑑など）を正確に処理。'
    }
  ];

  const useCases = [
    {
      title: '経理・財務',
      description: '請求書処理の自動化',
      examples: ['請求書データ抽出', '経費精算書処理', '支払い予定表作成']
    },
    {
      title: '法務・契約',
      description: '契約書管理の効率化',
      examples: ['契約条項の抽出', '更新期限アラート', 'リスク分析']
    },
    {
      title: '人事・総務',
      description: '申請書類の処理',
      examples: ['入社書類処理', '各種申請書自動分類', '承認ワークフロー']
    },
    {
      title: '製造・品質',
      description: '技術文書管理',
      examples: ['検査報告書分析', '仕様書検索', '変更履歴追跡']
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-slate-700 rounded-full text-slate-300 text-sm font-medium mb-6">
            KODA PRODUCT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            KODA DocIntel
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Intelligent Document Processing
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            日本語ビジネス文書をAIが読み取り、理解し、処理を自動化。
            手作業のデータ入力から解放され、本質的な業務に集中。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              資料請求
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            紙とPDFに埋もれていませんか？
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-4">現状の課題</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>手作業でのデータ入力に膨大な時間</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>入力ミスによる後工程での手戻り</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>過去の文書が見つからない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>フォーマットがバラバラで統合できない</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-green-600 mb-4">DocIntel導入後</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>文書処理時間を80%削減</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ヒューマンエラーをほぼゼロに</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>必要な情報を数秒で検索</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>構造化データとして統合活用</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            機能
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            活用シーン
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-blue-600 text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exIdx) => (
                    <li key={exIdx} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            仕組み
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">文書取り込み</h3>
                <p className="text-slate-600">スキャン、メール添付、クラウドストレージから自動取り込み。PDF、画像、Word、Excelなど多形式に対応。</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">AI解析</h3>
                <p className="text-slate-600">OCRでテキスト抽出後、AIが文書タイプを分類し、必要なデータを構造化して抽出。</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">確認・修正</h3>
                <p className="text-slate-600">必要に応じて人間が確認・修正。AIは学習を続け、精度が向上。</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">システム連携</h3>
                <p className="text-slate-600">抽出データを会計システム、ERPなどに自動連携。APIで任意のシステムと接続可能。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            料金
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">スターター</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                ¥50,000<span className="text-sm text-slate-500">/月</span>
              </p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>• 500文書/月</li>
                <li>• 基本OCR</li>
                <li>• 3テンプレート</li>
              </ul>
              <Link href="/contact" className="block text-center py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50">
                お問い合わせ
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-500">
              <div className="text-xs font-bold text-blue-600 mb-2">POPULAR</div>
              <h3 className="font-bold text-slate-900 mb-2">ビジネス</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                ¥100,000<span className="text-sm text-slate-500">/月</span>
              </p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>• 2,000文書/月</li>
                <li>• 高精度OCR</li>
                <li>• 無制限テンプレート</li>
                <li>• API連携</li>
              </ul>
              <Link href="/contact" className="block text-center py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                お問い合わせ
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">エンタープライズ</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                ¥150,000<span className="text-sm text-slate-500">/月〜</span>
              </p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>• 無制限文書</li>
                <li>• カスタムモデル</li>
                <li>• オンプレミス対応</li>
                <li>• 専任サポート</li>
              </ul>
              <Link href="/contact" className="block text-center py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            文書処理を自動化しませんか？
          </h2>
          <p className="text-slate-300 mb-8">
            お客様の文書サンプルで無料デモを実施します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              他の製品を見る
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
