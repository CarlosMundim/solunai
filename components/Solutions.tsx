'use client';

export default function Solutions() {
  const solutions = [
    {
      title: 'aiKODA Platform',
      description: 'Agent SDK & Orchestration for Sovereign AI',
      features: [
        'Claude/GPT/Manus agent orchestration',
        'Government-grade security standards',
        'Multi-agent system architecture',
        'Complete observability dashboards'
      ]
    },
    {
      title: 'iWORKZ Platform',
      description: 'HRTech Stack with Cultural Intelligence',
      features: [
        'AI-driven workforce analytics',
        'Cultural compatibility scoring',
        'Voice-powered talent matching',
        'Cross-cultural communication tools'
      ]
    },
    {
      title: 'Thermal Engineering',
      description: 'PhD-Level Industrial Solutions',
      features: [
        '10MW+ air-cooler design expertise',
        'Complete thermodynamic calculations',
        'FBM Hudson partnership proven',
        'European manufacturing standards'
      ]
    },
    {
      title: 'M&A Advisory',
      description: 'Cross-Border Deal Support',
      features: [
        'Due diligence & transaction support',
        'Asia-Europe corridor expertise',
        'Copper mine mandate secured',
        'SOE transaction experience'
      ]
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Excellence
          </h2>
          <p className="text-xl text-gray-600">Real results across industries</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-8 border-2 border-gray-200 rounded-2xl hover:border-solunai-blue transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-solunai-blue mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
