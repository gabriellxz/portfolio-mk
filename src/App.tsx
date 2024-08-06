import Footer from "./components/Footer"
import Header from "./components/Header"
import MainAbout from "./components/Main-about"
import MainContact from "./components/Main-contact"
import MainInicio from "./components/Main-inicio"
import MainProjects from "./components/Main-projects"

function App() {
  return (
    <div className="w-full">
      <Header />
      <div>
        <MainInicio />
      </div>
      <div>
        <MainAbout />
      </div>
      <div>
        <MainProjects />
      </div>
      <div>
        <MainContact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
