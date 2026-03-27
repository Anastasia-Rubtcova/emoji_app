import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Emoji } from './components/ListCard/ListCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Emoji/>
  )
}

export default App
