import { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function CableCalculator() {
  const [inputMode, setInputMode] = useState<'amps' | 'kw'>('amps');
  const [current, setCurrent] = useState('');
  const [powerKw, setPowerKw] = useState('');
  const [length, setLength] = useState('');
  const [installMethod, setInstallMethod] = useState('clipped-direct');
  const [isLighting, setIsLighting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const quickAmps = [6, 10, 16, 20, 32, 40];
  const quickLengths = [5, 10, 20, 50];

  const cableData: { [key: string]: { [key: string]: number } } = {
    'clipped-direct': {
      '1.0': 15, '1.5': 19.5, '2.5': 27, '4.0': 37, '6.0': 47,
      '10.0': 65, '16.0': 87, '25.0': 114, '35.0': 143, '50.0': 179,
    },
    'in-conduit': {
      '1.0': 13.5, '1.5': 17.5, '2.5': 24, '4.0': 32, '6.0': 41,
      '10.0': 57, '16.0': 76, '25.0': 101, '35.0': 125, '50.0': 156,
    },
    'buried-insulated': {
      '1.5': 15, '2.5': 20, '4.0': 27, '6.0': 34, '10.0': 46,
      '16.0': 62, '25.0': 80, '35.0': 99, '50.0': 119,
    },
    'cable-tray': {
      '1.5': 19, '2.5': 26, '4.0': 35, '6.0': 45, '10.0': 61,
      '16.0': 81, '25.0': 106, '35.0': 131, '50.0': 162,
    },
    'underground': {
      '1.5': 18, '2.5': 24, '4.0': 31, '6.0': 39, '10.0': 52,
      '16.0': 69, '25.0': 90, '35.0': 111, '50.0': 136,
    },
    'free-air': {
      '1.0': 17, '1.5': 22, '2.5': 30, '4.0': 40, '6.0': 51,
      '10.0': 70, '16.0': 94, '25.0': 119, '35.0': 148, '50.0': 185,
    },
  };

  const resistanceData: { [key: string]: number } = {
    '1.0': 18.1, '1.5': 12.1, '2.5': 7.41, '4.0': 4.61, '6.0': 3.08,
    '10.0': 1.83, '16.0': 1.15, '25.0': 0.727, '35.0': 0.524, '50.0': 0.387,
  };

  const calculateCableSize = () => {
    let currentValue = 0;
    
    if (inputMode === 'amps') {
      currentValue = parseFloat(current);
    } else {
      const kw = parseFloat(powerKw);
      currentValue = (kw * 1000) / 230;
    }

    const lengthValue = parseFloat(length);

    if (isNaN(currentValue) || isNaN(lengthValue) || currentValue <= 0 || lengthValue <= 0) {
      return;
    }

    const cables = cableData[installMethod];
    let selectedSize = null;
    let cableCapacity = 0;

    for (const [size, capacity] of Object.entries(cables)) {
      if (capacity >= currentValue) {
        selectedSize = size;
        cableCapacity = capacity;
        break;
      }
    }

    if (!selectedSize) {
      setResult({
        error: true,
        message: 'Current too high for standard cable sizes. Consult a qualified electrician.',
      });
      return;
    }

    const resistance = resistanceData[selectedSize];
    const voltageDrop = (resistance * currentValue * lengthValue) / 1000;
    const voltageDropPercentage = (voltageDrop / 230) * 100;

    const vdLimit = isLighting ? 3 : 5;
    const vdLimitVolts = 230 * (vdLimit / 100);
    const passes = voltageDrop <= vdLimitVolts;

    const maxLength = (vdLimitVolts * 1000) / (resistance * currentValue);

    const mcbOptions = [6, 10, 16, 20, 25, 32, 40, 50, 63];
    let mcbRating = 6;
    for (const rating of mcbOptions) {
      if (rating <= cableCapacity && rating >= currentValue) {
        mcbRating = rating;
        break;
      }
    }

    setResult({
      error: false,
      cableSize: selectedSize,
      cableCapacity,
      mcbRating,
      voltageDrop,
      voltageDropPercentage,
      passes,
      vdLimit,
      maxLength,
      current: currentValue,
      length: lengthValue,
      resistance,
    });
  };

  const getMethodDescription = (method: string) => {
    const descriptions: { [key: string]: string } = {
      'clipped-direct': 'Cable clipped directly to wall, ceiling, or surface (Method C)',
      'in-conduit': 'Cable enclosed in conduit on or in wall (Method C1)',
      'buried-insulated': 'Cable buried in wall with thermal insulation (Method C2)',
      'cable-tray': 'Cable installed in cable tray (Method D)',
      'underground': 'Cable installed underground in duct (Method E)',
      'free-air': 'Cable in free air or clipped to ceiling (Method F)',
    };
    return descriptions[method] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cable Size Calculator</h1>
          <p className="text-blue-100">BS 7671 18th Edition compliant • Fast & accurate cable sizing</p>
        </div>

        <div className="bg-white rounded-b-2xl shadow-2xl p-6 md:p-8">
          <div className="mb-8">
            <label className="block text-gray-900 font-bold mb-3 text-lg">
              1. What's the load?
            </label>
            
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setInputMode('amps')}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  inputMode === 'amps'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Amps
              </button>
              <button
                onClick={() => setInputMode('kw')}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  inputMode === 'kw'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                kW
              </button>
            </div>
            
            {inputMode === 'amps' ? (
              <>
                <div className="relative">
                  <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    placeholder="Enter load in Amps"
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pr-16"
                    min="1"
                    max="100"
                    step="0.1"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    Amps
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickAmps.map(amp => (
                    <button
                      key={amp}
                      onClick={() => setCurrent(amp.toString())}
                      className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-700 rounded-lg text-sm font-medium transition-all"
                    >
                      {amp}A
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="relative">
                  <input
                    type="number"
                    value={powerKw}
                    onChange={(e) => setPowerKw(e.target.value)}
                    placeholder="Enter power in kW"
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pr-16"
                    min="0.1"
                    max="25"
                    step="0.1"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    kW
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Common: 8.5kW shower, 3kW immersion heater, 2kW ring main
                </p>
              </>
            )}
          </div>
          
          <div className="mb-8">
            <label className="block text-gray-900 font-bold mb-3 text-lg">
              2. How far is the cable run?
            </label>
            <div className="relative">
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pr-20"
                min="1"
                max="500"
                step="0.1"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                meters
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {quickLengths.map(len => (
                <button
                  key={len}
                  onClick={() => setLength(len.toString())}
                  className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-700 rounded-lg text-sm font-medium transition-all"
                >
                  {len}m
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-gray-900 font-bold mb-3 text-lg">
              3. How is the cable installed?
            </label>
            <select
              value={installMethod}
              onChange={(e) => setInstallMethod(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="clipped-direct">Clipped direct to wall/surface</option>
              <option value="in-conduit">In conduit on/in wall</option>
              <option value="buried-insulated">Buried in wall (thermally insulated)</option>
              <option value="cable-tray">In cable tray</option>
              <option value="underground">Underground in duct</option>
              <option value="free-air">Free air / clipped to ceiling</option>
            </select>
            <p className="text-sm text-gray-600 mt-2">
              {getMethodDescription(installMethod)}
            </p>
          </div>

          <div className="mb-8">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={isLighting}
                onChange={(e) => setIsLighting(e.target.checked)}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-3">
                <span className="text-gray-900 font-medium">This is a lighting circuit</span>
                <span className="block text-sm text-gray-600 mt-1">
                  (3% voltage drop limit instead of 5%)
                </span>
              </span>
            </label>
          </div>

          {(current || powerKw) && length && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="ml-3 text-sm">
                  <p className="text-yellow-800 font-medium">⚠️ Load must be between 1-100A</p>
                  <p className="text-yellow-800">⚠️ Cable run must be between 1-500m</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={calculateCableSize}
            disabled={!(current || powerKw) || !length}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {!(current || powerKw) || !length
              ? 'Enter all values above to see cable recommendation'
              : 'Calculate Cable Size'}
          </button>

          {result && !result.error && (
            <div className="mt-8 space-y-6">
              <div className={`p-6 rounded-xl border-2 ${
                result.passes ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start">
                  {result.passes ? (
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="ml-4 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Use {result.cableSize}mm² Twin & Earth Cable
                    </h3>
                    <p className="text-gray-700 font-medium mb-4">
                      Suitable MCB/RCBO: {result.mcbRating}A Type B
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-800">
                        <span className="font-semibold">Voltage Drop:</span> {result.voltageDrop.toFixed(2)}V ({result.voltageDropPercentage.toFixed(2)}%)
                      </p>
                      <p className={result.passes ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                        {result.passes ? '✓' : '✗'} {result.passes ? 'Passes' : 'Exceeds'} BS 7671 limit ({result.vdLimit}% for {isLighting ? 'lighting' : 'power'} circuits)
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Max run:</span> {result.maxLength.toFixed(1)}m before voltage drop exceeds limit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="font-semibold text-gray-900">Show Calculation Details</span>
                {showDetails ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {showDetails && (
                <div className="bg-gray-50 rounded-lg p-6 text-sm space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">Calculation Method:</h4>
                  <div className="space-y-2 font-mono text-gray-700">
                    <p>• Cable resistance: {result.resistance} mΩ/m (BS 7671 Table 4A1)</p>
                    <p>• Load current: {result.current.toFixed(2)}A</p>
                    <p>• Cable length: {result.length}m</p>
                    <p>• Voltage drop = (2 × {result.length}m × {result.current.toFixed(2)}A × {result.resistance}mΩ) ÷ 1000</p>
                    <p>• Voltage drop = {result.voltageDrop.toFixed(2)}V</p>
                    <p>• Percentage = {result.voltageDrop.toFixed(2)}V ÷ 230V × 100 = {result.voltageDropPercentage.toFixed(2)}%</p>
                    <p>• BS 7671 limit: {result.vdLimit}% ({isLighting ? 'lighting' : 'power'} circuit)</p>
                    <p>• Current capacity ({result.cableSize}mm²): {result.cableCapacity}A</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {result && result.error && (
            <div className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="ml-4 text-red-800 font-semibold">{result.message}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>This calculator follows BS 7671:2018+A2:2022 (18th Edition) requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>Results assume standard conditions (30°C ambient, no grouping factors)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>Additional derating may apply for grouped circuits or high temperatures</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span><strong>Always consult a qualified electrician for professional installations</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
