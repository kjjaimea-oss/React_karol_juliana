const tecnicas = [
  { nombre: 'React', nivel: 70, color: 'primary' },
  { nombre: 'Bootstrap', nivel: 80, color: 'success' },
  { nombre: 'Java', nivel: 65, color: 'warning' },
  { nombre: 'Git y GitHub', nivel: 60, color: 'danger' },
]

const blandas = [
  { nombre: 'Trabajo en equipo', color: 'primary' },
  { nombre: 'Responsabilidad', color: 'success' },
  { nombre: 'Comunicación', color: 'warning' },
  { nombre: 'Adaptabilidad', color: 'danger' },
  { nombre: 'Resolución de problemas', color: 'primary' },
]

function Habilidades() {
  return (
    <section id="habilidades" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-black">
          <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
          Habilidades
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-4">
                  <i className="bi bi-code-slash text-primary me-2"></i>
                  Habilidades técnicas
                </h3>

                {tecnicas.map((h) => (
                  <div className="mb-3" key={h.nombre}>
                    <div className="d-flex justify-content-between">
                      <span>{h.nombre}</span>
                      <span className="text-muted">{h.nivel}%</span>
                    </div>
                    <div className="progress" style={{ height: '12px' }}>
                      <div
                        className={`progress-bar bg-${h.color}`}
                        role="progressbar"
                        style={{ width: `${h.nivel}%` }}
                        aria-valuenow={h.nivel}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-4">
                  <i className="bi bi-people-fill text-success me-2"></i>
                  Habilidades blandas
                </h3>

                <div className="d-flex flex-wrap gap-2">
                  {blandas.map((h) => (
                    <span
                      className={`badge rounded-pill text-bg-${h.color} fs-6`}
                      key={h.nombre}
                    >
                      {h.nombre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades