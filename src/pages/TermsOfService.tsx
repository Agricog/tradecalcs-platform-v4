import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-gray-600">Last updated: November 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using TradeCalcs ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              TradeCalcs provides online calculation tools and utilities designed for UK trades and construction professionals. Our tools include, but are not limited to, electrical calculations, material estimations, and other trade-specific calculators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Use the Service in compliance with all applicable laws and regulations</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to any part of the Service</li>
              <li>Not interfere with or disrupt the Service or servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Professional Advice Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed font-medium">
                <strong>IMPORTANT:</strong> The calculations and tools provided by TradeCalcs are for informational and estimation purposes only. They do not constitute professional advice. You should always:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                <li>Verify calculations independently</li>
                <li>Consult with qualified professionals for specific projects</li>
                <li>Comply with all relevant British Standards and regulations</li>
                <li>Obtain proper certifications and approvals as required by law</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Calculations</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to ensure our calculators are accurate and up-to-date with current British Standards, we cannot guarantee that all calculations will be error-free or suitable for every specific situation. Users are responsible for verifying all calculations and ensuring compliance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>TradeCalcs is provided "as is" without warranties of any kind</li>
              <li>We are not liable for any damages arising from use of the Service</li>
              <li>We are not responsible for decisions made based on our calculations</li>
              <li>Our total liability shall not exceed the amount paid (if any) for using the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of TradeCalcs, including but not limited to text, graphics, logos, and software, are owned by TradeCalcs and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Accounts and VIP Access</h2>
            <p className="text-gray-700 leading-relaxed">
              Some features may require account registration or VIP access. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Custom Development Services</h2>
            <p className="text-gray-700 leading-relaxed">
              If you engage us for bespoke web application development, separate terms and agreements will apply. These will be outlined in individual project proposals and contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Pricing and Payment</h2>
            <p className="text-gray-700 leading-relaxed">
              Pricing for any paid services or VIP features will be clearly displayed. We reserve the right to modify pricing with reasonable notice. Payments are non-refundable except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Service Modifications and Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We may also terminate or suspend your access to the Service for violations of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms. We will notify users of material changes through the website or by email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> mick@tradecalcs.co.uk
              </p>
            </div>
          </section>

          <section className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-l-4 border-purple-600">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> These terms are designed to protect both TradeCalcs and our users. For specific legal questions about these terms, please consult with a qualified legal professional.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
