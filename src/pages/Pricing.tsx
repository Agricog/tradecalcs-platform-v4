import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const formUrl = 'https://app.smartsuite.com/form/sba974gi/Zx9ZVTVrwE';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Professional tools for trade professionals. Start free, upgrade when you need more.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">£0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for occasional use and trying out our tools
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to basic calculators</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cable size calculator</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Voltage drop calculator</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Material estimator</span>
                </li>
              </ul>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started Free
              </a>
            </div>

            {/* VIP Tier */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Access</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Contact</span>
              </div>
              <p className="text-purple-100 mb-6">
                Get early access to new tools and priority support
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Everything in Free</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Early access to new tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Advanced calculator features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Save and export calculations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Custom tool requests</span>
                </li>
              </ul>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors group"
              >
                Get VIP Access
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Custom Tier */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">
                Bespoke web applications built for your specific needs
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom tool development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Built to your specifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integration with your systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Training for your team</span>
                </li>
              </ul>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I try VIP features before committing?
              </h3>
              <p className="text-gray-700">
                Yes! Contact us through the form and we can arrange a trial period to see if VIP access is right for you.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What custom solutions can you build?
              </h3>
              <p className="text-gray-700">
                We build bespoke web applications for any trade-related business problem. From complex quotation systems to inventory management, project tracking, and more. Tell us your challenge and we'll create a solution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Are the calculators compliant with current regulations?
              </h3>
              <p className="text-gray-700">
                Yes! All our electrical calculators follow BS 7671:2018+A2:2022 (18th Edition) requirements. We keep them updated with the latest standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do you offer discounts for teams?
              </h3>
              <p className="text-gray-700">
                Yes! If you have multiple people who need VIP access, contact us for team pricing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us today to discuss VIP access or custom tool development
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 group"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
