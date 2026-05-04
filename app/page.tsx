import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Servizi from '@/components/Servizi'
import Numeri from '@/components/Numeri'
import Team from '@/components/Team'
import Contatti from '@/components/Contatti'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servizi />
      <Numeri />
      <Team />
      <Contatti />
      <Footer />
    </main>
  )
}
