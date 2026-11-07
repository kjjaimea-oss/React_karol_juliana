import { useState } from 'react'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#perfil">
          <i className="bi bi-person-badge me-2"></i>
          Karol Juliana Jaime Arenas
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Mostrar menú"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${abierto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#perfil" onClick={() => setAbierto(false)}>Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi" onClick={() => setAbierto(false)}>Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formacion" onClick={() => setAbierto(false)}>Formación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades" onClick={() => setAbierto(false)}>Habilidades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar