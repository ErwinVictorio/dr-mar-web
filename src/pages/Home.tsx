import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

function Home() {
  return (
    <>
      {/*  Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* ABout Section */}
      <About />
      {/* Services */}
      <Services />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />

    </>
  )
}

export default Home