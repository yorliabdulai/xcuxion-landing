"use client"

import { Home, Facebook, Instagram, Linkedin, Play } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-white pt-16">
      {/* Desktop Layout - Pixel Perfect from Figma */}
      <div className="hidden lg:block">
        <div className="relative max-w-7xl mx-auto px-8 section-container" style={{ width: '1440px', height: '531px' }}>
          {/* Main Container */}
          <div 
            className="absolute"
            style={{
              width: '1206px',
              height: '355px',
              left: 'calc(50% - 1206px/2)',
              top: 'calc(50% - 355px/2 + 88px)'
            }}
          >
            {/* Left Content */}
            <div 
              className="absolute"
              style={{
                width: '566px',
                height: '355px',
                left: '0px',
                top: '0px'
              }}
            >
              {/* Top Chip */}
              <div 
                className="absolute flex items-center"
                style={{
                  width: '174px',
                  height: '23px',
                  left: '0px',
                  top: '0px'
                }}
              >
                {/* Line */}
                <div 
                  className="absolute"
                  style={{
                    width: '74px',
                    height: '0px',
                    left: '0px',
                    top: '3px',
                    background: '#C2C2C2',
                    border: '1px solid #C2C2C2'
                  }}
                ></div>
                
                {/* Dot */}
                <div 
                  className="absolute rounded-full"
                  style={{
                    width: '5px',
                    height: '5px',
                    left: '74px',
                    top: '0px',
                    background: '#C2C2C2'
                  }}
                ></div>
                
                {/* Home Icon */}
                <div 
                  className="absolute"
                  style={{
                    width: '22px',
                    height: '22px',
                    left: '91px',
                    top: '0px',
                    background: '#DDDDDD',
                    borderRadius: '3.23529px'
                  }}
                >
                  <Home size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{color: '#4D4D4D'}} />
                </div>
                
                {/* Welcome Text */}
                <span 
                  className="absolute"
                  style={{
                    left: '121px',
                    top: '3px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#4D4D4D'
                  }}
                >
                  welcome to xcuxion
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 
                className="absolute"
                style={{
                  width: '566px',
                  height: '84px',
                  left: '0px',
                  top: '29px',
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '35.831px',
                  lineHeight: '42px',
                  color: '#1A1A1A'
                }}
              >
                From Idea to Impact! Your Technology Partner
              </h1>
              
              {/* Description */}
              <p 
                className="absolute"
                style={{
                  width: '566px',
                  height: '48px',
                  left: '0px',
                  top: '118px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#4D4D4D'
                }}
              >
                From initial concept to market launch, we provide the expertise to bring your tech vision to life. We navigate the complexities of technology and business, so you can focus on achieving your goals.
              </p>
              
              {/* CTA Button and Social Icons */}
              <div 
                className="absolute"
                style={{
                  width: '566px',
                  height: '50px',
                  left: '0px',
                  top: '190px'
                }}
              >
                {/* CTA Button */}
                <button 
                  className="absolute"
                  style={{
                    width: '125px',
                    height: '44px',
                    left: '0px',
                    top: '5px',
                    background: '#282828',
                    borderRadius: '7.75956px',
                    border: 'none'
                  }}
                >
                  <span 
                    className="absolute"
                    style={{
                      left: '21px',
                      top: '0px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '13px',
                      lineHeight: '50px',
                      color: '#FFFFFF'
                    }}
                  >
                    Learn more ➤
                  </span>
                </button>
                
                {/* Social Icons */}
                <div 
                  className="absolute flex"
                  style={{
                    width: '152px',
                    height: '32px',
                    left: '150px',
                    top: '9px'
                  }}
                >
                  <button 
                    className="absolute"
                    style={{
                      width: '32px',
                      height: '32px',
                      left: '0px',
                      top: '0px',
                      background: '#F0F0F0',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Play size={16} className="text-gray-400" />
                  </button>
                  
                  <button 
                    className="absolute"
                    style={{
                      width: '32px',
                      height: '32px',
                      left: '40px',
                      top: '0px',
                      background: '#F0F0F0',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Linkedin size={16} className="text-gray-400" />
                  </button>
                  
                  <button 
                    className="absolute"
                    style={{
                      width: '32px',
                      height: '32px',
                      left: '80px',
                      top: '0px',
                      background: '#F0F0F0',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Facebook size={16} className="text-gray-400" />
                  </button>
                  
                  <button 
                    className="absolute"
                    style={{
                      width: '32px',
                      height: '32px',
                      left: '120px',
                      top: '0px',
                      background: '#F0F0F0',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Instagram size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration and Floating Cards */}
            <div 
              className="absolute"
              style={{
                width: '566px',
                height: '355px',
                left: '640px',
                top: '0px'
              }}
            >
              {/* Background Circles - Enlarged to better house all floating text elements */}
              {/* Outer Circle - Enlarged to house all floating text */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '600px',
                  height: '600px',
                  left: '-17px',
                  top: '-122px',
                  background: 'rgba(170, 206, 0, 0.1)',
                  opacity: 0.5
                }}
              ></div>
              
              {/* Inner Circle - Enlarged a little bit */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '400px',
                  height: '400px',
                  left: '83px',
                  top: '-22px',
                  background: 'rgba(185, 42, 177, 0.14)',
                  opacity: 0.5
                }}
              ></div>
              
              {/* Main Illustration - Centered in inner circle with borders extending beyond */}
              <div 
                className="absolute"
                style={{
                  width: '400px',
                  height: '400px',
                  left: '83px',
                  top: '-22px'
                }}
              >
                <Image
                  src="/assets/Asset 1 1.png"
                  alt="Digital interface and web development illustration"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              
              {/* Floating Cards - All Three Visible */}
              {/* Card 1 - Top Left */}
              <div 
                className="absolute"
                style={{
                  width: '234px',
                  height: '89px',
                  left: '20px',
                  top: '90px',
                  background: '#F0F0F0',
                  boxShadow: '20px 16px 15.5px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px 16px'
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}
                >
                  taketake
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D'
                  }}
                >
                  Ready to take your tech startup to the next level? Apply to our incubation
                </div>
                <div 
                  className="absolute"
                  style={{
                    width: '23px',
                    height: '14px',
                    background: '#94B400',
                    borderRadius: '3px',
                    bottom: '8px',
                    right: '8px'
                  }}
                ></div>
              </div>
              
              {/* Ellipse for Card 1 */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '42px',
                  height: '42px',
                  left: '223px',
                  top: '70px',
                  background: 'rgba(148, 180, 0, 0.2)'
                }}
              ></div>
              
              {/* Card 2 - Top Right */}
              <div 
                className="absolute"
                style={{
                  width: '234px',
                  height: '89px',
                  left: '321px',
                  top: '159px',
                  background: '#F0F0F0',
                  boxShadow: '20px 16px 15.5px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px 16px'
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}
                >
                  taketake
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D'
                  }}
                >
                  Ready to take your tech startup to the next level? Apply to our incubation
                </div>
                <div 
                  className="absolute"
                  style={{
                    width: '23px',
                    height: '14px',
                    background: '#7F0D79',
                    borderRadius: '3px',
                    bottom: '8px',
                    right: '8px'
                  }}
                ></div>
              </div>
              
              {/* Ellipse for Card 2 */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '42px',
                  height: '42px',
                  left: '524px',
                  top: '147px',
                  background: 'rgba(224, 34, 255, 0.2)'
                }}
              ></div>
                  
              {/* Card 3 - Bottom Left */}
              <div 
                className="absolute"
                style={{
                  width: '234px',
                  height: '89px',
                  left: '70px',
                  top: '244px',
                  background: '#F0F0F0',
                  boxShadow: '20px 16px 15.5px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  padding: '12px 16px'
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}
                >
                  taketake
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '11px',
                    lineHeight: '13px',
                    color: '#4D4D4D'
                  }}
                >
                  Ready to take your tech startup to the next level? Apply to our incubation
                </div>
                <div 
                  className="absolute"
                  style={{
                    width: '23px',
                    height: '14px',
                    background: '#94B400',
                    borderRadius: '3px',
                    bottom: '8px',
                    right: '8px'
                  }}
                ></div>
              </div>
              
              {/* Ellipse for Card 3 */}
              <div 
                className="absolute rounded-full"
                style={{
                  width: '42px',
                  height: '42px',
                  left: '273px',
                  top: '232px',
                  background: 'rgba(148, 180, 0, 0.2)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Responsive */}
      <div className="lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="space-y-8">
            {/* Top Chip */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-px bg-gray-300"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center">
                <Home size={16} className="text-gray-500" />
              </div>
              <span className="text-sm text-gray-500 font-normal">welcome to xcuxion</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              From Idea to Impact! Your Technology Partner
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From initial concept to market launch, we provide the expertise to bring your tech vision to life. We navigate the complexities of technology and business, so you can focus on achieving your goals.
            </p>

            {/* CTA Button and Social Icons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button 
                className="px-6 py-3 text-white font-medium rounded-lg transition-colors hover:bg-gray-700"
                style={{
                  background: '#282828',
                  borderRadius: '7.75956px'
                }}
              >
                Learn more ➤
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                  <Play size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                  <Linkedin size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                  <Facebook size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                  <Instagram size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Mobile Illustration */}
            <div className="relative w-full h-80 mt-8">
              {/* Background Circles */}
              <div className="absolute top-4 right-4 w-40 h-40 bg-lime-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
              
              {/* Main Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/Asset 1 1.png"
                  alt="Digital interface and web development illustration"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain max-w-sm"
                  priority
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 left-4 w-44 h-20 bg-white rounded-lg shadow-lg border border-gray-200 p-3 transform rotate-2 animate-float">
                <div className="text-sm font-medium text-gray-700 mb-1">taketake</div>
                <div className="text-xs text-gray-600 leading-tight overflow-hidden">Ready to take your tech startup to the next level? Apply to our incubation</div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-lime-400 rounded-sm"></div>
              </div>
              
              <div className="absolute top-16 right-4 w-44 h-20 bg-white rounded-lg shadow-lg border border-gray-200 p-3 transform -rotate-1 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-sm font-medium text-gray-700 mb-1">taketake</div>
                <div className="text-xs text-gray-600 leading-tight overflow-hidden">Ready to take your tech startup to the next level? Apply to our incubation</div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-400 rounded-sm"></div>
              </div>
              
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-white rounded-lg shadow-lg border border-gray-200 p-3 transform rotate-1 animate-float" style={{animationDelay: '2s'}}>
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

export default HeroSection