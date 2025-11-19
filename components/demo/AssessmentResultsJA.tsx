'use client';

import React from 'react';
import './AssessmentResults.css';

interface AssessmentResultsJAProps {
  responses: Record<string, number>;
  onReset: () => void;
}

const AssessmentResultsJA: React.FC<AssessmentResultsJAProps> = ({ responses, onReset }) => {
  const workStyleIds = ['punctuality', 'overtime', 'quality', 'authority', 'process'];
  const communicationIds = ['indirect', 'silence', 'conflict', 'hierarchy', 'feedback'];
  const integrationIds = ['commitment', 'harmony', 'detail', 'social', 'kaizen'];

  const calculateCategoryScore = (ids: string[]) => {
    const scores = ids.map(id => responses[id] || 0);
    const total = scores.reduce((a, b) => a + b, 0);
    return Math.round((total / (ids.length * 5)) * 100);
  };

  const workStyleScore = calculateCategoryScore(workStyleIds);
  const communicationScore = calculateCategoryScore(communicationIds);
  const integrationScore = calculateCategoryScore(integrationIds);
  const overallScore = Math.round((workStyleScore + communicationScore + integrationScore) / 3);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'moderate';
    return 'developing';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return '優秀なマッチング';
    if (score >= 60) return '良好なマッチング';
    if (score >= 40) return '適度なマッチング';
    return '成長中';
  };

  return (
    <section className="assessment-results-section">
      <div className="results-container">
        <div className="results-header">
          <div className="sce-badge">SCE分析完了</div>
          <h2 className="results-title">文化適合性プロファイル</h2>
          <p className="results-subtitle">
            Solunai継続エンジン搭載 - あなたのプロファイルは今後の参照のために保存されました
          </p>
        </div>

        <div className="overall-score-card">
          <div className={`score-circle ${getScoreColor(overallScore)}`}>
            <span className="score-value">{overallScore}%</span>
          </div>
          <div className="score-info">
            <h3 className="score-label">{getScoreLabel(overallScore)}</h3>
            <p className="score-description">
              日本の職場文化との総合適合性
            </p>
          </div>
        </div>

        <div className="category-scores">
          <div className="category-card">
            <h4 className="category-name">ワークスタイル</h4>
            <div className="category-bar">
              <div
                className={`bar-fill ${getScoreColor(workStyleScore)}`}
                style={{ width: `${workStyleScore}%` }}
              />
            </div>
            <span className="category-score">{workStyleScore}%</span>
          </div>

          <div className="category-card">
            <h4 className="category-name">コミュニケーション</h4>
            <div className="category-bar">
              <div
                className={`bar-fill ${getScoreColor(communicationScore)}`}
                style={{ width: `${communicationScore}%` }}
              />
            </div>
            <span className="category-score">{communicationScore}%</span>
          </div>

          <div className="category-card">
            <h4 className="category-name">チーム統合</h4>
            <div className="category-bar">
              <div
                className={`bar-fill ${getScoreColor(integrationScore)}`}
                style={{ width: `${integrationScore}%` }}
              />
            </div>
            <span className="category-score">{integrationScore}%</span>
          </div>
        </div>

        <div className="results-insights">
          <h3 className="insights-title">主要な洞察</h3>
          <div className="insights-grid">
            {workStyleScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>日本の仕事規律と品質基準との強い整合性</p>
              </div>
            )}
            {communicationScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>間接的なコミュニケーションパターンの良好な理解</p>
              </div>
            )}
            {integrationScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>長期的なチーム統合の高い可能性</p>
              </div>
            )}
            {workStyleScore < 50 && (
              <div className="insight-card growth">
                <span className="insight-icon">!</span>
                <p>日本の仕事スタイルの期待についてのガイダンスが有益かもしれません</p>
              </div>
            )}
            {communicationScore < 50 && (
              <div className="insight-card growth">
                <span className="insight-icon">!</span>
                <p>コミュニケーションスタイルの適応をお勧めします</p>
              </div>
            )}
          </div>
        </div>

        <div className="sce-memory-note">
          <div className="memory-icon">SCE</div>
          <p>
            <strong>Solunai継続エンジン:</strong> このプロファイルはシステムに保存されました。
            今後の評価では、時間の経過とともに文化適応の進捗を追跡します。
          </p>
        </div>

        <div className="results-actions">
          <button className="action-button primary">
            完全レポートをダウンロード (PDF)
          </button>
          <button className="action-button secondary" onClick={onReset}>
            再度評価を受ける
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentResultsJA;
