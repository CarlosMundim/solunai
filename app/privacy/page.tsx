// Privacy Policy Page - Compliant with Japanese APPI Law (個人情報保護法)
// File: src/pages/privacy.tsx

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Use your existing header component */}
      <header className="border-b">
        {/* Your existing header/nav */}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Japanese Version */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-gray-600 mb-8">最終更新日: 2025年11月13日</p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. 基本方針</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Solunai Systems株式会社（以下「当社」）は、個人情報保護法（個人情報の保護に関する法律）を遵守し、
              お客様の個人情報を適切に取り扱います。本プライバシーポリシーは、当社がどのように個人情報を収集、
              使用、管理、保護するかを説明します。
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. 事業者情報</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>事業者名:</strong> Solunai Systems株式会社（Solunai Systems K.K.）</p>
              <p className="mb-2"><strong>代表者:</strong> カルロス・マグノ・フレイタス・ムンディム</p>
              <p className="mb-2"><strong>所在地:</strong> 〒222-0033 神奈川県横浜市港北区新横浜2-6-20 WISE NEXT 新横浜 4F</p>
              <p className="mb-2"><strong>電話番号:</strong> 045-285-9480</p>
              <p className="mb-2"><strong>メールアドレス:</strong> privacy@solunai.co.jp</p>
              <p className="mb-2"><strong>個人情報保護管理者:</strong> カルロス・ムンディム（最高技術責任者）</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. 収集する個人情報</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.1 お客様から直接取得する情報</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>氏名、会社名、役職</li>
              <li>メールアドレス、電話番号</li>
              <li>所在地（会社住所）</li>
              <li>業種、企業規模、従業員数</li>
              <li>お問い合わせ内容、相談内容</li>
              <li>その他、フォーム等を通じてご提供いただく情報</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 自動的に収集される情報</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IPアドレス、ブラウザの種類、デバイス情報</li>
              <li>閲覧ページ、滞在時間、アクセス日時</li>
              <li>参照元URL、検索キーワード</li>
              <li>Cookie及び類似の技術により収集される情報</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. 個人情報の利用目的</h2>
            <p className="text-gray-700 mb-4">
              当社は、個人情報保護法第18条に基づき、以下の目的で個人情報を利用します:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>お問い合わせ、ご相談への対応</li>
              <li>お見積もり、提案書の作成・提供</li>
              <li>サービスの提供、契約の履行</li>
              <li>製品・サービスに関する情報提供、マーケティング活動</li>
              <li>ウェブサイトおよびサービスの改善、分析</li>
              <li>アフターサポート、問い合わせ対応</li>
              <li>統計データの作成（個人を特定できない形式）</li>
              <li>法令に基づく義務の履行</li>
            </ol>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. 個人情報の第三者提供</h2>

            <h3 className="text-xl font-semibold mb-3">5.1 提供先</h3>
            <p className="text-gray-700 mb-4">
              当社は、以下の場合を除き、お客様の同意なく第三者に個人情報を提供しません:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">【業務委託先】</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>WorldEmp B.V.（オランダ）</strong>
                  <br />
                  <span className="text-sm">提供する情報: プロジェクト要件、技術仕様、連絡先情報</span>
                  <br />
                  <span className="text-sm">提供目的: グローバルエンジニアリングサービスの提供</span>
                </li>
                <li>
                  <strong>クラウドサービスプロバイダー（Microsoft Azure、AWS等）</strong>
                  <br />
                  <span className="text-sm">提供する情報: サービス利用に必要な情報</span>
                  <br />
                  <span className="text-sm">提供目的: システム運用、データ保管</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">5.2 法令に基づく開示</h3>
            <p className="text-gray-700 mb-4">
              以下の場合、法令に基づき個人情報を開示することがあります:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>法令に基づく開示要請がある場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成のために必要な場合</li>
              <li>国の機関等への協力が必要な場合</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 第三国への提供</h3>
            <p className="text-gray-700 mb-4">
              WorldEmp B.V.（オランダ）への個人データ提供については、個人情報保護法第28条に基づき、
              以下の措置を講じています:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>EU一般データ保護規則（GDPR）に準拠した契約締結</li>
              <li>適切な安全管理措置の実施</li>
              <li>お客様の同意取得（必要な場合）</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. 個人情報の安全管理措置</h2>
            <p className="text-gray-700 mb-4">
              当社は、個人情報保護法第23条に基づき、以下の安全管理措置を実施しています:
            </p>

            <h3 className="text-xl font-semibold mb-3">6.1 組織的安全管理措置</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>個人情報保護管理者の設置</li>
              <li>個人情報取扱規程の策定</li>
              <li>従業員への教育・研修の実施</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.2 技術的安全管理措置</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSL/TLS暗号化通信の使用</li>
              <li>ファイアウォール、ウイルス対策ソフトの導入</li>
              <li>アクセス制御、認証システムの導入</li>
              <li>定期的なセキュリティ監査</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.3 物理的安全管理措置</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>入退室管理の実施</li>
              <li>個人情報を含む書類の施錠管理</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. 個人情報の保存期間</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">情報の種類</th>
                    <th className="border border-gray-300 px-4 py-2">保存期間</th>
                    <th className="border border-gray-300 px-4 py-2">根拠</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">お問い合わせ情報</td>
                    <td className="border border-gray-300 px-4 py-2">相談終了後2年</td>
                    <td className="border border-gray-300 px-4 py-2">業務上の必要性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">契約・取引情報</td>
                    <td className="border border-gray-300 px-4 py-2">取引終了後7年</td>
                    <td className="border border-gray-300 px-4 py-2">税法（法人税法施行規則）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">マーケティング情報</td>
                    <td className="border border-gray-300 px-4 py-2">配信停止依頼まで</td>
                    <td className="border border-gray-300 px-4 py-2">お客様の同意に基づく</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">アクセスログ</td>
                    <td className="border border-gray-300 px-4 py-2">6ヶ月</td>
                    <td className="border border-gray-300 px-4 py-2">セキュリティ対策</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. ご本人の権利（開示等の請求）</h2>
            <p className="text-gray-700 mb-4">
              個人情報保護法第33条〜第39条に基づき、お客様は以下の権利を有します:
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg space-y-3">
              <div>
                <strong className="text-lg">1. 開示請求</strong>
                <p className="text-gray-700">当社が保有するお客様の個人情報の開示を請求できます</p>
              </div>
              <div>
                <strong className="text-lg">2. 訂正・追加・削除請求</strong>
                <p className="text-gray-700">個人情報の内容が事実でない場合、訂正等を請求できます</p>
              </div>
              <div>
                <strong className="text-lg">3. 利用停止・消去請求</strong>
                <p className="text-gray-700">利用目的を超えた取扱いや不正取得された場合、利用停止等を請求できます</p>
              </div>
              <div>
                <strong className="text-lg">4. 第三者提供の停止請求</strong>
                <p className="text-gray-700">不正に第三者提供された場合、停止を請求できます</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">請求方法</h3>
            <p className="text-gray-700 mb-4">
              上記の権利を行使される場合は、以下の連絡先までご連絡ください:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>メールアドレス:</strong> privacy@solunai.co.jp</p>
              <p className="mb-2"><strong>電話番号:</strong> 045-285-9480</p>
              <p className="mb-2"><strong>受付時間:</strong> 平日 9:00〜17:00</p>
              <p className="text-sm text-gray-600 mt-4">
                ※ご本人確認のため、身分証明書のコピーをご提出いただく場合があります<br />
                ※開示請求には、手数料（1,000円）をいただく場合があります
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Cookie（クッキー）の使用</h2>

            <h3 className="text-xl font-semibold mb-3">9.1 Cookieとは</h3>
            <p className="text-gray-700 mb-4">
              Cookieとは、ウェブサイトがお客様のコンピューターに送信する小さなテキストファイルです。
              Cookieを使用することで、ウェブサイトはお客様の訪問情報を記憶できます。
            </p>

            <h3 className="text-xl font-semibold mb-3">9.2 使用目的</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>ウェブサイトの機能とユーザー体験の向上</li>
              <li>アクセス解析（Google Analytics等の使用）</li>
              <li>お客様の設定や言語選択の記憶</li>
              <li>広告配信の最適化</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">9.3 Cookieの管理</h3>
            <p className="text-gray-700 mb-4">
              ブラウザの設定により、Cookieを無効化または削除できます。ただし、Cookieを無効にすると、
              一部のサービスが利用できなくなる場合があります。
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. 苦情・相談窓口</h2>

            <h3 className="text-xl font-semibold mb-3">10.1 当社窓口</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-2"><strong>Solunai Systems株式会社 個人情報保護相談窓口</strong></p>
              <p className="mb-2">〒222-0033 神奈川県横浜市港北区新横浜2-6-20 WISE NEXT 新横浜 4F</p>
              <p className="mb-2">メール: privacy@solunai.co.jp</p>
              <p className="mb-2">電話: 045-285-9480（平日 9:00〜17:00）</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">10.2 認定個人情報保護団体</h3>
            <p className="text-gray-700 mb-4">
              当社が加入する認定個人情報保護団体はありません。
            </p>

            <h3 className="text-xl font-semibold mb-3">10.3 監督機関</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>個人情報保護委員会</strong></p>
              <p className="mb-2">〒100-0013 東京都千代田区霞が関3-2-1 霞が関コモンゲート西館32階</p>
              <p className="mb-2">電話: 03-6457-9680（代表）</p>
              <p className="mb-2">ウェブサイト: <a href="https://www.ppc.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.ppc.go.jp/</a></p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 mb-4">
              当社は、法令の改正、サービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
            <p className="text-gray-700">
              重要な変更の場合は、ウェブサイト上で目立つ方法で通知いたします。
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. お問い合わせ</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold mb-4">本プライバシーポリシーに関するお問い合わせは:</p>
              <p className="mb-2"><strong>Solunai Systems株式会社</strong></p>
              <p className="mb-2">個人情報保護管理者: カルロス・マグノ・フレイタス・ムンディム（CTO）</p>
              <p className="mb-2">〒222-0033 神奈川県横浜市港北区新横浜2-6-20 WISE NEXT 新横浜 4F</p>
              <p className="mb-2">メール: privacy@solunai.co.jp</p>
              <p className="mb-2">電話: 045-285-9480</p>
            </div>
          </div>

          <div className="border-t pt-6 text-center text-gray-600">
            <p>制定日: 2025年11月13日</p>
            <p>最終更新日: 2025年11月13日</p>
            <p className="mt-4">Solunai Systems株式会社</p>
            <p>代表取締役: カルロス・マグノ・フレイタス・ムンディム</p>
          </div>
        </section>

        {/* English Version */}
        <section className="border-t pt-16">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 13, 2025</p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Basic Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Solunai Systems K.K. ("we," "our," or "the Company") complies with the Act on the Protection of Personal Information (APPI)
              and handles your personal information appropriately. This Privacy Policy explains how we collect, use, manage, and protect personal information.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Company Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Company Name:</strong> Solunai Systems K.K.</p>
              <p className="mb-2"><strong>Representative:</strong> Carlos Magno Freitas Mundim</p>
              <p className="mb-2"><strong>Address:</strong> WISE NEXT Shin-Yokohama 4F, 2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan</p>
              <p className="mb-2"><strong>Phone:</strong> 045-285-9480</p>
              <p className="mb-2"><strong>Email:</strong> privacy@solunai.co.jp</p>
              <p className="mb-2"><strong>Personal Information Protection Manager:</strong> Carlos Mundim (CTO)</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Personal Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Information Directly Provided by You</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name, company name, job title</li>
              <li>Email address, phone number</li>
              <li>Business address</li>
              <li>Industry, company size, number of employees</li>
              <li>Inquiry details, consultation content</li>
              <li>Other information provided through forms</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Purpose of Use</h2>
            <p className="text-gray-700 mb-4">
              In accordance with Article 18 of APPI, we use personal information for the following purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Responding to inquiries and consultations</li>
              <li>Providing quotes and proposals</li>
              <li>Providing services and fulfilling contracts</li>
              <li>Marketing activities and information provision</li>
              <li>Website and service improvement and analysis</li>
              <li>Legal compliance obligations</li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under Articles 33-39 of APPI, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to request disclosure of personal information</li>
              <li>Right to request correction or deletion</li>
              <li>Right to request suspension of use</li>
              <li>Right to request suspension of third-party provision</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise your rights, contact: <strong>privacy@solunai.co.jp</strong>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Contact for Inquiries</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Solunai Systems K.K.</strong></p>
              <p className="mb-2">Personal Information Protection Manager: Carlos Mundim (CTO)</p>
              <p className="mb-2">WISE NEXT Shin-Yokohama 4F, 2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan</p>
              <p className="mb-2">Email: privacy@solunai.co.jp</p>
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

      {/* Footer - Use your existing footer component */}
      <footer className="border-t mt-16">
        {/* Your existing footer */}
      </footer>
    </div>
  );
}
