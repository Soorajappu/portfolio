import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import Index from "./components/Index"
import { Routes, Route, BrowserRouter } from "react-router-dom"


function App() {
  

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/portfolio" element={<Index />} />
                <Route path="/portfolio/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
