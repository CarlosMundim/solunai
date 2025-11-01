'use client';

export default function SuccessStories() {
  const stories = [
    {
      icon: '🎓',
      title: 'FBM Hudson Thermal Engineering',
      description: 'Demonstrated PhD-level thermal engineering expertise for 84-year European manufacturer. Analyzed 10MW air-cooler projects with complete thermodynamic calculations.',
      metric: 'Contract Signed ✅'
    },
    {
      icon: '⛏️',
      title: 'Brazilian Copper Mine M&A',
      description: 'Secured mandate for major copper mine acquisition by Chinese State-Owned Enterprise. Full due diligence and transaction support.',
      metric: 'Mandate Secured ✅'
    },
    {
      icon: '🏛️',
      title: 'Italian Tax Platform',
      description: 'Advanced platform for Italian tax and invoice management. Tackling Italy\'s complex bureaucracy with intelligent automation.',
      metric: 'Requirements Approved ✅'
    },
    {
      icon: '🌍',
      title: 'WorldEmp Partnership',
      description: 'Global partnership for placing Indian and Chinese STEM engineers across European markets with cultural intelligence matching.',
      metric: 'Partnership Closed ✅'
    },
  ];

  return (
    <section id="success" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Success Stories
          </h2>
          <p className="text-xl text-gray-600">October 2025 - European Victories</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{story.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                {story.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
