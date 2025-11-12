// 特定商取引法に基づく表記 (Specified Commercial Transactions Act Page)
// Required by Japanese law for any business selling services online
// Based on: 特定商取引に関する法律 (Act on Specified Commercial Transactions)
// Created: November 12, 2025

import React from 'react';

export default function TokuteiShoutorihiki() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Match your existing site header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">Solunai</a>
          <nav className="flex gap-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">ホーム</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">会社概要</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Japanese Version */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
          <p className="text-sm text-gray-600 mb-8">Specified Commercial Transactions Act Disclosure</p>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              特定商取引に関する法律（昭和51年法律第57号）に基づき、以下のとおり表記します。
            </p>
          </div>

          {/* Article 1: Business Information (事業者情報) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第1条 事業者情報
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">事業者名:</p>
                <p className="md:col-span-2 text-gray-700">Solunai Systems株式会社</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">代表者:</p>
                <p className="md:col-span-2 text-gray-700">古屋智夫（代表取締役）</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">所在地:</p>
                <p className="md:col-span-2 text-gray-700">
                  〒222-0033<br />
                  神奈川県横浜市港北区新横浜2-6-20<br />
                  WISE NEXT 新横浜 4F
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">電話番号:</p>
                <p className="md:col-span-2 text-gray-700">045-285-9480</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">メールアドレス:</p>
                <p className="md:col-span-2 text-gray-700">info@solunai.co.jp</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">ウェブサイト:</p>
                <p className="md:col-span-2 text-blue-600">
                  <a href="https://solunai-website-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    https://solunai-website-two.vercel.app/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Article 2: Services Provided (販売サービス) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第2条 販売サービス
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 font-semibold">当社が提供するサービス:</p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. AIソリューション開発・実装サービス</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>デジタルツイン技術の開発・実装</li>
                  <li>コンピュータビジョンによる品質管理システム</li>
                  <li>予知保全システムの構築</li>
                  <li>生産最適化AIソリューション</li>
                  <li>製造業向けカスタムAIソリューション</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. グローバルエンジニアリングサービス</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>WorldEmp B.V.（オランダ）とのパートナーシップによるグローバル人材配置</li>
                  <li>AIエンジニア、データサイエンティスト、製造業ITスペシャリストの提供</li>
                  <li>プロジェクトベースおよび契約ベースのエンジニアリング支援</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. コンサルティングサービス</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>製造業DX戦略コンサルティング</li>
                  <li>AI導入フィージビリティスタディ</li>
                  <li>デジタルツイン実装計画策定</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 3: Pricing (販売価格) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第3条 販売価格
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                サービス価格は、プロジェクトの規模、複雑さ、期間により異なります。<br />
                すべての価格は個別見積もりベースで決定されます。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">【参考価格帯】</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>パイロットプロジェクト:</strong> ¥3,000,000〜¥8,000,000（1-3ヶ月）</li>
                    <li><strong>フルスケール実装:</strong> ¥15,000,000〜¥50,000,000（6-12ヶ月）</li>
                    <li><strong>グローバルエンジニア配置:</strong> ¥500,000〜¥1,500,000/月/人</li>
                    <li><strong>コンサルティング:</strong> ¥300,000〜¥800,000/日</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">【価格に含まれるもの】</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>プロジェクト管理費</li>
                    <li>技術開発費</li>
                    <li>実装・導入支援費</li>
                    <li>トレーニング費用</li>
                    <li>6ヶ月間の保守サポート（フルスケールのみ）</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">【別途費用】</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>消費税（10%）</li>
                    <li>ハードウェア購入費（お客様負担）</li>
                    <li>クラウドインフラ費用（従量課金、お客様負担）</li>
                    <li>第三者ソフトウェアライセンス費（該当する場合）</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>注意事項:</strong> 上記は参考価格です。正確な価格は、お客様の要件を詳細にヒアリング後、個別見積書にて提示いたします。
                </p>
              </div>
            </div>
          </div>

          {/* Article 4: Payment Methods (支払方法) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第4条 支払方法
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">【対応支払方法】</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>銀行振込:</strong> 請求書発行後、指定銀行口座へのお振込み</li>
                  <li><strong>クレジットカード:</strong> VISA、Mastercard（¥5,000,000未満の取引）</li>
                  <li><strong>分割払い:</strong> プロジェクト総額¥10,000,000以上の場合、相談に応じます</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【振込手数料】</h4>
                <p className="text-gray-700">お客様負担</p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【振込先銀行口座】</h4>
                <p className="text-gray-700">契約締結後、個別にご案内いたします。</p>
              </div>
            </div>
          </div>

          {/* Article 5: Payment Timing (支払時期) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第5条 支払時期
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">【標準支払スケジュール】</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>契約時:</strong> 契約金額の50%（前金）</li>
                  <li><strong>成果物納品時:</strong> 契約金額の50%（残金）</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【マイルストーン型支払い】</h4>
                <p className="text-gray-700 mb-2">長期プロジェクト（6ヶ月以上）の場合:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>契約時: 30%</li>
                  <li>中間マイルストーン: 40%</li>
                  <li>最終納品時: 30%</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【支払期限】</h4>
                <p className="text-gray-700">請求書発行後30日以内</p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【遅延損害金】</h4>
                <p className="text-gray-700">支払期限を過ぎた場合、年利14.6%の遅延損害金が発生します（商法第514条）。</p>
              </div>
            </div>
          </div>

          {/* Article 6: Service Delivery Timing (サービス提供時期) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第6条 サービス提供時期
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                サービス提供開始時期および完了時期は、個別契約書に明記されます。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">【標準スケジュール】</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>パイロットプロジェクト:</strong> 契約締結後2-6週間で開始、1-3ヶ月で完了</li>
                    <li><strong>フルスケール実装:</strong> 契約締結後4-8週間で開始、6-12ヶ月で完了</li>
                    <li><strong>グローバルエンジニア配置:</strong> 要件確定後2-6週間で配置（簡易案件）、8-12週間（複雑案件）</li>
                  </ul>
                </div>

                <div className="border-t pt-4 bg-yellow-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">【注意事項】</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                    <li>スケジュールは、お客様の要件、既存システムの複雑さ、社内承認プロセスにより変動します。</li>
                    <li>お客様側の情報提供遅延、仕様変更がある場合、スケジュールは延長されます。</li>
                    <li>天災、不可抗力、パンデミック等による遅延の責任は負いかねます。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Article 7: Cancellation Policy (キャンセル・返金ポリシー) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第7条 キャンセル・返金ポリシー
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【契約前のキャンセル】</h4>
                <p className="text-gray-700">
                  契約書締結前であれば、無料でキャンセル可能です。<br />
                  見積書提示後のキャンセル料は発生しません。
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【契約後のキャンセル】</h4>
                <p className="text-gray-700 mb-3">契約締結後のキャンセルには、以下のキャンセル料が発生します:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>サービス開始前:</strong> 契約金額の20%</li>
                  <li><strong>サービス開始後〜25%完了:</strong> 契約金額の50%</li>
                  <li><strong>26%〜50%完了:</strong> 契約金額の70%</li>
                  <li><strong>51%〜75%完了:</strong> 契約金額の90%</li>
                  <li><strong>76%以上完了:</strong> 契約金額の100%（返金なし）</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【返金方法】</h4>
                <p className="text-gray-700 mb-2">
                  返金が発生する場合、キャンセル申請受理後30日以内に、お客様指定の銀行口座へ振込みます。<br />
                  振込手数料はお客様負担となります。
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【当社都合のキャンセル】</h4>
                <p className="text-gray-700">
                  当社都合によりサービス提供が困難になった場合、全額返金いたします。<br />
                  また、お客様に発生した直接的損害についても、契約金額を上限として補償いたします。
                </p>
              </div>
            </div>
          </div>

          {/* Article 8: Exchange and Returns (交換・返品) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第8条 交換・返品
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">
                当社が提供するのはサービス（役務提供）であり、物品の販売ではありません。<br />
                そのため、一般的な「返品」の概念は適用されません。
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【品質保証】</h4>
                <p className="text-gray-700 mb-2">
                  納品した成果物が契約仕様を満たしていない場合、無償で修正・改善を行います。
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>保証期間: 納品後6ヶ月間（フルスケールプロジェクト）</li>
                  <li>保証期間: 納品後3ヶ月間（パイロットプロジェクト）</li>
                  <li>保証範囲: 契約仕様書に明記された機能・性能</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【保証対象外】</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>お客様の要件変更による不具合</li>
                  <li>お客様の操作ミス、環境不備による問題</li>
                  <li>第三者システムとの連携不具合（当社責任範囲外）</li>
                  <li>天災、不可抗力による損害</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 9: Special Sales Conditions (特別な販売条件) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第9条 特別な販売条件
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【成功報酬型契約】</h4>
                <p className="text-gray-700 mb-2">
                  パイロットプロジェクトに限り、成功報酬型契約の提案も可能です:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>初期費用: 契約金額の30%</li>
                  <li>成功報酬: KPI達成時に残額70%</li>
                  <li>KPI未達成時: 初期費用30%のみで契約終了</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  ※ 成功報酬型契約は、KPI設定が明確な案件に限ります。
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【長期契約割引】</h4>
                <p className="text-gray-700 mb-2">
                  12ヶ月以上の長期契約の場合、以下の割引を適用します:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>12ヶ月契約: 5%割引</li>
                  <li>24ヶ月契約: 10%割引</li>
                  <li>36ヶ月契約: 15%割引</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【複数サービス同時契約割引】</h4>
                <p className="text-gray-700">
                  AIソリューション開発とグローバルエンジニア配置を同時契約の場合、総額から10%割引を適用します。
                </p>
              </div>
            </div>
          </div>

          {/* Article 10: Warranty and Liability (保証・責任) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第10条 保証・責任
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">【性能保証】</h4>
                <p className="text-gray-700 mb-2">
                  当社は、契約書に明記された仕様・性能を保証します。<br />
                  ただし、以下の免責事項があります:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>「95%品質向上」「30-50%コスト削減」等のマーケティング数値は、FBM Hudson Italianaパイロット（2024年）実績であり、すべてのお客様への保証ではありません。</li>
                  <li>実際の効果は、お客様の業種、既存システム、データ品質、運用体制により異なります。</li>
                  <li>過去の実績は将来の結果を保証するものではありません。</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【損害賠償責任の制限】</h4>
                <p className="text-gray-700 mb-2">
                  当社の責任は、以下の範囲に制限されます:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>直接損害のみ（間接損害、逸失利益は対象外）</li>
                  <li>損害賠償額の上限: 契約金額の総額</li>
                  <li>故意または重大な過失がない限り、損害賠償責任を負いません</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 11: Inquiry Contact (お問い合わせ窓口) */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              第11条 お問い合わせ窓口
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">
                本表記に関するご質問、サービスに関するお問い合わせは、以下までご連絡ください。
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">【お問い合わせ先】</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Solunai Systems株式会社</strong></p>
                  <p>〒222-0033 神奈川県横浜市港北区新横浜2-6-20 WISE NEXT 新横浜 4F</p>
                  <p><strong>電話:</strong> 045-285-9480（平日 9:00-18:00）</p>
                  <p><strong>メール:</strong> info@solunai.co.jp（24時間受付、48時間以内に返信）</p>
                  <p><strong>お問い合わせフォーム:</strong> <a href="https://solunai-website-two.vercel.app/contact" className="text-blue-600 hover:underline">https://solunai-website-two.vercel.app/contact</a></p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【営業時間】</h4>
                <p className="text-gray-700">
                  月曜日〜金曜日: 9:00-18:00（日本時間）<br />
                  土日祝日: 休業
                </p>
              </div>
            </div>
          </div>

          {/* Effective Date */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-700">
              <strong>施行日:</strong> 2025年11月12日<br />
              <strong>最終更新日:</strong> 2025年11月12日
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-4 border-gray-300 my-16"></div>

        {/* English Version */}
        <section>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Specified Commercial Transactions Act Disclosure</h1>
          <p className="text-sm text-gray-600 mb-8">特定商取引法に基づく表記</p>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              In accordance with the Act on Specified Commercial Transactions (Act No. 57 of 1976), we hereby disclose the following information.
            </p>
          </div>

          {/* Article 1: Business Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Article 1: Business Information
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Business Name:</p>
                <p className="md:col-span-2 text-gray-700">Solunai Systems K.K.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Representative:</p>
                <p className="md:col-span-2 text-gray-700">Tomoo Furuya (Representative Director)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Address:</p>
                <p className="md:col-span-2 text-gray-700">
                  WISE NEXT Shin-Yokohama 4F<br />
                  2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi<br />
                  Kanagawa 222-0033, JAPAN
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Phone:</p>
                <p className="md:col-span-2 text-gray-700">+81-45-285-9480</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Email:</p>
                <p className="md:col-span-2 text-gray-700">info@solunai.co.jp</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="font-semibold text-gray-900">Website:</p>
                <p className="md:col-span-2 text-blue-600">
                  <a href="https://solunai-website-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    https://solunai-website-two.vercel.app/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Article 2: Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Article 2: Services Provided
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 font-semibold">Services offered by Solunai Systems:</p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. AI Solution Development & Implementation</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Digital Twin technology development and implementation</li>
                  <li>Computer Vision quality management systems</li>
                  <li>Predictive maintenance system development</li>
                  <li>Production optimization AI solutions</li>
                  <li>Custom AI solutions for manufacturing industry</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Global Engineering Services</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Global talent placement through partnership with WorldEmp B.V. (Netherlands)</li>
                  <li>AI engineers, data scientists, manufacturing IT specialists</li>
                  <li>Project-based and contract-based engineering support</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Consulting Services</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Manufacturing DX strategy consulting</li>
                  <li>AI adoption feasibility studies</li>
                  <li>Digital Twin implementation planning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 3: Pricing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Article 3: Pricing
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                Service pricing varies depending on project scope, complexity, and duration.<br />
                All prices are determined on a custom quotation basis.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">【Reference Price Range】</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Pilot Projects:</strong> ¥3,000,000 - ¥8,000,000 (1-3 months)</li>
                    <li><strong>Full-Scale Implementation:</strong> ¥15,000,000 - ¥50,000,000 (6-12 months)</li>
                    <li><strong>Global Engineer Placement:</strong> ¥500,000 - ¥1,500,000/month/engineer</li>
                    <li><strong>Consulting:</strong> ¥300,000 - ¥800,000/day</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">【What's Included】</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Project management</li>
                    <li>Technical development</li>
                    <li>Implementation support</li>
                    <li>Training</li>
                    <li>6-month maintenance support (full-scale only)</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">【Additional Costs】</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Consumption tax (10%)</li>
                    <li>Hardware purchase (client responsibility)</li>
                    <li>Cloud infrastructure costs (usage-based, client responsibility)</li>
                    <li>Third-party software licenses (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Prices above are for reference only. Exact pricing will be provided in a custom quotation after detailed requirements gathering.
                </p>
              </div>
            </div>
          </div>

          {/* Article 7: Cancellation Policy */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Article 7: Cancellation & Refund Policy
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【Pre-Contract Cancellation】</h4>
                <p className="text-gray-700">
                  Free cancellation is available before contract signing.<br />
                  No cancellation fees apply after quotation submission.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【Post-Contract Cancellation】</h4>
                <p className="text-gray-700 mb-3">Cancellation fees after contract signing:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Before service starts:</strong> 20% of contract amount</li>
                  <li><strong>After start - 25% complete:</strong> 50% of contract amount</li>
                  <li><strong>26% - 50% complete:</strong> 70% of contract amount</li>
                  <li><strong>51% - 75% complete:</strong> 90% of contract amount</li>
                  <li><strong>76%+ complete:</strong> 100% of contract amount (no refund)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">【Refund Method】</h4>
                <p className="text-gray-700">
                  Refunds will be transferred to your designated bank account within 30 days of cancellation request approval.<br />
                  Transfer fees are client's responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Article 11: Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Article 11: Inquiry Contact
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">
                For questions about this disclosure or our services, please contact us:
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">【Contact Information】</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Solunai Systems K.K.</strong></p>
                  <p>WISE NEXT Shin-Yokohama 4F, 2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, JAPAN</p>
                  <p><strong>Phone:</strong> +81-45-285-9480 (Weekdays 9:00-18:00 JST)</p>
                  <p><strong>Email:</strong> info@solunai.co.jp (24/7 reception, response within 48 hours)</p>
                  <p><strong>Contact Form:</strong> <a href="https://solunai-website-two.vercel.app/contact" className="text-blue-600 hover:underline">https://solunai-website-two.vercel.app/contact</a></p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">【Business Hours】</h4>
                <p className="text-gray-700">
                  Monday - Friday: 9:00-18:00 (Japan Standard Time)<br />
                  Closed: Weekends and National Holidays
                </p>
              </div>
            </div>
          </div>

          {/* Effective Date */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-700">
              <strong>Effective Date:</strong> November 12, 2025<br />
              <strong>Last Updated:</strong> November 12, 2025
            </p>
          </div>
        </section>
      </main>

      {/* Footer - Match your existing site footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Solunai Systems</h3>
              <p className="text-sm text-gray-600">Manufacturing DX Solutions</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="/tokutei-shoutorihiki" className="hover:text-blue-600">特定商取引法表記</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-sm text-gray-600">info@solunai.co.jp</p>
              <p className="text-sm text-gray-600">045-285-9480</p>
            </div>
          </div>
          <div className="border-t mt-6 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2025 Solunai Systems K.K. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
