import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Features/>
    <Card/>
    </>
  )
}

export default App
