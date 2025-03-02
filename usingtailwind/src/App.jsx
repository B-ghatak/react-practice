import { useState } from 'react'
import Cards from './components/Cards.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl text-white mb-20'>This is my React with Tailwind Handson Project</h1>
      <div className="card_container grid-cols-3 grid gap-8">
      <Cards cardtitle="This is my First Card" />
      <Cards cardtitle="This is my Second Card" />
      <Cards cardtitle="This is my Third Card" />
      </div>
    </>
  )
}

export default App
