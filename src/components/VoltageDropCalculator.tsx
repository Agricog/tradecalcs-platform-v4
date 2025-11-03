import { useState } from 'react';
import { Zap, AlertCircle } from 'lucide-react';

export default function VoltageDropCalculator() {
  const [voltage, setVoltage] = useState('230');
  const [current, setCurrent] = useState('');
  const [length, setLength] = useState('');
  const [cableSize, setCableSize] = useState('2.5');
  const [result, setResult] = useState<string | null>(null);

  // Resistance values in mΩ/m for different cable sizes
  const resistanceData: { [key: string]: number } = {
    '1.0': 18.1,
    '1.5': 12.1,
    '2.5': 7.41,
    '4.0': 4.61,
    '6.0': 3.08,
    '10.0': 1.83,
    '16.0': 1.15,
    '25.0': 0.727,
    '35.0': 0.524,
    '50.0': 0.387,
  };

  const calculateVoltageDrop = () => {
    const voltageValue = parseFloat(voltage);
    const currentValue = parseFloat(current);
    const lengthValue = parseFloat(length);

    if (isNaN(voltageValue) || isNaN(currentValue) || isNaN(lengthValue) ||
        voltageValue <= 0 || currentValue <= 0 || lengthValue <= 0) {
      setResult('Please enter valid positive numbers');
      return;
    }

    const resistance = resistanceData[cableSize];
    
    // Voltage drop = (mV/A/m × Current × Length) / 1000
    const voltageDrop = (resistance * currentValue * lengthValue) / 1000;
    const voltageDropPercentage = (voltageDrop / voltageValue) * 100;

    // BS 7671 limits: 3% for lighting, 5% for other uses
    const lightingLimit = voltageValue * 0.03;
    const otherLimit = voltageValue * 0.05;

    const isLightingCompliant = voltageDrop <= lightingLimit;
    const isOtherCompliant = voltageDrop <= otherLimit;

    setResult(`Voltage Drop Results:

Calculated voltage drop: ${voltageDrop.toFixed(2)}V (${voltageDropPercentage.toFixed(2)}%)
Cable size: ${cableSize}mm²
Circuit length: ${lengthValue}m
Load current: ${currentValue}A

BS 7671 Compliance:
• Lighting circuits (3% max): ${isLightingCompliant ? '✓ PASS' : '✗ FAIL'} (${lightingLimit.toFixed(2)}V limit)
• Other circuits (5% max): ${isOtherCompliant ? '✓ PASS' : '✗ FAIL'} (${otherLimit.toFixed(2)}V limit)

${!isOtherCompliant ? '\n⚠️ Consider using a larger cable size to reduce voltage drop' : ''}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Voltage Drop Calculator
            </h1>
          </div>
          <p className="text-gray-600">Calculate voltage drop and check BS 7671 compliance</p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Supply Voltage (Volts)
              </label>
              <select
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
              >
                <option value="230">230V (Single Phase)</option>
                <option value="400">400V (Three Phase)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Load Current (Amps)
              </label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
                placeholder="e.g., 20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cable Length (Meters)
              </label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
                placeholder="e.g., 25"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cable Size (mm²)
              </label>
              <select
                value={cableSize}
                onChange={(e) => setCableSize(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
              >
                <option value="1.0">1.0mm²</option>
                <option value="1.5">1.5mm²</option>
                <option value="2.5">2.5mm²</option>
                <option value="4.0">4.0mm²</option>
                <option value="6.0">6.0mm²</option>
                <option value="10.0">10.0mm²</option>
                <option value="16.0">16.0mm²</option>
                <option value="25.0">25.0mm²</option>
                <option value="35.0">35.0mm²</option>
                <option value="50.0">50.0mm²</option>
              </select>
            </div>

            <button
              onClick={calculateVoltageDrop}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Calculate Voltage Drop
            </button>
          </div>

          {result && (
            <div className={`mt-6 p-6 rounded-lg ${result.includes('FAIL') ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}>
              <div className="flex items-start space-x-3">
                {result.includes('FAIL') ? (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                ) : (
                  <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-900">
                    {result}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
            Important Notes
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>BS 7671 limits voltage drop to 3% for lighting circuits and 5% for other circuits</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>This calculator uses standard resistance values at 70°C conductor temperature</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Values are for copper conductors with PVC insulation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>For three-phase calculations, use line current and line voltage</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Always verify calculations with a qualified electrician for final installations</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
