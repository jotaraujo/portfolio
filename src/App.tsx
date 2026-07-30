import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/layout/About'
import Skills from './components/layout/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-sans antialiased selection:bg-primary selection:text-ink">
      <Navbar />
      <Hero />
      <main className="overflow-hidden">
        <About />
        <Skills />
      </main>
    </div>
  )
}
