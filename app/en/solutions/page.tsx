'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import SolutionsHero from '@/components/SolutionsHero';
import SolutionCard, { SolutionData } from '@/components/SolutionCard';
import SolutionDetail, { DetailedSolution } from '@/components/SolutionDetail';
import PricingTable from '@/components/PricingTable';
import ROICalculator from '@/components/ROICalculator';
import TechPartners from '@/components/TechPartners';
import ImplementationProcess from '@/components/ImplementationProcess';
import SolutionsFAQ from '@/components/SolutionsFAQ';
import SolutionsCTA from '@/components/SolutionsCTA';

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutions: SolutionData[] = [
    {
      id: 'quotation',
      icon: '📝',
      name: 'AI Quotation Automation',
      targetIndustry: 'HVAC & Custom Manufacturing',
      keyProblem: 'Manual quotes take 10-15 min each with 15-20% error rate',
      benefits: [
        '90% time reduction (10min → 1min)',
        '95% accuracy improvement',
        '3× quote volume capacity',
        '15% margin improvement'
      ],
      pricingRange: 'Implementation: ¥800K-1.5M / Annual: ¥300K',
      roi: 'ROI: 4-6 months',
      status: '✓ FBM Deployed',
      statusBadge: 'deployed',
      accentColor: '#0066cc'
    },
    {
      id: 'predictive',
      icon: '🔧',
      name: 'Predictive Maintenance',
      targetIndustry: 'Equipment-Intensive Manufacturing',
      keyProblem: 'Unplanned downtime costs ¥2-5M annually, 65% utilization',
      benefits: [
        '40% unplanned downtime reduction',
        '72-hour advance failure warning',
        'Equipment utilization 65% → 95%',
        'Annual savings ¥2-5M'
      ],
      pricingRange: 'Implementation: ¥1.2M-2.5M / Annual: ¥500K',
      roi: 'ROI: 6-12 months',
      status: 'Phase 2',
      statusBadge: 'in-progress',
      accentColor: '#28a745'
    },
    {
      id: 'vision',
      icon: '👁️',
      name: 'Computer Vision QC',
      targetIndustry: 'Precision & High-Volume',
      keyProblem: 'Manual inspection covers 10% sampling, 67% defect detection',
      benefits: [
        'Defect detection 67% → 95%',
        '27× faster inspection',
        'Scrap rate 8-12% → <2%',
        '100% inspection coverage'
      ],
      pricingRange: 'Implementation: ¥1.5M-3M / Annual: ¥600K',
      roi: 'ROI: 6-9 months',
      status: 'Phase 2',
      statusBadge: 'in-progress',
      accentColor: '#ffc107'
    },
    {
      id: 'scheduling',
      icon: '🤖',
      name: 'AI Production Scheduling',
      targetIndustry: 'Multi-Product Manufacturing',
      keyProblem: 'Fixed schedules yield 60-70% utilization, manual planning takes hours',
      benefits: [
        '15-25% throughput improvement',
        'Equipment utilization 65% → 95%',
        'Schedule optimization in minutes',
        'Flexible adaptation to changes'
      ],
      pricingRange: 'Implementation: ¥2M-4M / Annual: ¥800K',
      roi: 'ROI: 9-12 months',
      status: 'Roadmap',
      statusBadge: 'roadmap',
      accentColor: '#dc3545'
    }
  ];

  const detailedSolutions: { [key: string]: DetailedSolution } = {
    quotation: {
      id: 'quotation',
      name: 'AI Quotation Automation',
      targetIndustries: [
        '✓ HVAC & Air Conditioning Equipment',
        '✓ Custom Machinery Manufacturing',
        '✓ Made-to-Order Manufacturing',
        '✓ Engineering-to-Order Companies'
      ],
      problemsSolved: [
        '❌ Manual calculation: Engineers spend 10-15 min per quote',
        '❌ High error rate: 15-20% pricing mistakes',
        '❌ Cannot scale: Sales team expansion is inefficient',
        '❌ Lost opportunities: Slow response times lose to competitors'
      ],
      solutionFeatures: [
        '✓ NLP-powered datasheet extraction',
        '✓ Full HTRI thermal calculation automation',
        '✓ Custom ML models for pricing optimization',
        '✓ Automated BOM generation and costing',
        '✓ Multi-language support (Japanese, English, Italian, Arabic)',
        '✓ ERP integration (seamless data connectivity)'
      ],
      techStack: [
        '• Claude AI / GPT-4 (Natural Language Processing)',
        '• HTRI Integration (Thermal Calculation Engine)',
        '• Python/TensorFlow (Machine Learning)',
        '• React + Node.js',
        '• Azure Cloud',
        '• Customer ERP Integration'
      ],
      results: [
        { metric: 'Time Reduction', value: '90%' },
        { metric: 'Accuracy Improvement', value: '95%' },
        { metric: 'Processing Capacity', value: '3×' },
        { metric: 'Margin Improvement', value: '15%' }
      ],
      investment: {
        implementation: '¥800,000 - ¥1,500,000',
        annualLicense: '¥300,000',
        support: '¥60,000/year',
        payback: '4-6 months',
        annualSavings: '¥5M-¥10M (mid-size manufacturer)'
      },
      caseStudy: {
        client: '✓ FBM Hudson Italiana (Italy & UAE)',
        contract: 'Contract Size: €2.5M-€3.8M',
        results: 'Results: Quote time 10min→1min, Lead time 14-21 days→48-72 hours'
      },
      useCases: [
        '• Custom HVAC: Automated thermal calculations',
        '• Machinery: Complex BOM generation',
        '• Made-to-order: High-mix low-volume quoting efficiency'
      ],
      accentColor: '#0066cc'
    },
    predictive: {
      id: 'predictive',
      name: 'Predictive Maintenance',
      targetIndustries: [
        '✓ Automotive Parts Manufacturing',
        '✓ Electronics Assembly',
        '✓ Machining Operations',
        '✓ All Equipment-Intensive Manufacturing'
      ],
      problemsSolved: [
        '❌ Unplanned downtime costs ¥2-5M annually',
        '❌ Reactive maintenance (fix when broken)',
        '❌ 12-15% unplanned downtime typical',
        '❌ Cannot predict equipment failures'
      ],
      solutionFeatures: [
        '✓ LSTM neural networks for failure prediction',
        '✓ IoT sensor integration (vibration, temperature, power)',
        '✓ 72-hour advance warning system',
        '✓ Azure IoT Hub for real-time monitoring',
        '✓ Custom ML models trained on equipment history'
      ],
      techStack: [
        '• LSTM Neural Networks',
        '• Azure IoT Hub',
        '• Python/TensorFlow',
        '• Vibration/Temperature/Power Sensors',
        '• Real-time Dashboard',
        '• Anomaly Detection Algorithms'
      ],
      results: [
        { metric: 'Downtime Reduction', value: '40%' },
        { metric: 'Advance Warning', value: '72 hours' },
        { metric: 'Equipment Utilization', value: '65→95%' },
        { metric: 'Annual Savings', value: '¥2-5M' }
      ],
      investment: {
        implementation: '¥1,200,000 - ¥2,500,000',
        annualLicense: '¥500,000',
        support: '¥100,000/year',
        payback: '6-12 months',
        annualSavings: '¥2M-¥5M (equipment-intensive facility)'
      },
      caseStudy: {
        client: 'FBM Hudson Phase 2 (Planned)',
        contract: 'Deployment scheduled Q2 2025',
        results: 'Target: 40% downtime reduction, 30% utilization improvement'
      },
      useCases: [
        '• Automotive: CNC machine preventive maintenance',
        '• Electronics: Assembly line optimization',
        '• Machining: Tool life prediction and auto-replacement'
      ],
      accentColor: '#28a745'
    },
    vision: {
      id: 'vision',
      name: 'Computer Vision Quality Control',
      targetIndustries: [
        '✓ Automotive Parts Manufacturing',
        '✓ Electronics Assembly',
        '✓ Precision Machining',
        '✓ High-Volume Production'
      ],
      problemsSolved: [
        '❌ Manual inspection bottlenecks',
        '❌ Sampling-based inspection (5-10% coverage only)',
        '❌ 67% defect detection rate (33% missed)',
        '❌ Scrap rate 8-12% (high cost)'
      ],
      solutionFeatures: [
        '✓ High-resolution cameras at inspection stations',
        '✓ Computer vision AI (PyTorch models)',
        '✓ Defect detection trained on thousands of samples',
        '✓ Real-time operator alerts',
        '✓ 100% inspection coverage'
      ],
      techStack: [
        '• PyTorch (Image Recognition Models)',
        '• High-Resolution Industrial Cameras',
        '• Edge AI Processing (Low Latency)',
        '• Defect Classification System',
        '• Real-time Alerting',
        '• Quality Data Analytics'
      ],
      results: [
        { metric: 'Defect Detection', value: '67→95%' },
        { metric: 'Inspection Speed', value: '27×' },
        { metric: 'Scrap Rate', value: '8→2%' },
        { metric: 'Inspection Coverage', value: '100%' }
      ],
      investment: {
        implementation: '¥1,500,000 - ¥3,000,000',
        annualLicense: '¥600,000',
        support: '¥120,000/year',
        payback: '6-9 months',
        annualSavings: '¥10M-¥20M (scrap reduction + labor savings)'
      },
      caseStudy: {
        client: 'FBM Hudson Phase 2 (In Deployment)',
        contract: 'Full production Q3 2025',
        results: 'Target: 28% scrap reduction, 50% inspection cost reduction'
      },
      useCases: [
        '• Automotive: Surface defect inspection (scratches, discoloration)',
        '• Electronics: Solder joint quality inspection',
        '• Precision: Automated dimensional measurement'
      ],
      accentColor: '#ffc107'
    },
    scheduling: {
      id: 'scheduling',
      name: 'AI Production Scheduling',
      targetIndustries: [
        '✓ Job Shop Manufacturing',
        '✓ Custom Fabrication',
        '✓ High-Mix Low-Volume Production',
        '✓ Complex Manufacturing Flows'
      ],
      problemsSolved: [
        '❌ Fixed schedules (inefficient)',
        '❌ 60-70% equipment utilization (30-40% idle)',
        '❌ Cannot adapt to rush orders or delays',
        '❌ Manual scheduling takes hours/days'
      ],
      solutionFeatures: [
        '✓ Swarm robotics coordination (ROS)',
        '✓ Reinforcement learning for optimization',
        '✓ Dynamic task allocation based on real-time conditions',
        '✓ Integration with existing CNC machines and robots',
        '✓ Autonomous collision avoidance'
      ],
      techStack: [
        '• ROS (Robot Operating System)',
        '• Reinforcement Learning (Q-learning)',
        '• Real-time Optimization Engine',
        '• CNC Integration Interface',
        '• Production Simulator',
        '• Schedule Visualization Dashboard'
      ],
      results: [
        { metric: 'Throughput Improvement', value: '15-25%' },
        { metric: 'Equipment Utilization', value: '65→95%' },
        { metric: 'Optimization Time', value: 'Minutes' },
        { metric: 'Flexibility', value: 'High' }
      ],
      investment: {
        implementation: '¥2,000,000 - ¥4,000,000',
        annualLicense: '¥800,000',
        support: '¥160,000/year',
        payback: '9-12 months',
        annualSavings: '¥15M-¥30M (throughput improvement)'
      },
      caseStudy: {
        client: 'Roadmap 2026 (Next Development Phase)',
        contract: 'Development start Q1 2026',
        results: 'Pilot program: 2-3 mid-size manufacturers'
      },
      useCases: [
        '• Job shop: Optimal sequencing of multiple orders',
        '• Custom fabrication: Resource allocation optimization',
        '• High-mix production: Setup time minimization'
      ],
      accentColor: '#dc3545'
    }
  };

  const handleLearnMore = (id: string) => {
    setSelectedSolution(id);
  };

  const handleCloseDetail = () => {
    setSelectedSolution(null);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header lang="en" />
      <SolutionsHero lang="en" />

      {/* Solutions Grid */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}
          >
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onLearnMore={handleLearnMore}
                lang="en"
              />
            ))}
          </div>
        </div>
      </section>

      <PricingTable lang="en" />
      <ROICalculator lang="en" />
      <TechPartners lang="en" />
      <ImplementationProcess lang="en" />
      <SolutionsFAQ lang="en" />
      <SolutionsCTA lang="en" />

      {/* Solution Detail Modal */}
      {selectedSolution && detailedSolutions[selectedSolution] && (
        <SolutionDetail
          solution={detailedSolutions[selectedSolution]}
          onClose={handleCloseDetail}
          lang="en"
        />
      )}
    </main>
  );
}
