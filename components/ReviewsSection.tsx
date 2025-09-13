"use client"

import { useState, useEffect } from "react"
import { Home, Star } from "lucide-react"
import Image from "next/image"

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      content: "XCUXION transformed our startup from an idea to a market-ready product. Their technical expertise and business guidance were invaluable. We couldn't have achieved our goals without their support.",
      rating: 5,
      avatar: "/assets/round_profil_picture_after 1.png"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      content: "The incubation program at XCUXION provided us with everything we needed to scale our technology. Their mentorship and network connections opened doors we never knew existed.",
      rating: 5,
      avatar: "/assets/round_profil_picture_after 1.png"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Working with XCUXION was a game-changer for our startup. Their approach to product development and digital transformation helped us reach new heights in record time.",
      rating: 5,
      avatar: "/assets/round_profil_picture_after 1.png"
    }
  ]

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }
    return stars
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center mx-3">
              <Home size={16} className="text-gray-500" />
            </div>
            <span className="mx-3">Reviews</span>
            <div className="flex-1 h-px bg-gray-300 max-w-16"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Check out recent reviews
          </h2>
        </div>

        {/* Review Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {reviews.map((r, i) => (
                    <div key={i} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={r.avatar}
                            alt={r.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Name and Role */}
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900">{r.name}</h4>
                          <p className="text-sm text-gray-600">{r.role}</p>
                        </div>
                      </div>

                      {/* Review Content */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {r.content}
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center space-x-1">
                        {renderStars(r.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-lime-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
