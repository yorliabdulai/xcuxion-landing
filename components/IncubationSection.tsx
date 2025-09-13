"use client"

import { Home } from "lucide-react"

const IncubationSection = () => {
  return (
    <section className="pt-12 pb-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Pre-heading */}
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-16 h-px bg-gray-300"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
                <Home size={16} className="text-gray-500" />
              </div>
              <span className="mx-3">Incubation</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight break-words">
              Tech startups incubation and acceleration
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed break-words">
              Ready to take your tech startup to the next level? Apply to our incubation and acceleration programs today!
            </p>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button 
                className="px-6 py-3 text-white font-medium rounded-lg transition-colors hover:bg-gray-700"
                style={{
                  background: '#282828',
                  borderRadius: '7.75956px'
                }}
              >
                Learn more ➤
              </button>
            </div>
          </div>

          {/* Right Column - Illustrative Elements */}
          <div className="relative overflow-hidden">
            <div className="relative w-full h-80 overflow-hidden">
              {/* Background Circles - Replica of Hero Section */}
              {/* Outer Circle */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '400px',
                  height: '400px',
                  left: 'calc(50% - 200px)',
                  top: 'calc(50% - 200px)',
                  background: 'rgba(170, 206, 0, 0.1)',
                  opacity: 0.5
                }}
              ></div>
              
              {/* Inner Circle */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '250px',
                  height: '250px',
                  left: 'calc(50% - 125px)',
                  top: 'calc(50% - 125px)',
                  background: 'rgba(185, 42, 177, 0.14)',
                  opacity: 0.5
                }}
              ></div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 left-4 w-52 h-24 bg-white rounded-lg shadow-lg border border-gray-200 p-4 transform rotate-2 hover:scale-105 transition-transform duration-300 animate-float">
                <div className="text-sm font-medium text-gray-700 mb-1">taketake</div>
                <div className="text-xs text-gray-600 leading-tight overflow-hidden">Ready to take your tech startup to the next level? Apply to our incubation</div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-lime-400 rounded-sm"></div>
              </div>
              
              <div className="absolute top-16 right-4 w-56 h-24 bg-white rounded-lg shadow-lg border border-gray-200 p-4 transform -rotate-1 hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="text-sm font-medium text-gray-700 mb-1">taketake</div>
                <div className="text-xs text-gray-600 leading-tight overflow-hidden">Ready to take your tech startup to the next level? Apply to our incubation</div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-400 rounded-sm"></div>
              </div>
              
              <div className="absolute bottom-16 left-12 w-44 h-20 bg-white rounded-lg shadow-lg border border-gray-200 p-3 transform rotate-1 hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '3s'}}>
                <div className="text-sm font-medium text-gray-700 mb-1">taketake</div>
                <div className="text-xs text-gray-600 leading-tight overflow-hidden">Ready to take your tech startup to the next level?</div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-lime-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncubationSection
