import { Calculator, Zap, Ruler, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tools() {
  const formUrl = 'https://app.smartsuite.com/form/sba974gi/Zx9ZVTVrwE';

  const tools = [
    {
      id: 'cable-calculator',
      title: 'Cable Size Calculator',
      description: 'BS 7671 18th Edition compliant electrical cable sizing with derating factors, voltage drop analysis, and MCB recommendations. Fast, accurate, professional.',
      icon: Calculator,
      color: 'from-blue-600 to-indigo-600',
      path: '/tools/cable-calculator',
      badge: 'Most Popular'
    },
    {
      id: 'voltage-drop',
      title: 'Voltage Drop Calculator',
      description: 'Calculate voltage drop for any circuit length and load. Instant BS 7671 compliance checks with detailed calculation breakdowns and maximum run length analysis.',
      icon: Zap,
      color: 'from-cyan-600 to-blue-600',
      path: '/tools/voltage-drop',
    },
    {
      id: 'bsp-finder',
      title: 'BSP Thread Size Finder',
      description: 'Identify British Standard Pipe threads instantly by diameter or TPI. Complete specifications, compatibility checker, and quick reference guide for UK plumbers.',
      icon: Ruler,
      color: 'from-orange-600 to-red-600',
      path: '/tools/bsp-finder',
      badge: 'For Plumbers'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Elite Trade Calculators
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Premium, professional tools built for UK tradespeople. Every calculator is meticulously crafted to be fast, accurate, and beautiful.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Crème de la Crème
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't flood the site with mediocre tools. Every calculator here is outstanding in both function and design - tools tradespeople actually want to use.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              
              return (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                >
                  {tool.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {tool.badge}
                      </span>
                    </div>
                  )}

                  <div className={`bg-gradient-to-br ${tool.color} p-8 relative overflow-hidden`}>
                    <Icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {tool.title}
                      <ArrowRight className="w-6 h-6 text-purple-600 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 ml-2" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-blue-600 transition-colors">
                      <span>Use Calculator</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className={`h-2 bg-gradient-to-r ${tool.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quality Over Quantity
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're not here to fill pages with mediocre tools. Every calculator on TradeCalcs is 
            <strong> meticulously designed, rigorously tested, and genuinely useful</strong>. 
            These are tools you'll actually want to use - beautiful, fast, and accurate.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">BS 7671</div>
              <div className="text-gray-600">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Accurate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Elite Tools</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Tool Built?
          </h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            We build bespoke web applications for trade businesses. Got a unique problem that
            needs solving? We create elite tools that your team will actually love using.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            Request a Custom Tool
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="text-purple-200 text-sm mt-6">
            Professional quality • Built to your exact specifications
          </p>
        </div>
      </section>
    </div>
  );
}
