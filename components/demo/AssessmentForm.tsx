'use client';

import React, { useState } from 'react';
import AssessmentResults from './AssessmentResults';
import './AssessmentForm.css';

// 15 Core Dimensions from MVP proposal
const dimensions = {
  workStyle: [
    { id: 'punctuality', label: 'Punctuality Orientation', question: 'How important is arriving exactly on time for meetings?' },
    { id: 'overtime', label: 'Overtime Acceptance', question: 'How do you feel about staying late to complete important work?' },
    { id: 'quality', label: 'Quality vs Speed', question: 'When facing deadlines, do you prioritize quality or speed?' },
    { id: 'authority', label: 'Authority Respect', question: 'How comfortable are you following decisions from senior leadership?' },
    { id: 'process', label: 'Process Adherence', question: 'How important is following established procedures?' },
  ],
  communication: [
    { id: 'indirect', label: 'Indirect Communication', question: 'How comfortable are you with subtle, indirect communication?' },
    { id: 'silence', label: 'Silence Interpretation', question: 'How do you interpret silence in meetings?' },
    { id: 'conflict', label: 'Conflict Avoidance', question: 'How do you prefer to handle disagreements?' },
    { id: 'hierarchy', label: 'Hierarchical Language', question: 'How naturally do you adapt your language for different seniority levels?' },
    { id: 'feedback', label: 'Feedback Reception', question: 'How do you prefer to receive constructive criticism?' },
  ],
  integration: [
    { id: 'commitment', label: 'Long-term Commitment', question: 'How do you view long-term employment with one company?' },
    { id: 'harmony', label: 'Team Harmony', question: 'How important is maintaining group consensus?' },
    { id: 'detail', label: 'Attention to Detail', question: 'How much attention do you pay to small details in your work?' },
    { id: 'social', label: 'After-work Socializing', question: 'How do you feel about socializing with colleagues after work?' },
    { id: 'kaizen', label: 'Continuous Improvement', question: 'How actively do you seek ways to improve processes?' },
  ],
};

const AssessmentForm: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const sections = [
    { key: 'workStyle', title: 'Work Style', dimensions: dimensions.workStyle },
    { key: 'communication', title: 'Communication', dimensions: dimensions.communication },
    { key: 'integration', title: 'Team Integration', dimensions: dimensions.integration },
  ];

  const handleResponse = (dimensionId: string, value: number) => {
    setResponses(prev => ({ ...prev, [dimensionId]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setIsComplete(true);
      // TODO: Calculate results and show AssessmentResults
      console.log('Assessment complete:', responses);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const currentSectionData = sections[currentSection];
  const sectionComplete = currentSectionData.dimensions.every(
    d => responses[d.id] !== undefined
  );

  const handleReset = () => {
    setResponses({});
    setCurrentSection(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <AssessmentResults responses={responses} onReset={handleReset} />
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
            Section {currentSection + 1} of {sections.length}: {currentSectionData.title}
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
                <span>Not at all</span>
                <span>Very much</span>
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
            Previous
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            disabled={!sectionComplete}
          >
            {currentSection === sections.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentForm;
