# XCUXION Landing Page

A modern, responsive landing page for XCUXION - a technology consulting and startup incubation company.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**:
  - Responsive navigation with mobile menu
  - Working FAQ accordion
  - Auto-scrolling testimonials carousel
  - Smooth scrolling navigation
- **Performance Optimized**: Built with Next.js for optimal loading and SEO

## Core Sections

1. **Hero Section**: Main landing area with call-to-action
2. **Services Section**: 3-column grid showcasing company services
3. **Workflow Section**: Step-by-step process visualization
4. **Incubation Section**: Startup acceleration program details
5. **Why Choose Us Section**: Company benefits and features
6. **Testimonials Section**: Customer reviews with carousel
7. **FAQ Section**: Collapsible frequently asked questions
8. **Contact Section**: Contact form with validation
9. **Footer**: Company information and links

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Responsive Design**: CSS Grid and Flexbox layouts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xcuxion-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Responsive navigation
│   ├── HeroSection.tsx      # Hero section with floating cards
│   ├── ServicesSection.tsx  # Services grid
│   ├── WorkflowSection.tsx  # Process steps
│   ├── IncubationSection.tsx # Incubation program
│   ├── ConfidenceSection.tsx # Why choose us
│   ├── ReviewsSection.tsx   # Testimonials carousel
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Footer with links
└── public/
    └── assets/              # Images and static assets
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Key Features Implemented

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-out navigation
- Smooth scrolling to sections

### Interactive Components
- **FAQ Accordion**: Click to expand/collapse questions
- **Testimonials Carousel**: Auto-scrolling with manual controls
- **Floating Cards**: Animated cards with hover effects

### Modern CSS Techniques
- CSS Grid for complex layouts
- Flexbox for component alignment
- Custom animations with CSS keyframes
- Responsive typography scaling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Optimized bundle size
- Efficient CSS with Tailwind

## License

This project is proprietary to XCUXION.

## Contact

For questions about this project, please contact the development team.
