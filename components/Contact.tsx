'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let\'s Build Together
          </h2>
          <p className="text-xl text-gray-600">Schedule a consultation to discuss your project</p>
        </div>
        
        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Email</p>
                  <a href="mailto:contact@solunai.co.jp" className="text-solunai-blue hover:underline">
                    contact@solunai.co.jp
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Location</p>
                  <p className="text-gray-700">Tokyo, Japan</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Expertise</p>
                  <p className="text-gray-700">AI Infrastructure | Thermal Engineering | M&A Advisory</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>FBM Hudson Contract Signed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Copper Mine M&A Mandate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Italian Tax Platform Partnership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>WorldEmp Global Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:contact@solunai.co.jp" 
              className="inline-block px-12 py-4 bg-solunai-blue text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-600 border-t pt-8">
          <p>© 2025 Solunai Systems K.K. | Sovereign AI Infrastructure for Japan</p>
          <p className="mt-2 text-sm">Built with ❤️ by Tiger van Niekerk Mundim</p>
        </footer>
      </div>
    </section>
  );
}
