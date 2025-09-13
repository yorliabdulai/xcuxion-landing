import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WorkflowSection from '@/components/WorkflowSection'
import IncubationSection from '@/components/IncubationSection'
import ConfidenceSection from '@/components/ConfidenceSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="min-h-screen bg-white max-w-full">
        <Navbar />
        <div className="relative">
          <HeroSection />
        </div>
        <div className="relative">
          <ServicesSection />
        </div>
        <div className="relative">
          <WorkflowSection />
        </div>
        <div className="relative">
          <IncubationSection />
        </div>
        <div className="relative">
          <ConfidenceSection />
        </div>
        <div className="relative">
          <ReviewsSection />
        </div>
        <div className="relative">
          <FAQSection />
        </div>
        <div className="relative">
          <ContactSection />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </main>
    </div>
  )
}
