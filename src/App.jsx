import { useState } from 'react'
import heroImg from './assets/foto.png'
import reactLogo from './assets/foto.png'
import viteLogo from './assets/foto.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <img src={heroImg} alt='karol' style={{width: '150px'}}/>
          <h1>mi presentacion</h1>
          <p>
            "Estudiante de ingenieria de sistemas y me encanta la programacion"
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
