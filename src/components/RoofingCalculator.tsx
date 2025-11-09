import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface RoofingCalcState {
  roofLength: number
  roofWidth: number
  pitchAngle: number
  wastagePercentage: number
  result: number | null
}

export default function RoofingCalculator() {
  const [calc, setCalc] = useState<RoofingCalcState>({
    roofLength: 10,
    roofWidth: 8,
    pitchAngle: 35,
    wastagePercentage: 10,
    result: null,
  })

  const handleCalculate = () => {
    const pitchFactor = Math.cos((calc.pitchAngle * Math.PI) / 180)
    const baseArea = calc.roofLength * calc.roofWidth
    const adjustedArea = baseArea / pitchFactor
    const materialNeeded = adjustedArea * (1 + calc.wastagePercentage / 100)
    
    setCalc({ ...calc, result: Math.round(materialNeeded * 100) / 100 })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Roofing Material Calculator</h1>
          <p className="text-xl text-gray-600">Calculate roofing materials with pitch angle adjustments</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Roof Length (m)</label>
              <input
                type="number"
                value={calc.roofLength}
                onChange={(e) => setCalc({ ...calc, roofLength: parseFloat(e.target.value) })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Roof Width (m)</label>
              <input
                type="number"
                value={calc.roofWidth}
                onChange={(e) => setCalc({ ...calc, roofWidth: parseFloat(e.target.value) })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Pitch Angle (degrees)</label>
              <input
                type="number"
                value={calc.pitchAngle}
                onChange={(e) => setCalc({ ...calc, pitchAngle: parseFloat(e.target.value) })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Wastage %</label>
              <input
                type="number"
                value={calc.wastagePercentage}
                onChange={(e) => setCalc({ ...calc, wastagePercentage: parseFloat(e.target.value) })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-600 focus:outline-none"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              Calculate Material Needed
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {calc.result !== null && (
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-lg p-6 mt-6">
                <p className="text-sm text-gray-700 mb-2">Material Needed (m²):</p>
                <p className="text-4xl font-bold text-purple-600">{calc.result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
