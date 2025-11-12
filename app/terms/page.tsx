// Terms of Service Page - Compliant with Japanese Commercial Law
// File: src/pages/terms.tsx

import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        {/* Your existing header/nav */}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Japanese Version */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">利用規約</h1>
          <p className="text-gray-600 mb-8">最終更新日: 2025年11月13日</p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1. 本利用規約（以下「本規約」）は、Solunai Systems株式会社（以下「当社」）が提供するウェブサイト
              （solunai.co.jp及び関連ドメイン、以下「本サイト」）およびサービスの利用条件を定めるものです。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              2. 本サイトをご利用いただくことにより、お客様は本規約に同意したものとみなされます。
            </p>
            <p className="text-gray-700 leading-relaxed">
              3. 本規約に同意いただけない場合は、本サイトのご利用をお控えください。
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第2条（定義）</h2>
            <p className="text-gray-700 mb-4">本規約において使用する用語の定義は、以下のとおりとします。</p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><strong>「本サービス」</strong>: 当社が提供するすべてのサービス（デジタルツイン技術、AI品質管理、予知保全、生産最適化、グローバルエンジニアリングサービス等）を指します。</li>
              <li><strong>「利用者」</strong>: 本サイトにアクセスし、本サービスを利用するすべての個人または法人を指します。</li>
              <li><strong>「個別契約」</strong>: 当社と利用者の間で別途締結される、個別のサービス提供契約を指します。</li>
              <li><strong>「知的財産権」</strong>: 著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます）を指します。</li>
            </ol>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第3条（サービスの内容）</h2>
            <p className="text-gray-700 mb-4">当社は、以下のサービスを提供します:</p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <strong>AIソリューション</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>デジタルツイン技術の提供</li>
                  <li>コンピュータビジョンによる品質管理システム</li>
                  <li>予知保全システムの構築</li>
                  <li>生産最適化ソリューション</li>
                </ul>
              </li>
              <li>
                <strong>グローバルエンジニアリングサービス</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>WorldEmp B.V.とのパートナーシップによるエンジニア人材の提供</li>
                  <li>スタッフ増強サービス</li>
                  <li>プロジェクトベースのエンジニア配置</li>
                </ul>
              </li>
              <li>
                <strong>コンサルティングサービス</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>製造業向けデジタルトランスフォーメーション（DX）アドバイザリー</li>
                  <li>技術導入支援</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第4条（利用資格）</h2>
            <p className="text-gray-700 mb-4">
              1. 本サービスは、日本国内の法人、個人事業主、およびそれらの代表者・従業員を対象としています。
            </p>
            <p className="text-gray-700 mb-4">
              2. 利用者は、18歳以上であり、かつ法人を代表する権限または法人との契約を締結する権限を有していることを表明し保証するものとします。
            </p>
            <p className="text-gray-700">
              3. 当社は、利用者が以下のいずれかに該当する場合、サービスの提供を拒否することがあります:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>反社会的勢力に該当する場合</li>
              <li>過去に本規約違反により利用停止処分を受けた場合</li>
              <li>虚偽の情報を提供した場合</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第5条（利用者の義務）</h2>
            <p className="text-gray-700 mb-4">利用者は、以下の行為を行ってはなりません:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って本サービスを利用する行為</li>
              <li>当社のサービスの他の利用者または第三者に不利益、損害、不快感を与える行為</li>
              <li>当社の書面による事前の承諾なく、本サービスの全部または一部を転載、複製、修正、頒布、公開する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第6条（知的財産権）</h2>
            <p className="text-gray-700 mb-4">
              1. 本サイトおよび本サービスに関する知的財産権は、すべて当社または当社にライセンスを許諾している第三者に帰属します。
            </p>
            <p className="text-gray-700 mb-4">
              2. 利用者は、本規約に基づき当社が許諾する範囲内でのみ本サービスを利用することができ、当社の事前の書面による承諾なく、以下の行為を行ってはなりません:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>本サイトのコンテンツを複製、修正、翻案、配布すること</li>
              <li>リバースエンジニアリング、逆コンパイル、逆アセンブルを行うこと</li>
              <li>商標、ロゴ、著作権表示を削除または改変すること</li>
            </ul>
            <p className="text-gray-700 mt-4">
              3. 利用者が当社に提供した情報、データ、コンテンツについては、利用者が知的財産権を保持します。ただし、当社は本サービスの提供のために必要な範囲で、これらを使用できるものとします。
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第7条（個別契約）</h2>
            <p className="text-gray-700 mb-4">
              1. 本規約は、本サイトの閲覧および初回の相談・お問い合わせに適用されます。
            </p>
            <p className="text-gray-700 mb-4">
              2. 実際のサービス提供（プロジェクト実施、エンジニア配置等）には、当社と利用者との間で別途個別契約を締結する必要があります。
            </p>
            <p className="text-gray-700 mb-4">
              3. 個別契約と本規約の内容が矛盾する場合は、個別契約が優先されます。
            </p>
            <p className="text-gray-700">
              4. 本サイトの利用および初回相談は、当社と利用者との間に契約関係を生じさせるものではありません。
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第8条（料金および支払）</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">無料サービス</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>本サイトの閲覧</li>
              <li>初回相談（最大60分）</li>
              <li>お見積もり依頼</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">有料サービス</h3>
            <p className="text-gray-700 mb-4">
              有料サービスの料金、支払条件、支払方法は、個別契約において定めるものとします。
            </p>
            <p className="text-gray-700 mb-4">
              標準的な支払条件:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>前金: 契約金額の50%</li>
              <li>残金: 成果物納品後またはプロジェクト完了後</li>
              <li>支払期限: 請求書発行後30日以内</li>
              <li>支払遅延の場合: 年利14.6%の遅延損害金が発生します（商法第514条）</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第9条（保証の否認および免責）</h2>

            <h3 className="text-xl font-semibold mb-3">保証の否認</h3>
            <p className="text-gray-700 mb-4">
              当社は、本サービスについて、以下の事項を保証しません:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>本サービスが利用者の特定の目的に適合すること</li>
              <li>本サービスが期待される機能・正確性・有用性を有すること</li>
              <li>本サービスの利用が中断されないこと、またはエラーが発生しないこと</li>
              <li>本サービスを通じて取得する情報が正確であること</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">実績に関する注意事項</h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>ウェブサイト上の性能指標について:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>「95%品質向上」等の数値は、FBM Hudson Italianaパイロットプロジェクト（2024年）の実績に基づきます</li>
                <li>「30-50%コスト削減」は、日本国内採用と比較したグローバルエンジニア活用の一般的な範囲です</li>
                <li>実際の効果は、利用者の業種、既存システム、実装規模により異なります</li>
                <li>過去の実績は将来の結果を保証するものではありません</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第10条（損害賠償の制限）</h2>
            <p className="text-gray-700 mb-4">
              1. 当社の責めに帰すべき事由により利用者に損害が生じた場合、当社は、当該損害のうち現実に発生した直接かつ通常の損害に限り、賠償責任を負うものとします。
            </p>
            <p className="text-gray-700 mb-4">
              2. 前項の損害賠償額は、当該サービスに関して利用者が当社に支払った金額を上限とします。
            </p>
            <p className="text-gray-700 mb-4">
              3. 当社は、以下の損害について責任を負いません:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>間接損害、特別損害、結果的損害</li>
              <li>逸失利益、事業機会の喪失</li>
              <li>データの喪失</li>
              <li>代替サービスの調達費用</li>
            </ul>
            <p className="text-gray-700 mt-4">
              4. 前各項の規定は、当社の故意または重大な過失による場合には適用されません。
            </p>
            <p className="text-gray-700">
              5. 消費者契約法その他の強行法規により、本条の免責または制限が認められない場合は、当該強行法規が優先されます。
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第11条（第三者サービス）</h2>

            <h3 className="text-xl font-semibold mb-3">WorldEmp B.V.とのパートナーシップ</h3>
            <p className="text-gray-700 mb-4">
              1. グローバルエンジニアリングサービスは、当社のパートナーであるWorldEmp B.V.（オランダ）を通じて提供されます。
            </p>
            <p className="text-gray-700 mb-4">
              2. エンジニアの調達、審査、管理はWorldEmp B.V.が実施します。
            </p>
            <p className="text-gray-700">
              3. エンジニア配置に関しては、別途個別の契約条件が適用される場合があります。
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">技術パートナー</h3>
            <p className="text-gray-700">
              本サービスは、NVIDIA、Microsoft、ANSYS、Anthropic等のテクノロジーパートナーの技術を利用しています。
              これらの技術の利用は、各社の利用規約に従います。当社は、これらの第三者サービスの障害または中断について責任を負いません。
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第12条（秘密保持）</h2>
            <p className="text-gray-700 mb-4">
              1. 当社および利用者は、本サービスの利用に関連して相手方から開示された技術上または営業上の情報を秘密として扱い、相手方の書面による事前の承諾なく第三者に開示または漏洩してはなりません。
            </p>
            <p className="text-gray-700 mb-4">
              2. 前項の規定にかかわらず、以下の情報は秘密情報に該当しません:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>開示時にすでに公知であった情報</li>
              <li>開示後に受領者の責めによらず公知となった情報</li>
              <li>開示時にすでに受領者が保有していた情報</li>
              <li>第三者から秘密保持義務を負わずに正当に入手した情報</li>
              <li>法令に基づき開示が要求された情報</li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第13条（サービスの変更・中断・終了）</h2>
            <p className="text-gray-700 mb-4">
              1. 当社は、以下の場合、利用者への事前通知なく本サービスの全部または一部を変更、中断、または終了することができます:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>本サービスに関するシステムの保守、点検、修理を行う場合</li>
              <li>火災、停電、天災地変等の不可抗力により本サービスの提供が困難な場合</li>
              <li>その他、当社が必要と判断した場合</li>
            </ul>
            <p className="text-gray-700 mt-4">
              2. 当社は、前項に基づく本サービスの変更、中断、終了により利用者に生じた損害について、一切責任を負いません。
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第14条（利用停止・解除）</h2>
            <p className="text-gray-700 mb-4">
              当社は、利用者が以下のいずれかに該当する場合、事前の通知または催告なく、当該利用者による本サービスの利用を停止し、または本規約に基づく契約を解除することができます:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>料金等の支払債務の履行を遅滞した場合</li>
              <li>手形または小切手の不渡りが生じた場合</li>
              <li>差押え、仮差押え、仮処分、強制執行または競売の申立てがあった場合</li>
              <li>破産、民事再生、会社更生または特別清算の申立てがあった場合</li>
              <li>反社会的勢力に該当することが判明した場合</li>
              <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
            </ol>
          </div>

          {/* Section 15 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第15条（紛争解決）</h2>

            <h3 className="text-xl font-semibold mb-3">準拠法</h3>
            <p className="text-gray-700 mb-4">
              本規約の解釈および適用は、日本法に準拠するものとします。
            </p>

            <h3 className="text-xl font-semibold mb-3">管轄裁判所</h3>
            <p className="text-gray-700 mb-4">
              本規約または本サービスに関連して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

            <h3 className="text-xl font-semibold mb-3">協議</h3>
            <p className="text-gray-700">
              紛争が生じた場合、当事者は誠実に協議し、円満な解決を図るよう努めるものとします。
            </p>
          </div>

          {/* Section 16 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第16条（規約の変更）</h2>
            <p className="text-gray-700 mb-4">
              1. 当社は、以下の場合に、利用者の承諾を得ることなく本規約を変更できるものとします:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>本規約の変更が、利用者の一般の利益に適合するとき</li>
              <li>本規約の変更が、契約をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
            </ul>
            <p className="text-gray-700 mt-4">
              2. 当社は、本規約を変更する場合、変更後の本規約の効力発生日の1ヶ月前までに、本規約を変更する旨および変更後の本規約の内容とその効力発生日を本サイト上に表示します。
            </p>
            <p className="text-gray-700">
              3. 変更後の本規約の効力発生日以降に本サービスを利用した場合、利用者は変更後の本規約に同意したものとみなされます。
            </p>
          </div>

          {/* Section 17 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">第17条（連絡・通知）</h2>
            <p className="text-gray-700 mb-4">
              本サービスに関する問い合わせその他利用者から当社に対する連絡または通知は、当社の定める方法で行うものとします。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>お問い合わせ先:</strong></p>
              <p className="mb-2">Solunai Systems株式会社</p>
              <p className="mb-2">〒222-0033 神奈川県横浜市港北区新横浜2-6-20 WISE NEXT 新横浜 4F</p>
              <p className="mb-2">メール: legal@solunai.co.jp</p>
              <p className="mb-2">電話: 045-285-9480（平日 9:00〜17:00）</p>
            </div>
          </div>

          <div className="border-t pt-6 text-center text-gray-600">
            <p>制定日: 2025年11月13日</p>
            <p>最終更新日: 2025年11月13日</p>
            <p className="mt-4">Solunai Systems株式会社</p>
            <p>代表取締役: カルロス・マグノ・フレイタス・ムンディム</p>
          </div>
        </section>

        {/* English Version - Abbreviated */}
        <section className="border-t pt-16">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 13, 2025</p>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") govern your use of the website and services provided by Solunai Systems K.K.
              By accessing or using our Services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Services Provided</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>AI Solutions (Digital Twin, Computer Vision, Predictive Maintenance, Production Optimization)</li>
              <li>Global Engineering Services (through WorldEmp B.V. partnership)</li>
              <li>Manufacturing DX Consulting</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p className="text-gray-700">
              All intellectual property rights in the website and services belong to Solunai Systems K.K. or our licensors.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Solunai shall not be liable for indirect, incidental, special, or consequential damages.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 mb-4">
              <strong>Governing Law:</strong> Japanese law
            </p>
            <p className="text-gray-700">
              <strong>Jurisdiction:</strong> Tokyo District Court (exclusive jurisdiction)
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Solunai Systems K.K.</strong></p>
              <p className="mb-2">WISE NEXT Shin-Yokohama 4F, 2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan</p>
              <p className="mb-2">Email: legal@solunai.co.jp</p>
              <p className="mb-2">Phone: 045-285-9480</p>
            </div>
          </div>

          <div className="border-t pt-6 text-center text-gray-600">
            <p>Enacted: November 13, 2025</p>
            <p>Last Updated: November 13, 2025</p>
            <p className="mt-4">Solunai Systems K.K.</p>
            <p>Representative Director: Carlos Magno Freitas Mundim</p>
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        {/* Your existing footer */}
      </footer>
    </div>
  );
}
