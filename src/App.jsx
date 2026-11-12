import React from 'react'
import Header from './components/Header'
import Ismat from './components/Ismat'
import Muza from './components/Muza'
import Aziz from './components/Aziz'

// Figma «Git Jamoaviy» dagi tartib:
//   Header (Mubina) → «Для розничных магазинов» (Ismat)
//   → «Ответы на вопросы» (Muzaffar) → «База знаний» + footer (Aziz)
const App = () => {
  return (
    <div className="min-h-screen bg-[#fbfdfc]">
      <Header />
      <Ismat />
      <Muza />
      <Aziz />
    </div>
  )
}

export default App
