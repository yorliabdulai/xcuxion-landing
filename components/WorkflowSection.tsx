"use client"

import { Home, Check } from "lucide-react"
import CustomCalendarIcon from "./CustomCalendarIcon"

const WorkflowSection = () => {
  const workflowSteps = [
    {
      title: "Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      isActive: false
    },
    {
      title: "Analysis", 
      description: "Our team analyzes market trends, competitor landscape, and user needs to inform strategic decisions.",
      isActive: true
    },
    {
      title: "Design",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your product.",
      isActive: false
    },
    {
      title: "Development",
      description: "We build your product using modern technologies and best practices, with continuous testing.",
      isActive: true
    },
    {
      title: "Maintenance",
      description: "We provide ongoing support, maintenance, and optimization to ensure long-term success.",
      isActive: false
    }
  ]

  return (
    <section id="workflow" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Pre-heading */}
          <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
              <Home size={16} className="text-gray-500" />
            </div>
            <span className="mx-3">WORKING PROCESS</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            How we work
          </h2>
          
          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures your project is delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>

        {/* Desktop Workflow Steps */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step Circle with Icon */}
              <div className="flex flex-col items-center">
                {/* Circle with Calendar Icon and Checkmark */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative ${
                    step.isActive 
                      ? 'bg-lime-500' 
                      : 'bg-gray-400'
                  }`}
                >
                  {/* Custom Calendar Icon with built-in checkmark */}
                  <CustomCalendarIcon 
                    size={24} 
                    className="text-white" 
                    color="white"
                  />
                </div>
                
                {/* Step Title */}
                <h3 
                  className={`text-lg font-medium text-center ${
                    step.isActive 
                      ? 'text-lime-500' 
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </h3>
              </div>
              
              {/* Connecting Dotted Line - Centered between circles */}
              {index < workflowSteps.length - 1 && (
                <div className="mx-4 flex items-center justify-center" style={{ height: '45px' }}>
                  <div className="w-16 h-px border-t-2 border-dashed border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical layout with connecting lines */}
        <div className="lg:hidden mt-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center mb-8">
              {/* Circle with Icon and Checkmark - Centered */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  step.isActive 
                    ? 'bg-lime-500' 
                    : 'bg-gray-400'
                }`}
              >
                {/* Custom Calendar Icon with built-in checkmark */}
                <CustomCalendarIcon 
                  size={20} 
                  className="text-white" 
                  color="white"
                />
              </div>
              
              {/* Step Title - Centered */}
              <h3 
                className={`text-lg font-medium text-center ${
                  step.isActive 
                    ? 'text-lime-500' 
                    : 'text-gray-400'
                }`}
              >
                {step.title}
              </h3>
              
              {/* Vertical connecting line - Centered */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute top-16 w-px h-8 border-l-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection