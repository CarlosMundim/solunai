'use client';

import React from 'react';
import { scenarios } from '@/lib/assessmentScoring';

const ScenariosReview: React.FC = () => {
  return (
    <section style={{
      padding: '80px 24px',
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C00 100%)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            borderRadius: '4px',
            marginBottom: '16px'
          }}>
            TIGER → CHACHIE KNOWLEDGE SHARE
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#1a1a1a',
            margin: '0 0 16px 0'
          }}>
            JFC Assessment - 14 Scenarios
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            margin: '0 0 24px 0',
            lineHeight: 1.6
          }}>
            Complete scoring matrix for Chachie&apos;s review. Tiger sharing full engine logic for collaborative improvement.
          </p>

          {/* JFC Formula */}
          <div style={{
            background: '#f0f4f8',
            padding: '16px 24px',
            borderRadius: '8px',
            borderLeft: '4px solid #FF6B35'
          }}>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.9rem', color: '#333' }}>
              <strong>JFC Formula:</strong> (WA × 25%) + (LOYALTY × 20%) + (COMM × 20%) + (TEAM × 20%) + (HIER × 15%)
            </p>
          </div>
        </div>

        {/* Questions for Chachie */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 20px 0'
          }}>
            Questions for Chachie
          </h2>
          <ol style={{
            margin: 0,
            paddingLeft: '24px',
            color: '#333',
            lineHeight: 1.8
          }}>
            <li><strong>Scenario Authenticity:</strong> Do these scenarios accurately reflect real challenges foreign workers face in Japanese companies?</li>
            <li><strong>Scoring Balance:</strong> Is the scoring matrix psychometrically sound? Should any options have different scores?</li>
            <li><strong>Consistency Pairs:</strong> Are S1↔S14, S2↔S10, S3↔S11 appropriate pairs for behavioral consistency checking?</li>
            <li><strong>Missing Scenarios:</strong> Are there critical workplace situations we should add? (e.g., handling failure, overtime expectations, nenrei-joretsu age hierarchy)</li>
            <li><strong>Option Design:</strong> Should any options be modified to create clearer behavioral differentiation?</li>
            <li><strong>Cultural Nuance:</strong> Any cultural nuances that need refinement for Japanese HR credibility?</li>
          </ol>
        </div>

        {/* Dimension Key */}
        <div style={{
          marginBottom: '32px',
          padding: '24px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.125rem', fontWeight: 600 }}>Dimension Key</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            fontSize: '0.875rem'
          }}>
            <div><strong>WA (25%):</strong> Harmony & consensus</div>
            <div><strong>LOYALTY (20%):</strong> Long-term commitment</div>
            <div><strong>COMM (20%):</strong> Communication style</div>
            <div><strong>TEAM (20%):</strong> Team integration</div>
            <div><strong>HIER (15%):</strong> Hierarchy respect</div>
          </div>
        </div>

        {/* Scenarios */}
        {scenarios.map((scenario, index) => (
          <div key={scenario.id} style={{
            marginBottom: '32px',
            padding: '32px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                background: '#FF6B35',
                color: 'white',
                fontWeight: 700,
                borderRadius: '50%',
                fontSize: '0.875rem'
              }}>
                {index + 1}
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a' }}>
                  {scenario.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  {scenario.titleJA}
                </p>
              </div>
              {scenario.consistencyPairs && (
                <span style={{
                  marginLeft: 'auto',
                  padding: '4px 12px',
                  background: '#e3f2fd',
                  color: '#1565c0',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '4px'
                }}>
                  Consistency Pair: {scenario.consistencyPairs.join(', ')}
                </span>
              )}
            </div>

            <p style={{
              margin: '0 0 20px 0',
              padding: '16px',
              background: '#f8f9fa',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              color: '#333',
              lineHeight: 1.6
            }}>
              {scenario.context}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.875rem'
              }}>
                <thead>
                  <tr style={{ background: '#f0f4f8' }}>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Option</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd', width: '50px' }}>WA</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd', width: '50px' }}>LOY</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd', width: '50px' }}>COM</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd', width: '50px' }}>TEAM</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd', width: '50px' }}>HIER</th>
                  </tr>
                </thead>
                <tbody>
                  {scenario.options.map((option) => {
                    const isIdeal = Object.values(option.scores).reduce((a, b) => a + b, 0) >= 6;
                    return (
                      <tr key={option.id} style={{
                        background: isIdeal ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                      }}>
                        <td style={{
                          padding: '12px',
                          borderBottom: '1px solid #eee',
                          lineHeight: 1.5
                        }}>
                          <strong>{option.id.slice(-1)}.</strong> {option.text}
                          {isIdeal && (
                            <span style={{
                              marginLeft: '8px',
                              color: '#16a34a',
                              fontWeight: 600
                            }}>✓ Ideal</span>
                          )}
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'center',
                          borderBottom: '1px solid #eee',
                          color: option.scores.WA > 0 ? '#16a34a' : option.scores.WA < 0 ? '#dc2626' : '#666',
                          fontWeight: 600
                        }}>
                          {option.scores.WA > 0 ? '+' : ''}{option.scores.WA}
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'center',
                          borderBottom: '1px solid #eee',
                          color: option.scores.LOYALTY > 0 ? '#16a34a' : option.scores.LOYALTY < 0 ? '#dc2626' : '#666',
                          fontWeight: 600
                        }}>
                          {option.scores.LOYALTY > 0 ? '+' : ''}{option.scores.LOYALTY}
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'center',
                          borderBottom: '1px solid #eee',
                          color: option.scores.COMM > 0 ? '#16a34a' : option.scores.COMM < 0 ? '#dc2626' : '#666',
                          fontWeight: 600
                        }}>
                          {option.scores.COMM > 0 ? '+' : ''}{option.scores.COMM}
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'center',
                          borderBottom: '1px solid #eee',
                          color: option.scores.TEAM > 0 ? '#16a34a' : option.scores.TEAM < 0 ? '#dc2626' : '#666',
                          fontWeight: 600
                        }}>
                          {option.scores.TEAM > 0 ? '+' : ''}{option.scores.TEAM}
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'center',
                          borderBottom: '1px solid #eee',
                          color: option.scores.HIER > 0 ? '#16a34a' : option.scores.HIER < 0 ? '#dc2626' : '#666',
                          fontWeight: 600
                        }}>
                          {option.scores.HIER > 0 ? '+' : ''}{option.scores.HIER}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          padding: '32px',
          color: '#666',
          fontSize: '0.875rem'
        }}>
          <p style={{ margin: '0 0 8px 0' }}>
            <strong>Scoring Range:</strong> -2 to +2 per dimension per scenario
          </p>
          <p style={{ margin: '0 0 8px 0' }}>
            <strong>Max per dimension:</strong> +28 (14 × +2) | <strong>Min:</strong> -28 (14 × -2)
          </p>
          <p style={{ margin: 0 }}>
            Scores normalized to 0-100% scale for final JFC calculation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScenariosReview;
