'use client';

import React from 'react';
import './AssessmentResults.css';

interface AssessmentResultsProps {
  responses: Record<string, number>;
  onReset: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({ responses, onReset }) => {
  // Calculate category scores
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
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    if (score >= 40) return 'Moderate Match';
    return 'Developing';
  };

  return (
    <section className="assessment-results-section">
      <div className="results-container">
        <div className="results-header">
          <div className="sce-badge">SCE ANALYSIS COMPLETE</div>
          <h2 className="results-title">Cultural Compatibility Profile</h2>
          <p className="results-subtitle">
            Powered by Solunai Continuity Engine - Your profile has been saved for future reference
          </p>
        </div>

        <div className="overall-score-card">
          <div className={`score-circle ${getScoreColor(overallScore)}`}>
            <span className="score-value">{overallScore}%</span>
          </div>
          <div className="score-info">
            <h3 className="score-label">{getScoreLabel(overallScore)}</h3>
            <p className="score-description">
              Overall compatibility with Japanese workplace culture
            </p>
          </div>
        </div>

        <div className="category-scores">
          <div className="category-card">
            <h4 className="category-name">Work Style</h4>
            <div className="category-bar">
              <div
                className={`bar-fill ${getScoreColor(workStyleScore)}`}
                style={{ width: `${workStyleScore}%` }}
              />
            </div>
            <span className="category-score">{workStyleScore}%</span>
          </div>

          <div className="category-card">
            <h4 className="category-name">Communication</h4>
            <div className="category-bar">
              <div
                className={`bar-fill ${getScoreColor(communicationScore)}`}
                style={{ width: `${communicationScore}%` }}
              />
            </div>
            <span className="category-score">{communicationScore}%</span>
          </div>

          <div className="category-card">
            <h4 className="category-name">Team Integration</h4>
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
          <h3 className="insights-title">Key Insights</h3>
          <div className="insights-grid">
            {workStyleScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>Strong alignment with Japanese work discipline and quality standards</p>
              </div>
            )}
            {communicationScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>Good understanding of indirect communication patterns</p>
              </div>
            )}
            {integrationScore >= 70 && (
              <div className="insight-card strength">
                <span className="insight-icon">+</span>
                <p>High potential for long-term team integration</p>
              </div>
            )}
            {workStyleScore < 50 && (
              <div className="insight-card growth">
                <span className="insight-icon">!</span>
                <p>May benefit from guidance on Japanese work style expectations</p>
              </div>
            )}
            {communicationScore < 50 && (
              <div className="insight-card growth">
                <span className="insight-icon">!</span>
                <p>Communication style adaptation recommended</p>
              </div>
            )}
          </div>
        </div>

        <div className="sce-memory-note">
          <div className="memory-icon">SCE</div>
          <p>
            <strong>Solunai Continuity Engine:</strong> This profile is now stored in our system.
            Future assessments will track your cultural adaptation progress over time.
          </p>
        </div>

        <div className="results-actions">
          <button className="action-button primary">
            Download Full Report (PDF)
          </button>
          <button className="action-button secondary" onClick={onReset}>
            Take Assessment Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentResults;
