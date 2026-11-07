function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-black">
          <i className="bi bi-person-lines-fill text-primary me-2"></i>
          Sobre mí
        </h2>

        <div className="row g-4 align-items-center mb-5">
          <div className="col-12 col-md-5">
            <img
              src="https://picsum.photos/id/0/600/400"
              alt="Espacio de trabajo con computador"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-12 col-md-7">
            <p className="lead">
              Soy estudiante de Ingeniería de Sistemas en la Universidad
              Francisco de Paula Santander Ocaña, con interés en el desarrollo
              web y de software.
            </p>
            <p>
              Disfruto aprender nuevas tecnologías, trabajar en equipo y
              convertir ideas en proyectos funcionales. Actualmente practico
              con React, Bootstrap, Java y Git.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body">
                <h3 className="h5 text-primary">
                  <i className="bi bi-bullseye me-2"></i>
                  Objetivos laborales
                </h3>
                <ul className="mb-0">
                  <li>Trabajar como desarrolladora frontend</li>
                  <li>Participar en proyectos de software reales</li>
                  <li>Seguir creciendo como profesional</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-danger shadow-sm">
              <div className="card-body">
                <h3 className="h5 text-danger">
                  <i className="bi bi-heart-fill me-2"></i>
                  Intereses
                </h3>
                <ul className="mb-0">
                  <li>Desarrollo web</li>
                  <li>Programación orientada a objetos</li>
                  <li>Diseño de interfaces</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body">
                <h3 className="h5 text-success">
                  <i className="bi bi-star-fill me-2"></i>
                  Fortalezas
                </h3>
                <ul className="mb-0">
                  <li>Responsabilidad y constancia</li>
                  <li>Facilidad para aprender</li>
                  <li>Trabajo en equipo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi