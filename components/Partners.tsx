'use client';

export default function Partners() {
  const partners = [
    { name: 'FBM Hudson Italiana', description: '84-year thermal equipment manufacturer' },
    { name: 'WorldEmp', description: 'Global engineering talent placement' },
    { name: 'Brazilian Copper Mine', description: 'Major M&A transaction mandate' },
    { name: 'Italian Tax Authority', description: 'Platform development partnership' },
  ];

  return (
    <section id="partners" className="py-24 bg-brexa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-gray-300">Global leaders choose Solunai</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition">
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-300 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-solunai-blue">
            €2.5M+ Contracts Secured | 4 Major European Victories | October 2025
          </p>
        </div>
      </div>
    </section>
  );
}
