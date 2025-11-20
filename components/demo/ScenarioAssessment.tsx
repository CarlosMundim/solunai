'use client';

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import {
  scenarios,
  calculateAssessment,
  getJFCLabel,
  type AssessmentResult,
  type Scenario
} from '@/lib/assessmentScoring';
import './AssessmentForm.css';
import './AssessmentResults.css';

interface ScenarioAssessmentProps {
  lang?: 'en' | 'ja';
}

const ScenarioAssessment: React.FC<ScenarioAssessmentProps> = ({ lang = 'en' }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleOptionSelect = (scenarioId: string, optionId: string) => {
    setResponses(prev => ({ ...prev, [scenarioId]: optionId }));
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
    } else {
      const assessmentResult = calculateAssessment(responses);
      setResult(assessmentResult);
    }
  };

  const handlePrev = () => {
    if (currentScenario > 0) {
      setCurrentScenario(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setResponses({});
    setCurrentScenario(0);
    setResult(null);
  };

  const scenario = scenarios[currentScenario];
  const isOptionSelected = responses[scenario.id] !== undefined;

  const generatePDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Helper function for color-coded scores
    const getScoreColor = (score: number): [number, number, number] => {
      if (score >= 70) return [22, 163, 74];   // Green
      if (score >= 50) return [234, 179, 8];   // Yellow
      return [220, 38, 38];                     // Red
    };

    const getRetentionRisk = (loyalty: number): { label: string; color: [number, number, number] } => {
      if (loyalty >= 70) return { label: 'LOW', color: [22, 163, 74] };
      if (loyalty >= 50) return { label: 'MEDIUM', color: [234, 179, 8] };
      return { label: 'HIGH', color: [220, 38, 38] };
    };

    // Dimension descriptions
    const dimensionDescriptions: Record<string, string> = {
      WA: 'Ability to maintain group cohesion, avoid conflict, and support consensus decisions',
      LOYALTY: 'Likelihood of long-term commitment to organization and role stability',
      COMM: 'Comfort with indirect communication, reading context, and face-saving behavior',
      TEAM: 'Willingness to participate in team rituals, after-work socializing, and group activities',
      HIER: 'Respect for senpai-kohai dynamics, proper escalation, and authority structures'
    };

    // ===== PAGE 1 =====

    // Header with orange accent
    doc.setFillColor(255, 107, 53);
    doc.rect(0, 0, pageWidth, 8, 'F');

    doc.setFontSize(24);
    doc.setTextColor(26, 26, 26);
    doc.text('SOLUNAI', pageWidth / 2, 25, { align: 'center' });

    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text('Japanese Fit Coefficient (JFC) Assessment Report', pageWidth / 2, 33, { align: 'center' });

    doc.setFontSize(8);
    doc.setTextColor(255, 107, 53);
    doc.text('Powered by Solunai Continuity Engine (SCE)', pageWidth / 2, 40, { align: 'center' });

    // JFC Score Section
    doc.setFontSize(14);
    doc.setTextColor(26, 26, 26);
    doc.text('JAPANESE FIT COEFFICIENT', pageWidth / 2, 55, { align: 'center' });

    // Score with color coding
    const jfcColor = getScoreColor(result.jfc);
    doc.setFontSize(42);
    doc.setTextColor(jfcColor[0], jfcColor[1], jfcColor[2]);
    doc.text(`${result.jfc}%`, pageWidth / 2, 72, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text(getJFCLabel(result.jfc), pageWidth / 2, 80, { align: 'center' });

    // JFC Calculation Explanation
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('JFC = Weighted composite of 5 cultural dimensions (Wa 25%, Loyalty 20%, Comm 20%, Team 20%, Hier 15%)', pageWidth / 2, 87, { align: 'center' });

    // Consistency Index with risk commentary
    let yPos = 97;
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    doc.text('Behavioral Consistency Index:', 20, yPos);

    const consistencyColor = getScoreColor(result.consistencyIndex);
    doc.setTextColor(consistencyColor[0], consistencyColor[1], consistencyColor[2]);
    doc.text(`${result.consistencyIndex}%`, 85, yPos);

    // Consistency risk comment
    if (result.consistencyIndex < 70) {
      yPos += 6;
      doc.setFontSize(8);
      doc.setTextColor(234, 179, 8);
      doc.text('* Moderate variability across scenarios. Candidate may behave differently depending on context.', 20, yPos);
    }

    // Retention Risk Indicator
    yPos += 10;
    const retentionRisk = getRetentionRisk(result.normalizedScores.LOYALTY);
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    doc.text('Retention Risk:', 20, yPos);
    doc.setTextColor(retentionRisk.color[0], retentionRisk.color[1], retentionRisk.color[2]);
    doc.text(retentionRisk.label, 60, yPos);

    // Dimension Breakdown Section
    yPos += 15;
    doc.setFillColor(245, 245, 245);
    doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
    doc.setFontSize(12);
    doc.setTextColor(26, 26, 26);
    doc.text('DIMENSION BREAKDOWN', 20, yPos);

    yPos += 12;
    doc.setFontSize(9);

    const dimensionLabels: Record<string, string> = {
      WA: 'Harmony (Wa)',
      LOYALTY: 'Long-term Commitment',
      COMM: 'Communication Style',
      TEAM: 'Team Integration',
      HIER: 'Hierarchy Respect'
    };

    for (const [key, label] of Object.entries(dimensionLabels)) {
      const score = result.normalizedScores[key as keyof typeof result.normalizedScores];
      const scoreColor = getScoreColor(score);

      // Dimension name and score
      doc.setTextColor(26, 26, 26);
      doc.text(`${label}:`, 20, yPos);
      doc.setTextColor(scoreColor[0], scoreColor[1], scoreColor[2]);
      doc.text(`${score}%`, 75, yPos);

      // Description
      yPos += 5;
      doc.setFontSize(7);
      doc.setTextColor(100, 100, 100);
      const desc = doc.splitTextToSize(dimensionDescriptions[key], 170);
      doc.text(desc, 20, yPos);
      yPos += desc.length * 3 + 5;
      doc.setFontSize(9);
    }

    // Cultural Stress Points
    if (result.culturalStressPoints.length > 0) {
      yPos += 5;
      doc.setFillColor(255, 243, 224);
      doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
      doc.setFontSize(11);
      doc.setTextColor(234, 88, 12);
      doc.text('CULTURAL STRESS POINTS', 20, yPos);

      yPos += 8;
      doc.setFontSize(8);
      doc.setTextColor(60, 60, 60);
      result.culturalStressPoints.forEach(point => {
        doc.text(`• ${point}`, 20, yPos);
        yPos += 5;
      });
    }

    // ===== PAGE 2 =====
    doc.addPage();

    // Header accent
    doc.setFillColor(255, 107, 53);
    doc.rect(0, 0, pageWidth, 8, 'F');

    yPos = 25;

    // Strengths Section
    if (result.strengths.length > 0) {
      doc.setFillColor(236, 253, 245);
      doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
      doc.setFontSize(11);
      doc.setTextColor(22, 101, 52);
      doc.text('STRENGTHS', 20, yPos);

      yPos += 10;
      doc.setFontSize(9);
      doc.setTextColor(22, 163, 74);
      result.strengths.forEach(strength => {
        doc.text(`+ ${strength}`, 20, yPos);
        yPos += 6;
      });
      yPos += 5;
    }

    // Development Areas
    if (result.developmentAreas.length > 0) {
      doc.setFillColor(254, 249, 195);
      doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
      doc.setFontSize(11);
      doc.setTextColor(161, 98, 7);
      doc.text('DEVELOPMENT AREAS', 20, yPos);

      yPos += 10;
      doc.setFontSize(9);
      doc.setTextColor(180, 83, 9);
      result.developmentAreas.forEach(area => {
        doc.text(`• ${area}`, 20, yPos);
        yPos += 6;
      });
      yPos += 5;
    }

    // Risk Flags
    if (result.riskFlags.length > 0) {
      doc.setFillColor(254, 226, 226);
      doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
      doc.setFontSize(11);
      doc.setTextColor(153, 27, 27);
      doc.text('RISK INDICATORS', 20, yPos);

      yPos += 10;
      doc.setFontSize(9);
      result.riskFlags.forEach(flag => {
        const color = flag.level === 'critical' ? [220, 38, 38] : [234, 179, 8];
        doc.setTextColor(color[0], color[1], color[2]);
        const symbol = flag.level === 'critical' ? '[CRITICAL]' : '[MODERATE]';
        doc.text(`${symbol} ${flag.message}`, 20, yPos);
        yPos += 6;
      });
      yPos += 5;
    }

    // Management Recommendations Section
    doc.setFillColor(239, 246, 255);
    doc.rect(15, yPos - 5, pageWidth - 30, 8, 'F');
    doc.setFontSize(11);
    doc.setTextColor(30, 64, 175);
    doc.text('MANAGEMENT RECOMMENDATIONS', 20, yPos);

    yPos += 10;
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);

    // Primary recommendation
    const splitStyle = doc.splitTextToSize(result.managementStyle, 170);
    doc.text(splitStyle, 20, yPos);
    yPos += splitStyle.length * 4 + 5;

    // Specific practical guidance based on scores
    doc.setFontSize(8);
    doc.setTextColor(75, 85, 99);

    const practicalGuidance: string[] = [];

    if (result.normalizedScores.COMM >= 70) {
      practicalGuidance.push('• Private feedback is more effective than public correction for this candidate');
    } else {
      practicalGuidance.push('• Use direct, explicit communication rather than relying on context or hints');
    }

    if (result.normalizedScores.HIER >= 70) {
      practicalGuidance.push('• Works best when hierarchy is stable and clear; comfortable with senpai guidance');
    } else {
      practicalGuidance.push('• May need support navigating conflicting instructions from different authority levels');
    }

    if (result.normalizedScores.TEAM < 60) {
      practicalGuidance.push('• Gradual introduction to team social activities recommended; avoid pressure');
    }

    if (result.normalizedScores.WA >= 70) {
      practicalGuidance.push('• Naturally supports consensus; can help mediate team disagreements');
    }

    practicalGuidance.forEach(guidance => {
      doc.text(guidance, 20, yPos);
      yPos += 5;
    });

    // Integration Timeline
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    doc.text('Estimated Integration Timeline:', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);

    const avgScore = (result.normalizedScores.WA + result.normalizedScores.LOYALTY + result.normalizedScores.COMM + result.normalizedScores.TEAM + result.normalizedScores.HIER) / 5;
    let timeline = '';
    if (avgScore >= 70) {
      timeline = '1-3 months for full cultural adaptation with standard onboarding';
    } else if (avgScore >= 50) {
      timeline = '3-6 months with guided mentorship and regular check-ins';
    } else {
      timeline = '6-12 months with structured cultural training and dedicated senpai support';
    }
    doc.text(timeline, 20, yPos);

    // Footer
    yPos = 270;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos - 5, pageWidth - 20, yPos - 5);

    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text('This report was generated by the Solunai Continuity Engine (SCE)', pageWidth / 2, yPos, { align: 'center' });
    doc.text(`Assessment Date: ${new Date().toLocaleDateString()} | Report ID: ${Date.now().toString(36).toUpperCase()}`, pageWidth / 2, yPos + 4, { align: 'center' });
    doc.text('www.solunai.co.jp | Confidential - For authorized HR use only', pageWidth / 2, yPos + 8, { align: 'center' });

    doc.save('Solunai_JFC_Assessment_Report.pdf');
  };

  // Render results
  if (result) {
    return (
      <section className="assessment-results-section">
        <div className="results-container">
          <div className="results-header">
            <div className="sce-badge">SCE ANALYSIS COMPLETE</div>
            <h2 className="results-title">Japanese Fit Coefficient (JFC)</h2>
            <p className="results-subtitle">
              Powered by Solunai Continuity Engine - 14 Scenario SJT Analysis
            </p>
          </div>

          <div className="overall-score-card">
            <div className={`score-circle ${result.jfc >= 65 ? 'excellent' : result.jfc >= 50 ? 'good' : result.jfc >= 35 ? 'moderate' : 'developing'}`}>
              <span className="score-value">{result.jfc}%</span>
            </div>
            <div className="score-info">
              <h3 className="score-label">{getJFCLabel(result.jfc)}</h3>
              <p className="score-description">
                Consistency Index: {result.consistencyIndex}%
              </p>
            </div>
          </div>

          <div className="category-scores">
            <div className="category-card">
              <h4 className="category-name">Harmony (Wa)</h4>
              <div className="category-bar">
                <div
                  className={`bar-fill ${result.normalizedScores.WA >= 70 ? 'excellent' : result.normalizedScores.WA >= 50 ? 'good' : 'moderate'}`}
                  style={{ width: `${result.normalizedScores.WA}%` }}
                />
              </div>
              <span className="category-score">{result.normalizedScores.WA}%</span>
            </div>

            <div className="category-card">
              <h4 className="category-name">Long-term Commitment</h4>
              <div className="category-bar">
                <div
                  className={`bar-fill ${result.normalizedScores.LOYALTY >= 70 ? 'excellent' : result.normalizedScores.LOYALTY >= 50 ? 'good' : 'moderate'}`}
                  style={{ width: `${result.normalizedScores.LOYALTY}%` }}
                />
              </div>
              <span className="category-score">{result.normalizedScores.LOYALTY}%</span>
            </div>

            <div className="category-card">
              <h4 className="category-name">Communication Style</h4>
              <div className="category-bar">
                <div
                  className={`bar-fill ${result.normalizedScores.COMM >= 70 ? 'excellent' : result.normalizedScores.COMM >= 50 ? 'good' : 'moderate'}`}
                  style={{ width: `${result.normalizedScores.COMM}%` }}
                />
              </div>
              <span className="category-score">{result.normalizedScores.COMM}%</span>
            </div>

            <div className="category-card">
              <h4 className="category-name">Team Integration</h4>
              <div className="category-bar">
                <div
                  className={`bar-fill ${result.normalizedScores.TEAM >= 70 ? 'excellent' : result.normalizedScores.TEAM >= 50 ? 'good' : 'moderate'}`}
                  style={{ width: `${result.normalizedScores.TEAM}%` }}
                />
              </div>
              <span className="category-score">{result.normalizedScores.TEAM}%</span>
            </div>

            <div className="category-card">
              <h4 className="category-name">Hierarchy Respect</h4>
              <div className="category-bar">
                <div
                  className={`bar-fill ${result.normalizedScores.HIER >= 70 ? 'excellent' : result.normalizedScores.HIER >= 50 ? 'good' : 'moderate'}`}
                  style={{ width: `${result.normalizedScores.HIER}%` }}
                />
              </div>
              <span className="category-score">{result.normalizedScores.HIER}%</span>
            </div>
          </div>

          {result.riskFlags.length > 0 && (
            <div className="results-insights">
              <h3 className="insights-title">Risk Areas</h3>
              <div className="insights-grid">
                {result.riskFlags.map((flag, i) => (
                  <div key={i} className={`insight-card ${flag.level === 'critical' ? 'growth' : 'growth'}`}>
                    <span className="insight-icon">{flag.level === 'critical' ? '!' : '*'}</span>
                    <p>{flag.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.strengths.length > 0 && (
            <div className="results-insights">
              <h3 className="insights-title">Strengths</h3>
              <div className="insights-grid">
                {result.strengths.map((strength, i) => (
                  <div key={i} className="insight-card strength">
                    <span className="insight-icon">+</span>
                    <p>{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.developmentAreas.length > 0 && (
            <div className="results-insights">
              <h3 className="insights-title">Development Areas</h3>
              <div className="insights-grid">
                {result.developmentAreas.map((area, i) => (
                  <div key={i} className="insight-card growth">
                    <span className="insight-icon">*</span>
                    <p>{area}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="sce-memory-note">
            <div className="memory-icon">MGT</div>
            <p>
              <strong>Management Recommendation:</strong> {result.managementStyle}
            </p>
          </div>

          {result.culturalStressPoints.length > 0 && (
            <div className="sce-memory-note">
              <div className="memory-icon">CSP</div>
              <p>
                <strong>Cultural Stress Points:</strong> {result.culturalStressPoints.join('; ')}
              </p>
            </div>
          )}

          <div className="results-actions">
            <button className="action-button primary" onClick={generatePDF}>
              Download Full Report (PDF)
            </button>
            <button className="action-button secondary" onClick={handleReset}>
              Take Assessment Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Render assessment form
  return (
    <section className="assessment-form-section">
      <div className="assessment-form-container">
        <div className="form-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            Scenario {currentScenario + 1} of {scenarios.length}
          </span>
        </div>

        <div className="questions-container">
          <div className="question-card scenario-card">
            <h3 className="question-label">{lang === 'ja' ? scenario.titleJA : scenario.title}</h3>
            <p className="scenario-context">{lang === 'ja' ? scenario.contextJA : scenario.context}</p>

            <div className="scenario-options">
              {scenario.options.map((option) => (
                <button
                  key={option.id}
                  className={`scenario-option ${responses[scenario.id] === option.id ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(scenario.id, option.id)}
                >
                  <span className="option-letter">{option.id.slice(-1)}</span>
                  <span className="option-text">{lang === 'ja' ? option.textJA : option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-navigation">
          <button
            className="nav-button prev"
            onClick={handlePrev}
            disabled={currentScenario === 0}
          >
            Previous
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            disabled={!isOptionSelected}
          >
            {currentScenario === scenarios.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScenarioAssessment;
