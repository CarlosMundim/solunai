'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './terms.css';

export default function TermsOfServiceJA() {
  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-container">
          <div className="terms-breadcrumb">
            <a href="/">ホーム</a>
            <span className="breadcrumb-separator">›</span>
            <span>利用規約</span>
          </div>
          <h1 className="terms-hero-title">利用規約</h1>
          <p className="terms-hero-subtitle">Terms of Service</p>
          <div className="terms-meta">
            <span className="terms-date">施行日: 2025年11月12日</span>
            <span className="terms-separator">|</span>
            <span className="terms-date">最終更新: 2025年11月12日</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="terms-container">
        <div className="terms-content">

          {/* Introduction */}
          <section className="terms-section terms-intro">
            <p className="terms-intro-text">
              本利用規約（以下「本規約」）は、Solunai Systems株式会社（以下「当社」）が提供するサービスの利用条件を定めるものです。
              本サービスをご利用いただく際には、本規約に同意いただいたものとみなします。
            </p>
          </section>

          {/* Article 1 */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第1条</span>
              <h2 className="terms-article-title">適用</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>本規約は、本サービスの利用に関し、当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
                <li>当社が当社ウェブサイト上で掲載する本サービス利用に関するルールは、本規約の一部を構成するものとします。</li>
                <li>本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</li>
              </ol>
            </div>
          </section>

          {/* Article 2 */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第2条</span>
              <h2 className="terms-article-title">定義</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。</p>
              <div className="terms-definitions">
                <div className="terms-definition-item">
                  <dt className="terms-definition-term">「本サービス」</dt>
                  <dd className="terms-definition-desc">
                    当社が提供する以下のサービスを指します：
                    <ul className="terms-sublist">
                      <li>AIソリューション（デジタルツイン、コンピュータビジョン、予知保全、生産最適化）</li>
                      <li>グローバルエンジニアリングサービス（WorldEmp B.V.とのパートナーシップ）</li>
                      <li>コンサルティングサービス（DX戦略、AI導入、実装計画）</li>
                    </ul>
                  </dd>
                </div>
                <div className="terms-definition-item">
                  <dt className="terms-definition-term">「ユーザー」</dt>
                  <dd className="terms-definition-desc">本サービスを利用する個人または法人を指します。</dd>
                </div>
                <div className="terms-definition-item">
                  <dt className="terms-definition-term">「コンテンツ」</dt>
                  <dd className="terms-definition-desc">本サービスにおいて提供されるデータ、情報、資料等を指します。</dd>
                </div>
              </div>
            </div>
          </section>

          {/* Article 3 */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第3条</span>
              <h2 className="terms-article-title">提供サービス</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">当社は、以下のサービスを提供します：</p>

              <div className="terms-service-card">
                <h3 className="terms-service-title">1. AIソリューション開発・実装</h3>
                <ul className="terms-list">
                  <li>デジタルツイン技術の開発・実装（NVIDIA Omniverse、Unreal Engine、Unity）</li>
                  <li>コンピュータビジョンによる品質管理システム</li>
                  <li>予知保全システムの構築</li>
                  <li>生産最適化AIソリューション</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">2. グローバルエンジニアリングサービス</h3>
                <ul className="terms-list">
                  <li>WorldEmp B.V.（オランダ）とのパートナーシップによるグローバル人材配置</li>
                  <li>AIエンジニア、データサイエンティスト、製造業ITスペシャリストの提供</li>
                  <li>プロジェクトベースおよび契約ベースのエンジニアリング支援</li>
                </ul>
                <div className="terms-highlight-box">
                  <p><strong>WorldEmpパートナーシップ:</strong> エンジニアの調達、審査、管理はWorldEmp B.V.が実施します。</p>
                </div>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">3. コンサルティングサービス</h3>
                <ul className="terms-list">
                  <li>製造業DX戦略コンサルティング</li>
                  <li>AI導入フィージビリティスタディ</li>
                  <li>デジタルツイン実装計画策定</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 4 - User Obligations */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第4条</span>
              <h2 className="terms-article-title">ユーザーの義務</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">ユーザーは、本サービスの利用にあたり、以下の事項を遵守するものとします。</p>
              <ol className="terms-list">
                <li>正確かつ最新の情報を当社に提供すること</li>
                <li>アカウント情報およびパスワードを適切に管理すること</li>
                <li>本サービスを不正な目的で使用しないこと</li>
                <li>第三者の知的財産権、プライバシー権、その他の権利を侵害しないこと</li>
                <li>法令、本規約および公序良俗に反する行為を行わないこと</li>
              </ol>
            </div>
          </section>

          {/* Article 5 - Fees and Payment */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第5条</span>
              <h2 className="terms-article-title">利用料金および支払条件</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.1 料金体系</h3>
                <p className="terms-text">サービス料金は、個別契約にて定めるものとします。</p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.2 支払条件</h3>
                <ul className="terms-list">
                  <li><strong>標準支払方法:</strong> 契約金額の50%を前金、残り50%を成果物納品時に支払う</li>
                  <li><strong>支払期限:</strong> 請求書発行後30日以内</li>
                  <li><strong>遅延損害金:</strong> 支払期限を過ぎた場合、年利14.6%の遅延損害金が発生（商法第514条）</li>
                </ul>
              </div>

              <div className="terms-warning-box">
                <svg className="terms-warning-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="terms-warning-title">重要な注意事項</p>
                  <p className="terms-warning-text">支払遅延は、プロジェクトの進行に影響を与える可能性があります。支払期限の遵守をお願いいたします。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 6 - Performance Disclaimers */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第6条</span>
              <h2 className="terms-article-title">実績に関する免責事項</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-disclaimer-box">
                <p className="terms-text"><strong>当社が公表する実績数値に関する重要な注意事項:</strong></p>
                <ul className="terms-list">
                  <li><strong>「95%品質向上」</strong>は、FBM Hudson Italianaパイロットプロジェクト（2024年）の実績に基づくものであり、すべてのお客様への保証ではありません。</li>
                  <li><strong>「30-50%コスト削減」</strong>は、日本国内採用との比較における一般的な範囲であり、実際の削減率は業種、既存システム、プロジェクト規模により異なります。</li>
                  <li>実際の効果は、お客様の業種、既存システムの複雑さ、データ品質、運用体制により大きく異なります。</li>
                  <li>過去の実績は将来の結果を保証するものではありません。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 7 - Intellectual Property */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第7条</span>
              <h2 className="terms-article-title">知的財産権</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>本サービスに関する知的財産権は、すべて当社または当社にライセンスを許諾している者に帰属します。</li>
                <li>ユーザーが本サービスを通じて提供するデータに関する知的財産権は、ユーザーに帰属します。ただし、当社はサービス提供のために必要な範囲でこれを使用できるものとします。</li>
                <li>カスタム開発における知的財産権の帰属は、個別契約にて定めるものとします。</li>
              </ol>
            </div>
          </section>

          {/* Article 8 - Limitation of Liability */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第8条</span>
              <h2 className="terms-article-title">免責および責任の制限</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>当社は、本サービスに関して、明示または黙示を問わず、いかなる保証も行いません。</li>
                <li>当社の損害賠償責任は、直接損害に限定され、間接損害、特別損害、付随的損害、結果的損害、逸失利益については責任を負いません。</li>
                <li>当社の損害賠償額の上限は、個別契約における契約金額の総額とします。</li>
                <li>当社に故意または重大な過失がない限り、当社は損害賠償責任を負いません。</li>
              </ol>
            </div>
          </section>

          {/* Article 9 - Third-Party Services */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第9条</span>
              <h2 className="terms-article-title">第三者サービス</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">本サービスには、以下の第三者サービスが含まれます：</p>

              <div className="terms-partner-card">
                <div className="terms-partner-header">
                  <h3 className="terms-partner-name">WorldEmp B.V.</h3>
                  <span className="terms-partner-badge">戦略的パートナー</span>
                </div>
                <p className="terms-partner-desc">
                  グローバルエンジニアリングサービスは、WorldEmp B.V.（オランダ）を通じて提供されます。
                  エンジニアの調達、審査、管理はWorldEmp B.V.が実施します。
                </p>
                <p className="terms-text">
                  WorldEmp B.V.が提供するサービスに起因する問題については、WorldEmp B.V.が一次的な責任を負うものとします。
                </p>
              </div>

              <div className="terms-tech-stack">
                <h4 className="terms-tech-title">技術パートナー</h4>
                <ul className="terms-tech-list">
                  <li><strong>Microsoft Azure:</strong> クラウドインフラストラクチャ</li>
                  <li><strong>NVIDIA Omniverse:</strong> デジタルツインプラットフォーム</li>
                  <li><strong>ANSYS:</strong> シミュレーション・解析ツール</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 10 - Confidentiality */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第10条</span>
              <h2 className="terms-article-title">秘密保持</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>ユーザーおよび当社は、本サービスに関連して相手方から開示された秘密情報を、厳重に管理し、相手方の事前の書面による承諾なく第三者に開示または漏洩しないものとします。</li>
                <li>前項の秘密情報には、以下の情報は含まれません：
                  <ul className="terms-sublist">
                    <li>開示を受けた時点で既に公知であった情報</li>
                    <li>開示を受けた後に自己の責めに帰すべき事由によらず公知となった情報</li>
                    <li>正当な権限を有する第三者から適法に取得した情報</li>
                    <li>開示を受けた情報によらず独自に開発した情報</li>
                  </ul>
                </li>
                <li>本条の義務は、本契約終了後5年間継続するものとします。</li>
              </ol>
            </div>
          </section>

          {/* Article 11 - Term and Termination */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第11条</span>
              <h2 className="terms-article-title">契約期間および解除</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>個別契約の期間は、個別契約にて定めるものとします。</li>
                <li>当社またはユーザーは、相手方が本規約に違反した場合、30日間の是正期間を設けた上で、書面による通知により本契約を解除することができます。</li>
                <li>前項にかかわらず、相手方が重大な違反を行った場合、当社またはユーザーは、直ちに本契約を解除することができます。</li>
              </ol>
            </div>
          </section>

          {/* Article 12 - Governing Law */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第12条</span>
              <h2 className="terms-article-title">準拠法および管轄裁判所</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>本規約の準拠法は日本法とします。</li>
                <li>本規約に関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                <li>紛争が生じた場合、当事者は誠実に協議し、円満な解決に努めるものとします。</li>
              </ol>
            </div>
          </section>

          {/* Article 13 - Changes to Terms */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">第13条</span>
              <h2 className="terms-article-title">規約の変更</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>当社は、必要に応じて本規約を変更することができます。</li>
                <li>本規約を変更する場合、変更後の本規約の施行時期および内容を当社ウェブサイト上での掲示その他の適切な方法により周知し、またはユーザーに通知します。</li>
                <li>変更後の本規約は、当社が別途定める場合を除いて、当社ウェブサイト上に表示した時点より効力を生じるものとします。</li>
              </ol>
            </div>
          </section>

          {/* Contact Information */}
          <section className="terms-section terms-contact">
            <div className="terms-contact-header">
              <h2 className="terms-contact-title">お問い合わせ</h2>
              <p className="terms-contact-subtitle">本規約に関するご質問・ご不明点がございましたら、以下までご連絡ください。</p>
            </div>
            <div className="terms-contact-card">
              <div className="terms-contact-row">
                <span className="terms-contact-label">事業者名</span>
                <span className="terms-contact-value">Solunai Systems株式会社</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">代表者</span>
                <span className="terms-contact-value">カルロス・マグノ・フレイタス・ムンディム（CTO）</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">所在地</span>
                <span className="terms-contact-value">
                  〒222-0033<br />
                  神奈川県横浜市港北区新横浜2-6-20<br />
                  WISE NEXT 新横浜 4F
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">電話番号</span>
                <span className="terms-contact-value">045-285-9480</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">メール</span>
                <span className="terms-contact-value">
                  <a href="mailto:info@solunai.co.jp">info@solunai.co.jp</a>
                </span>
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <section className="terms-effective-date">
            <p><strong>施行日:</strong> 2025年11月12日</p>
            <p><strong>最終更新:</strong> 2025年11月12日</p>
          </section>

        </div>
      </div>

      <Footer lang="ja" />
    </main>
  );
}
