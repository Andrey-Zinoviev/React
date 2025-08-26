import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHeader from "./components/MyHeader.jsx"
import MyInfo from "./components/MyInfo.jsx"
import MyImage from "./components/MyImage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="container">
              <MyHeader/>
              <div className="content">
                  <MyImage
                      src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/600x900"
                      alt="Один вдома"
                  />
                  <MyInfo />
              </div>
          </div>
      </>
  )
}

export default App
