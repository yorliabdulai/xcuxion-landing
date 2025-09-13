"use client"

import { Home } from "lucide-react"
import Image from "next/image"

const ConfidenceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-80">
              {/* Background Shape - Tilted */}
              <div 
                className="absolute inset-0 bg-lime-100 rounded-lg transform -rotate-2"
                style={{
                  background: '#E0E8BC'
                }}
              ></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-lime-100 rounded-lg overflow-hidden" style={{background: '#E0E8BC'}}>
                <Image
                  src="/assets/digital-transformation-technolog 1.png"
                  alt="Digital transformation technology illustration"
                  width={566}
                  height={355}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Pre-heading */}
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-16 h-px bg-gray-300"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
                <Home size={16} className="text-gray-500" />
              </div>
              <span className="mx-3">Why choose us</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Launch Your Tech Journey with Confidence
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Turn Your Tech Vision into Reality: Choose XCUXION for Measurable Success.
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                className="p-4 rounded-lg border"
                style={{
                  background: 'rgba(170, 206, 0, 0.07)',
                  borderColor: 'rgba(148, 180, 0, 0.16)'
                }}
              >
                <div className="flex items-center text-sm font-medium" style={{color: '#657B00'}}>
                  <span className="mr-2">⦿</span>
                  <span>Proven track record</span>
                </div>
              </div>
              
              <div 
                className="p-4 rounded-lg border"
                style={{
                  background: 'rgba(170, 206, 0, 0.07)',
                  borderColor: 'rgba(148, 180, 0, 0.16)'
                }}
              >
                <div className="flex items-center text-sm font-medium" style={{color: '#657B00'}}>
                  <span className="mr-2">⦿</span>
                  <span>Network and resources</span>
                </div>
              </div>
              
              <div 
                className="p-4 rounded-lg border"
                style={{
                  background: 'rgba(170, 206, 0, 0.07)',
                  borderColor: 'rgba(148, 180, 0, 0.16)'
                }}
              >
                <div className="flex items-center text-sm font-medium" style={{color: '#657B00'}}>
                  <span className="mr-2">⦿</span>
                  <span>Scalability and Sustainability</span>
                </div>
              </div>
              
              <div 
                className="p-4 rounded-lg border"
                style={{
                  background: 'rgba(170, 206, 0, 0.07)',
                  borderColor: 'rgba(148, 180, 0, 0.16)'
                }}
              >
                <div className="flex items-center text-sm font-medium" style={{color: '#657B00'}}>
                  <span className="mr-2">⦿</span>
                  <span>Experienced Mentorship</span>
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </section>
  )
}

export default ConfidenceSection
