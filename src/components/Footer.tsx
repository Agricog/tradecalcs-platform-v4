import { Calculator, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const formUrl = 'https://app.smartsuite.com/form/sba974gi/Zx9ZVTVrwE';

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-8 w-8" />
              <span className="text-2xl font-bold">TradeCalcs</span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              Professional calculation tools built specifically for UK trades. Fast, accurate, and compliant with British Standards.
            </p>
            <div className="flex items-center space-x-2 text-purple-200">
              <Mail className="h-5 w-5" />
              <a 
                href="mailto:mick@tradecalcs.co.uk" 
                className="hover:text-white transition-colors"
              >
                mick@tradecalcs.co.uk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-purple-200 hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-purple-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-purple-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-purple-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200 text-sm">
              © {currentYear} TradeCalcs. All rights reserved.
            </p>
            <p className="text-purple-200 text-sm">
              Built by Tradespeople, for Tradespeople
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
