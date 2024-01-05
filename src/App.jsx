import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full h-svh text-white flex flex-col items-center'>
        <Navbar></Navbar>
      </main>
    </>
  )
}

export default App
