/**
 * Main App component with providers
 */
import { ThemeProvider, ScrollProvider } from '@/contexts';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero, About, Skills, Projects, Contact } from '@/components/sections';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-bg">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
