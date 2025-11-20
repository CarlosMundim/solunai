'use client';

import React from 'react';
import './ProductExplanation.css';

interface ProductExplanationProps {
  lang?: 'en' | 'ja';
}

const ProductExplanation: React.FC<ProductExplanationProps> = ({ lang = 'en' }) => {
  const content = {
    en: {
      badge: 'SOLUNAI CULTURAL ASSESSMENT ENGINE',
      title: 'Product Overview',
      intro: 'Solunai is developing a cultural compatibility assessment engine designed specifically for foreign workers entering Japanese companies.',
      introDetail: 'Instead of generic personality tests, our system uses 14 realistic workplace scenarios (overtime, hierarchy, nomikai, criticism, loyalty, etc.) to understand how a candidate is likely to behave in real Japanese conditions.',

      deliversTitle: 'What It Delivers',
      deliversIntro: 'For each candidate the system produces:',
      delivers: [
        'An overall cultural compatibility score',
        'Wa (harmony) alignment',
        'Hierarchy adaptation level',
        'Communication adaptation score',
        'Team integration potential',
        'Loyalty & retention likelihood',
        'A behavioural consistency index',
        'Practical guidance for managers on how to support this person'
      ],

      mattersTitle: 'Why This Matters',
      mattersIntro: 'Japanese companies are increasingly hiring foreign workers, but many placements fail because of cultural misunderstanding, not technical skill.',
      mattersCost: 'A single failed hire can cost a company 3-6 months of salary and significant team disruption.',
      mattersReduces: 'Solunai\'s engine reduces this risk by:',
      mattersPoints: [
        'Identifying candidates who are more likely to integrate and stay',
        'Highlighting where cultural support or training is needed',
        'Giving managers clear, actionable guidance'
      ],

      loanTitle: 'Use of JFC Loan',
      loanIntro: 'The JFC loan will be used to:',
      loanPoints: [
        'Finalise the V1 assessment engine and API',
        'Implement pilot projects with partner companies (including foreign worker dispatch partners)',
        'Collect data on retention and integration outcomes over 6-12 months',
        'Complete the scientific validation and prepare for wider commercial rollout'
      ],

      revenueTitle: 'Revenue Model',
      revenuePoints: [
        'Per-assessment fees for recruitment agencies and employers',
        'Monthly licence for HR platforms integrating our API',
        'Enterprise packages for large employers and government programmes'
      ],
      revenueConclusion: 'This positions Solunai as a specialised infrastructure provider for cultural fit and retention in Japan\'s rapidly changing labour market.',

      ctaDemo: 'Try the Assessment Demo',
      ctaContact: 'Contact Us'
    },
    ja: {
      badge: 'SOLUNAI 文化適合性評価エンジン',
      title: '製品概要',
      intro: 'Solunaiは、日本企業に入社する外国人労働者向けに特化した文化適合性評価エンジンを開発しています。',
      introDetail: '一般的な性格テストではなく、14の現実的な職場シナリオ（残業、階層、飲み会、批評、忠誠心など）を使用して、候補者が実際の日本の環境でどのように行動する可能性があるかを理解します。',

      deliversTitle: '提供内容',
      deliversIntro: '各候補者に対して、システムは以下を生成します：',
      delivers: [
        '総合的な文化適合性スコア',
        '和（調和）との整合性',
        '階層適応レベル',
        'コミュニケーション適応スコア',
        'チーム統合の可能性',
        '忠誠心と定着の可能性',
        '行動一貫性指数',
        'マネージャー向けの実践的なサポートガイダンス'
      ],

      mattersTitle: 'なぜ重要か',
      mattersIntro: '日本企業は外国人労働者の採用を増やしていますが、多くの配置が技術的スキルではなく、文化的誤解のために失敗しています。',
      mattersCost: '一人の採用失敗は、会社に3〜6ヶ月分の給与と大きなチームの混乱をもたらす可能性があります。',
      mattersReduces: 'Solunaiのエンジンは以下によってこのリスクを軽減します：',
      mattersPoints: [
        '統合し、定着する可能性が高い候補者の特定',
        '文化的サポートやトレーニングが必要な箇所の特定',
        'マネージャーへの明確で実行可能なガイダンスの提供'
      ],

      loanTitle: 'JFC融資の使途',
      loanIntro: 'JFC融資は以下に使用されます：',
      loanPoints: [
        'V1評価エンジンとAPIの完成',
        'パートナー企業（外国人労働者派遣パートナーを含む）とのパイロットプロジェクトの実施',
        '6〜12ヶ月にわたる定着率と統合結果のデータ収集',
        '科学的検証の完了と広範な商業展開の準備'
      ],

      revenueTitle: '収益モデル',
      revenuePoints: [
        '人材紹介会社・雇用主向けの評価ごとの料金',
        'APIを統合するHRプラットフォーム向けの月額ライセンス',
        '大企業・政府プログラム向けのエンタープライズパッケージ'
      ],
      revenueConclusion: 'これにより、Solunaiは急速に変化する日本の労働市場における文化適合性と定着率の専門インフラプロバイダーとして位置づけられます。',

      ctaDemo: '評価デモを試す',
      ctaContact: 'お問い合わせ'
    }
  };

  const c = content[lang];

  return (
    <section className="product-explanation-section">
      <div className="product-container">
        <div className="product-header">
          <div className="product-badge">{c.badge}</div>
          <h1 className="product-title">{c.title}</h1>
        </div>

        <div className="product-intro">
          <p className="intro-main">{c.intro}</p>
          <p className="intro-detail">{c.introDetail}</p>
        </div>

        <div className="product-section">
          <h2 className="section-title">{c.deliversTitle}</h2>
          <p className="section-intro">{c.deliversIntro}</p>
          <ul className="feature-list">
            {c.delivers.map((item, i) => (
              <li key={i} className="feature-item">
                <span className="feature-bullet">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-section highlight">
          <h2 className="section-title">{c.mattersTitle}</h2>
          <p className="section-intro">{c.mattersIntro}</p>
          <p className="cost-callout">{c.mattersCost}</p>
          <p className="reduces-intro">{c.mattersReduces}</p>
          <ul className="benefit-list">
            {c.mattersPoints.map((point, i) => (
              <li key={i} className="benefit-item">
                <span className="benefit-check">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-section">
          <h2 className="section-title">{c.loanTitle}</h2>
          <p className="section-intro">{c.loanIntro}</p>
          <ul className="loan-list">
            {c.loanPoints.map((point, i) => (
              <li key={i} className="loan-item">
                <span className="loan-number">{i + 1}</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-section">
          <h2 className="section-title">{c.revenueTitle}</h2>
          <ul className="revenue-list">
            {c.revenuePoints.map((point, i) => (
              <li key={i} className="revenue-item">
                <span className="revenue-icon">¥</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="revenue-conclusion">{c.revenueConclusion}</p>
        </div>

        <div className="product-cta">
          <a href={lang === 'ja' ? '/demo/jfc-assessment/ja' : '/demo/jfc-assessment'} className="cta-button primary">
            {c.ctaDemo}
          </a>
          <a href={lang === 'ja' ? '/ja#contact' : '/#contact'} className="cta-button secondary">
            {c.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductExplanation;
