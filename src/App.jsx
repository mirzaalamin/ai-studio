import { useState } from "react"
import CreateImage from "./components/CreateImage"
import Downloads from "./components/Downloads"
import Glow from "./components/Glow"
import Header from "./components/Header"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration"


function App() {
  const [route, setRoute] = useState('create')
  const [imageData, setImageData] = useState([])
  const [downloadedImages, setDownloadedImages] = useState([])


  return (

    <Router>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* <!-- Header/Logo --> */}
        <Header />

        {/* <!-- Glow --> */}
        <Glow />

        {/* <!-- Main Content --> */}
        <Routes>
          <Route path="/" element={<CreateImage downloadedImages={downloadedImages} setDownloadedImages={setDownloadedImages} imageData={imageData} setImageData={setImageData} />} />
          <Route path="/downloads" element={<Downloads downloadedImages={downloadedImages} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App
