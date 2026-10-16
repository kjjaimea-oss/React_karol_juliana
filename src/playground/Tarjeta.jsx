function Tarjeta() {
    return (
    <div className="card mx-auto my-4" style={{ maxWidth: "20rem" }}>
        <div className="card-body">
        <h5 className="card-title">Software Base vs. Software Web</h5>
        <p className="card-text">Un sistema operativo actúa como el motor intermediario
            entre el usuario y la computadora; 
            por su parte, una aplicación web aprovecha esa infraestructura para brindar herramientas e interfaces interactivas
            desde cualquier navegador.</p>
        <button className="btn btn-primary">Ver más</button>
        </div>
    </div>
    );
}

export default Tarjeta;