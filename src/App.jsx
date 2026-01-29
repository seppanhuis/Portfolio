import { Navbar } from '../src/layout/Navbar.jsx'
import { Hero } from '../src/sections/Hero.jsx'
import { About } from '../src/sections/About'
import { Projects } from '../src/sections/Projects'
import { Experience } from '../src/sections/Experience'
import { Contact } from '../src/sections/Contact'

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Sep in 't panhuis. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
