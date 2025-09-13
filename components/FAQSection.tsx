"use client"

import { useState } from "react"
import { Home, Plus, Minus } from "lucide-react"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does XCUXION offer for tech startups?",
      answer: "XCUXION provides comprehensive technology consulting, product development, digital transformation, and incubation services. We help startups from initial concept to market launch with expert guidance, technical implementation, and business strategy."
    },
    {
      question: "How long does the incubation program typically last?",
      answer: "Our incubation program typically runs for 6-12 months, depending on the startup's needs and progress. We provide flexible timelines to ensure each startup receives the support they need to succeed."
    },
    {
      question: "What makes XCUXION different from other tech partners?",
      answer: "XCUXION combines deep technical expertise with business acumen, offering a proven track record, extensive network and resources, scalability focus, and experienced mentorship. We're committed to measurable success for every startup we work with."
    },
    {
      question: "Do you work with startups at any stage?",
      answer: "Yes, we work with startups at various stages - from early-stage ideas to established companies looking to scale. Our services are tailored to meet the specific needs and challenges of each stage of growth."
    },
    {
      question: "How can I get started with XCUXION?",
      answer: "Getting started is easy! Simply contact us through our contact form or reach out directly. We'll schedule a consultation to understand your needs and discuss how we can help bring your tech vision to life."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            {/* Pre-heading */}
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-16 h-px bg-gray-300"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
                <Home size={16} className="text-gray-500" />
              </div>
              <span className="mx-3">FAQ</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Frequently asked question
            </h2>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span className="text-gray-600">Get Answers to Your Tech Startup Questions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span className="text-gray-600">Explore Our FAQ to Learn More</span>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-6 flex items-start justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-medium text-gray-900 pr-6 flex-1 leading-relaxed">{faq.question}</span>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-300 transition-colors">
                    {openIndex === index ? (
                      <Minus size={16} className="text-gray-600" />
                    ) : (
                      <Plus size={16} className="text-gray-600" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="pb-6 pr-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
