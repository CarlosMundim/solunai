// components/KodaInPracticeSectionJa.tsx
import './KodaInPractice.css';

export default function KodaInPracticeSectionJa() {
  const scenarios = [
    {
      key: "reports",
      badge: "日報・報告書",
      title: "日報を「読むだけで終わらない」情報に変える",
      body: [
        "多くの現場で日報は作成されていますが、忙しくてすべてに目を通せないことも少なくありません。",
        "KODAは日報の文章をテーマごとに整理し、リスクや気づきを拾い、管理職が確認しやすい要約を作成することができます。"
      ],
      result: "読む時間を減らし、判断する時間を増やします。"
    },
    {
      key: "handover",
      badge: "引き継ぎ・属人化",
      title: "人が動く前に、業務の「知恵」を残す",
      body: [
        "ベテラン社員が異動・退職する際、その人にしか分からない業務のコツや注意点が残らないままになることがあります。",
        "KODAは手順やチェックポイント、注意事項などを整理し、次の担当者が学びやすい形にまとめることを支援します。"
      ],
      result: "引き継ぎを「一度きりのイベント」ではなく、仕組みに近づけます。"
    },
    {
      key: "training",
      badge: "教育・OJT",
      title: "新人が質問しやすい「もう一つの窓口」をつくる",
      body: [
        "新入社員は、同じ質問を何度もすることに気が引けてしまい、分からないまま進んでしまうことがあります。",
        "KODAはマニュアルやよくある質問をベースに、まず相談できる窓口として機能し、上司や先輩は判断が必要な場面に集中できるようにします。"
      ],
      result: "現場の指導負担を減らしつつ、学ぶ側の不安を軽くします。"
    }
  ];

  return (
    <section className="koda-practice-section">
      <div className="koda-practice-container">

        {/* Section Header */}
        <div className="koda-practice-header">
          <span className="koda-practice-badge">KODA の使い方イメージ</span>
          <h2 className="koda-practice-title">
            KODAが実際に「どこで」役に立つのか
          </h2>
          <p className="koda-practice-subtitle">
            KODAは、大がかりなシステム導入として一度に全社展開するのではなく、
            まずは一つの業務領域から小さく始めることを基本としています。
            少しずつ慣れていただきながら、必要に応じて利用範囲を広げていく考え方です。
          </p>
        </div>

        {/* Three Starting Points Label */}
        <div className="koda-practice-divider">
          <div className="divider-line"></div>
          <span className="divider-text">代表的な3つの導入例</span>
          <div className="divider-line"></div>
        </div>

        {/* Scenario Cards - Expanded Version */}
        <div className="koda-practice-grid">
          {scenarios.map((s, index) => (
            <div key={s.key} className="koda-practice-card koda-practice-card-expanded">
              <div className="card-content">
                {/* Step number */}
                <div className="card-step">{String(index + 1).padStart(2, '0')}</div>

                {/* Badge */}
                <span className="card-badge">{s.badge}</span>

                {/* Title */}
                <h3 className="card-title">{s.title}</h3>

                {/* Body paragraphs */}
                <div className="card-body">
                  {s.body.map((paragraph, idx) => (
                    <p key={idx} className="card-body-text">{paragraph}</p>
                  ))}
                </div>

                {/* Result highlight */}
                <p className="card-result">{s.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line Visual */}
        <div className="koda-practice-flow">
          <div className="flow-step flow-step-1">
            <span>1</span>
          </div>
          <div className="flow-line flow-line-1"></div>
          <div className="flow-step flow-step-2">
            <span>2</span>
          </div>
          <div className="flow-line flow-line-2"></div>
          <div className="flow-step flow-step-3">
            <span>3</span>
          </div>
          <div className="flow-line flow-line-3"></div>
          <div className="flow-step flow-step-arrow">
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="koda-practice-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">まずは一つの業務から、無理なく始めることができます。</h3>
              <p className="cta-description">
                多くのお客様は、日報・引き継ぎ・教育支援のいずれかから導入を開始し、
                現場での手応えを確認しながら、徐々に対象業務を広げていらっしゃいます。
              </p>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">
                導入のご相談をする
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/koda" className="cta-secondary">
                KODA製品を詳しく見る
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
