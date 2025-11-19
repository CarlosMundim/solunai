'use client';

import React, { useState } from 'react';
import AssessmentResultsJA from './AssessmentResultsJA';
import './AssessmentForm.css';

// 15 Core Dimensions - Japanese
const dimensions = {
  workStyle: [
    { id: 'punctuality', label: '時間意識', question: '会議に時間通りに到着することはどれほど重要ですか？' },
    { id: 'overtime', label: '残業許容度', question: '重要な仕事を完了するために残業することについてどう思いますか？' },
    { id: 'quality', label: '品質vs速度', question: '締め切りに直面したとき、品質と速度のどちらを優先しますか？' },
    { id: 'authority', label: '権威尊重', question: '上層部からの決定に従うことにどれほど抵抗がありませんか？' },
    { id: 'process', label: 'プロセス遵守', question: '確立された手順に従うことはどれほど重要ですか？' },
  ],
  communication: [
    { id: 'indirect', label: '間接表現', question: '微妙で間接的なコミュニケーションにどれほど抵抗がありませんか？' },
    { id: 'silence', label: '沈黙の解釈', question: '会議での沈黙をどのように解釈しますか？' },
    { id: 'conflict', label: '対立回避', question: '意見の相違をどのように処理することを好みますか？' },
    { id: 'hierarchy', label: '階層的言語', question: '異なる役職レベルに合わせて言葉遣いをどれほど自然に適応させますか？' },
    { id: 'feedback', label: 'フィードバック受容', question: '建設的な批判をどのように受け取ることを好みますか？' },
  ],
  integration: [
    { id: 'commitment', label: '長期コミット', question: '一つの会社での長期雇用についてどう考えますか？' },
    { id: 'harmony', label: 'チーム調和', question: 'グループの合意を維持することはどれほど重要ですか？' },
    { id: 'detail', label: '細部への注意', question: '仕事の小さな詳細にどれほど注意を払いますか？' },
    { id: 'social', label: '社交性', question: '仕事後に同僚と交流することについてどう感じますか？' },
    { id: 'kaizen', label: '継続改善', question: 'プロセスを改善する方法をどれほど積極的に探しますか？' },
  ],
};

const AssessmentFormJA: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const sections = [
    { key: 'workStyle', title: 'ワークスタイル', dimensions: dimensions.workStyle },
    { key: 'communication', title: 'コミュニケーション', dimensions: dimensions.communication },
    { key: 'integration', title: 'チーム統合', dimensions: dimensions.integration },
  ];

  const handleResponse = (dimensionId: string, value: number) => {
    setResponses(prev => ({ ...prev, [dimensionId]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setResponses({});
    setCurrentSection(0);
    setIsComplete(false);
  };

  const currentSectionData = sections[currentSection];
  const sectionComplete = currentSectionData.dimensions.every(
    d => responses[d.id] !== undefined
  );

  if (isComplete) {
    return (
      <AssessmentResultsJA responses={responses} onReset={handleReset} />
    );
  }

  return (
    <section className="assessment-form-section">
      <div className="assessment-form-container">
        <div className="form-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            セクション {currentSection + 1} / {sections.length}: {currentSectionData.title}
          </span>
        </div>

        <div className="questions-container">
          {currentSectionData.dimensions.map((dimension) => (
            <div key={dimension.id} className="question-card">
              <h3 className="question-label">{dimension.label}</h3>
              <p className="question-text">{dimension.question}</p>
              <div className="rating-scale">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    className={`rating-button ${responses[dimension.id] === value ? 'selected' : ''}`}
                    onClick={() => handleResponse(dimension.id, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="scale-labels">
                <span>全くない</span>
                <span>非常にある</span>
              </div>
            </div>
          ))}
        </div>

        <div className="form-navigation">
          <button
            className="nav-button prev"
            onClick={handlePrev}
            disabled={currentSection === 0}
          >
            前へ
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            disabled={!sectionComplete}
          >
            {currentSection === sections.length - 1 ? '完了' : '次へ'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentFormJA;
