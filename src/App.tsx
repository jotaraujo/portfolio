import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-sans antialiased selection:bg-primary selection:text-ink">
      <Navbar />
      <Hero />
      <main className="pt-28 p-12 flex flex-col items-center justify-center gap-12 overflow-hidden">
        {/* As seções serão adicionadas aqui */}
      </main>
    </div>
  )
}
