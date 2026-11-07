function Perfil() {
    return (
    <section id="perfil" className="py-5 bg-light">
        <div className="container">
        <div className="row align-items-center g-4">
            <div className="col-12 col-md-4 text-center">
            <img
                src="https://cdn.jsdelivr.net/gh/kjjaimea-oss/React_karol_juliana/src/assets/foto.png"
                alt="Fotografía de perfil"
                className="img-fluid rounded-circle border border-4 border-primary shadow"
                style={{ maxWidth: '250px' }}
            />
            </div>

            <div className="col-12 col-md-8 text-center text-md-start">
            <h1 className="display-5 fw-bold text-black">Karol Juliana Jaime Arenas</h1>
            <h2 className="h4 text-primary">Estudiante de Ingeniería de Sistemas</h2>
            <span className="badge text-bg-success">Desarrollador Frontend Junior</span>

            <ul className="list-unstyled mt-3">
                <li>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                Ocaña, Norte de Santander
                </li>
                <li>
                <i className="bi bi-envelope-fill text-warning me-2"></i>
                kjjaimea@ufpso.edu.co
                </li>
            </ul>

            <p className="lead">
                Apasionada por el desarrollo web y la tecnología. Me gusta crear
                interfaces claras y funcionales con React y Bootstrap, y estoy
                siempre aprendiendo nuevas herramientas.
            </p>

            <a href="mailto:kjjaimea@ufpso.edu.co" className="btn btn-primary me-2">
                <i className="bi bi-send-fill me-2"></i>
                Contáctame
            </a>
            <a href="#sobre-mi" className="btn btn-outline-success">
                Conóceme más
            </a>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Perfil