import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHeader from "./components/MyHeader.jsx"
import MyInfo from "./components/MyInfo.jsx"
import MyGallery from "./components/MyGallery.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="container">
              <MyHeader/>
              <MyInfo/>
              <MyGallery/>
          </div>
      </>
  )
}

export default App
