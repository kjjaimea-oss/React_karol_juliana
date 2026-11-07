const estudios = [
  {
    tipo: 'Pregrado',
    titulo: 'Ingeniería de Sistemas',
    institucion: 'Universidad Francisco de Paula Santander Ocaña',
    anio: '2023 - Actualidad',
    color: 'primary',
    icono: 'bi-mortarboard-fill',
  },
  {
    tipo: 'Curso',
    titulo: 'Desarrollo web con React',
    institucion: 'Plataforma de cursos en línea',
    anio: '2026',
    color: 'success',
    icono: 'bi-laptop',
  },
  {
    tipo: 'Certificación',
    titulo: 'Git y GitHub para principiantes',
    institucion: 'Plataforma de cursos en línea',
    anio: '2025',
    color: 'warning',
    icono: 'bi-patch-check-fill',
  },
  {
    tipo: 'Bachillerato',
    titulo: 'Bachiller Académico',
    institucion: 'Institución Educativa José Eusebio Caro',
    anio: '2019 - 2024',
    color: 'danger',
    icono: 'bi-book-fill',
  },
]

function Formacion() {
  return (
    <section id="formacion" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          <i className="bi bi-mortarboard-fill text-success me-2"></i>
          Formación académica
        </h2>

        <div className="row g-4">
          {estudios.map((e) => (
            <div className="col-12 col-md-6 col-lg-3" key={e.titulo}>
              <div className={`card h-100 border-${e.color} shadow-sm`}>
                <div className={`card-header text-bg-${e.color}`}>
                  <i className={`bi ${e.icono} me-2`}></i>
                  {e.tipo}
                </div>
                <div className="card-body">
                  <h3 className="h5 card-title">{e.titulo}</h3>
                  <p className="card-text text-muted mb-0">{e.institucion}</p>
                </div>
                <div className="card-footer text-muted">
                  <i className="bi bi-calendar-event me-2"></i>
                  {e.anio}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Formacion