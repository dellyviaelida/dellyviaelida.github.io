import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Skill from './components/skill/Skill'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
