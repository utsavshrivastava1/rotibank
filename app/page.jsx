import Header from "@/components/header"
import Hero from "@/components/hero"
import HowToHelp from "@/components/how-to-help"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowToHelp />
      <Footer />
    </div>
  )
}
