"use client"

import { Home } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy, architecture, and implementation to help your startup make informed decisions and avoid costly mistakes.",
      highlighted: false,
      iconColor: "bg-purple-100 text-purple-600",
      cardBg: "bg-white"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Product Development",
      description: "End-to-end product development services from concept to launch, including MVP development, feature enhancement, and scaling solutions.",
      highlighted: true,
      iconColor: "bg-lime-200 text-lime-700",
      cardBg: "bg-lime-50"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Digital Transformation",
      description: "Transform your business processes with cutting-edge digital solutions that improve efficiency, reduce costs, and enhance customer experience.",
      highlighted: false,
      iconColor: "bg-purple-100 text-purple-600",
      cardBg: "bg-white"
    }
  ]

  return (
    <section id="services" className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
              <Home size={16} className="text-gray-500" />
            </div>
            <span className="mx-3">Services</span>
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What we do
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.cardBg} shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-lg p-6 ${
                service.highlighted ? 'ring-2 ring-lime-200 shadow-xl' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${service.iconColor}`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
