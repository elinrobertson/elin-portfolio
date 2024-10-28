import About from "./components/About"
import BlurBackground from "./components/BlurBackground"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Contact  from "./components/Contact"


const App = () => {
  return (
   <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        {/* <Navbar /> */}
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
   </>
  )
}

export default App