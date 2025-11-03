import { useState } from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface BSPThread {
  size: string;
  tpi: number;
  majorDiameter: number;
  minorDiameter: number;
  commonName: string;
  tapDrill: number;
}

const bspData: BSPThread[] = [
  { size: '1/8"', tpi: 28, majorDiameter: 9.73, minorDiameter: 8.57, commonName: 'R 1/8', tapDrill: 8.6 },
  { size: '1/4"', tpi: 19, majorDiameter: 13.16, minorDiameter: 11.45, commonName: 'R 1/4', tapDrill: 11.5 },
  { size: '3/8"', tpi: 19, majorDiameter: 16.66, minorDiameter: 14.95, commonName: 'R 3/8', tapDrill: 15.0 },
  { size: '1/2"', tpi: 14, majorDiameter: 20.96, minorDiameter: 18.63, commonName: 'R 1/2', tapDrill: 18.75 },
  { size: '5/8"', tpi: 14, majorDiameter: 22.91, minorDiameter: 20.59, commonName: 'R 5/8', tapDrill: 20.75 },
  { size: '3/4"', tpi: 14, majorDiameter: 26.44, minorDiameter: 24.12, commonName: 'R 3/4', tapDrill: 24.25 },
  { size: '7/8"', tpi: 14, majorDiameter: 30.20, minorDiameter: 27.88, commonName: 'R 7/8', tapDrill: 28.0 },
  { size: '1"', tpi: 11, majorDiameter: 33.25, minorDiameter: 30.29, commonName: 'R 1', tapDrill: 30.5 },
  { size: '1 1/4"', tpi: 11, majorDiameter: 41.91, minorDiameter: 38.95, commonName: 'R 1 1/4', tapDrill: 39.0 },
  { size: '1 1/2"', tpi: 11, majorDiameter: 47.80, minorDiameter: 44.85, commonName: 'R 1 1/2', tapDrill: 45.0 },
  { size: '2"', tpi: 11, majorDiameter: 59.61, minorDiameter: 56.66, commonName: 'R 2', tapDrill: 56.75 },
  { size: '2 1/2"', tpi: 11, majorDiameter: 75.18, minorDiameter: 72.23, commonName: 'R 2 1/2', tapDrill: 72.25 },
  { size: '3"', tpi: 11, majorDiameter: 87.88, minorDiameter: 84.93, commonName: 'R 3', tapDrill: 85.0 },
];

export default function BSPThreadFinder() {
  const [measurementType, setMeasurementType] = useState<'diameter' | 'tpi'>('diameter');
  const [outerDiameter, setOuterDiameter] = useState('');
  const [threadPitch, setThreadPitch] = useState('');
  const [tolerance, setTolerance] = useState('0.5');
  const [results, setResults] = useState<BSPThread[]>([]);
  const [selectedResult, setSelectedResult] = useState<BSPThread | null>(null);

  const identify = () => {
    let matches: BSPThread[] = [];
    const toleranceNum = parseFloat(tolerance);

    if (measurementType === 'diameter' && outerDiameter) {
      const diameterNum = parseFloat(outerDiameter);
      if (!isNaN(diameterNum)) {
        matches = bspData.filter(thread => 
          Math.abs(thread.majorDiameter - diameterNum) <= toleranceNum
        );
      }
    } else if (measurementType === 'tpi' && threadPitch) {
      const tpiNum = parseInt(threadPitch);
      if (!isNaN(tpiNum)) {
        matches = bspData.filter(thread => thread.tpi === tpiNum);
      }
    }

    setResults(matches);
    setSelectedResult(matches.length === 1 ? matches[0] : null);
  };

  const getCommonPipes = (size: string) => {
    const pipes: { [key: string]: string[] } = {
      '1/2"': ['15mm copper pipe', '1/2" MDPE'],
      '3/4"': ['22mm copper pipe', '3/4" MDPE'],
      '1"': ['28mm copper pipe', '1" MDPE'],
      '1 1/4"': ['32mm copper pipe', '32mm MDPE'],
      '1 1/2"': ['35mm copper pipe'],
      '2"': ['54mm copper pipe'],
    };
    return pipes[size] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-t-2xl p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">BSP Thread Size Finder</h1>
          <p className="text-orange-100">Identify British Standard Pipe threads instantly</p>
        </div>

        <div className="bg-white rounded-b-2xl shadow-2xl p-6 md:p-8">
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-blue-900">
                  <strong>BSP (British Standard Pipe)</strong> threads are tapered threads used for pipes and fittings.
                  The nominal size doesn't match the actual diameter - measure carefully!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-900 font-bold mb-4 text-lg">
              How would you like to identify the thread?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setMeasurementType('diameter')}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  measurementType === 'diameter'
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-bold text-lg mb-2">Measure by Diameter</div>
                <div className="text-sm text-gray-600">Use calipers or ruler to measure outer diameter</div>
              </button>
              <button
                onClick={() => setMeasurementType('tpi')}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  measurementType === 'tpi'
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-bold text-lg mb-2">Measure by Thread Pitch</div>
                <div className="text-sm text-gray-600">Count threads per inch with a gauge</div>
              </button>
            </div>
          </div>

          {measurementType === 'diameter' ? (
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-gray-900 font-bold mb-3 text-lg">
                  Outer Diameter (mm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={outerDiameter}
                    onChange={(e) => setOuterDiameter(e.target.value)}
                    placeholder="e.g., 20.96"
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none pr-16"
                    step="0.01"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    mm
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Tip:</strong> Measure the outermost diameter of the male thread
                </p>
              </div>
              
              <div>
                <label className="block text-gray-900 font-bold mb-3 text-lg">
                  Measurement Tolerance
                </label>
                <select
                  value={tolerance}
                  onChange={(e) => setTolerance(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer"
                >
                  <option value="0.1">±0.1mm (Precise measurement)</option>
                  <option value="0.5">±0.5mm (Standard measurement)</option>
                  <option value="1.0">±1.0mm (Rough measurement)</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <label className="block text-gray-900 font-bold mb-3 text-lg">
                Threads Per Inch (TPI)
              </label>
              <select
                value={threadPitch}
                onChange={(e) => setThreadPitch(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer"
              >
                <option value="">Select TPI</option>
                <option value="28">28 TPI (1/8" threads)</option>
                <option value="19">19 TPI (1/4" and 3/8" threads)</option>
                <option value="14">14 TPI (1/2", 3/4", 7/8" threads)</option>
                <option value="11">11 TPI (1" and larger threads)</option>
              </select>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tip:</strong> Use a thread pitch gauge or count threads in a 1-inch length
              </p>
            </div>
          )}

          <button
            onClick={identify}
            disabled={!((measurementType === 'diameter' && outerDiameter) || (measurementType === 'tpi' && threadPitch))}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {!((measurementType === 'diameter' && outerDiameter) || (measurementType === 'tpi' && threadPitch))
              ? 'Enter measurement above to identify thread'
              : 'Identify BSP Thread Size'}
          </button>

          {results.length > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Matching BSP Threads</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((thread) => (
                  <button
                    key={thread.size}
                    onClick={() => setSelectedResult(thread)}
                    className={`p-5 rounded-xl border-2 transition-all text-left ${
                      selectedResult?.size === thread.size
                        ? 'border-orange-500 bg-orange-50 shadow-lg'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-bold text-2xl text-orange-600 mb-2">{thread.size}</div>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>TPI:</strong> {thread.tpi}</p>
                      <p><strong>OD:</strong> {thread.majorDiameter}mm</p>
                      <p className="text-xs text-gray-600">{thread.commonName}</p>
                    </div>
                  </button>
                ))}
              </div>

              {selectedResult && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedResult.size} BSP Thread
                      </h4>
                      <p className="text-gray-700 font-medium">
                        Also known as: {selectedResult.commonName}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Threads Per Inch</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedResult.tpi} TPI</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Major Diameter</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedResult.majorDiameter}mm</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Minor Diameter</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedResult.minorDiameter}mm</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Tap Drill Size</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedResult.tapDrill}mm</div>
                    </div>
                  </div>

                  {getCommonPipes(selectedResult.size).length > 0 && (
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2">Commonly fits with:</h5>
                      <ul className="space-y-1">
                        {getCommonPipes(selectedResult.size).map((pipe, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            {pipe}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-sm text-yellow-900">
                      <strong>Important:</strong> BSP threads are tapered (1:16 taper). The nominal size ({selectedResult.size}) 
                      refers to the bore of the pipe, not the thread diameter. Always verify with manufacturer specifications.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {results.length === 0 && (outerDiameter || threadPitch) && (
            <div className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="text-red-800 font-semibold mb-2">No matching BSP threads found</p>
                  <p className="text-red-700 text-sm">
                    Try adjusting your measurement or tolerance. The thread may not be BSP standard.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Common BSP Sizes</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">BSP Size</span>
                  <span className="font-semibold">Outer Diameter</span>
                </div>
                {bspData.slice(0, 8).map(thread => (
                  <div key={thread.size} className="flex justify-between text-gray-700">
                    <span>{thread.size}</span>
                    <span>{thread.majorDiameter}mm</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">BSP vs Pipe Size</h4>
              <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
                <p className="mb-3"><strong>Key Fact:</strong> BSP thread sizes don't match pipe sizes!</p>
                <ul className="space-y-2">
                  <li>• 1/2" BSP fits 15mm copper pipe</li>
                  <li>• 3/4" BSP fits 22mm copper pipe</li>
                  <li>• 1" BSP fits 28mm copper pipe</li>
                  <li>• The "size" refers to the pipe bore, not thread diameter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">•</span>
              <span>BSP threads are tapered at 1:16 - they seal by thread deformation</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">•</span>
              <span>Always use PTFE tape or jointing compound for water-tight seals</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">•</span>
              <span>Don't confuse BSP with BSPT (tapered) or BSPP (parallel) threads</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">•</span>
              <span>Measurements should be taken from the crest of the threads</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">•</span>
              <span><strong>For critical installations, always verify with thread gauges</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
