import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import ArtGallery from "./components/ArtGallery"

function App() {
   return (
      <div>
         <NavBar></NavBar>
         <Home></Home>
         <About></About>
         <Portfolio></Portfolio>
         <Experience></Experience>
         <ArtGallery></ArtGallery>
         <Contact></Contact>
      </div>
   )
}

export default App
