function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="h5 text-warning mb-1">Tu Nombre</h3>
            <p className="mb-0 small">Estudiante de Ingeniería de Sistemas</p>
          </div>

          <div className="col-12 col-md-4 text-center">
            <a
              href="https://github.com/kjjaimea-oss"
              className="text-white fs-3 mx-2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-primary fs-3 mx-2"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-danger fs-3 mx-2"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="mb-1 small">
              <i className="bi bi-c-circle text-success me-1"></i>
              {anio} Todos los derechos reservados
            </p>
            <a href="#perfil" className="small text-warning text-decoration-none">
              <i className="bi bi-arrow-up-circle me-1"></i>
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer