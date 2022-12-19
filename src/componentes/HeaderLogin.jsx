const Brand = ({logo}) => {
    return(
        <header>
            <img src={logo} alt="Logo Tec" className="d-block m-auto mb-3" width="70" />
            <h1 className="fw-normal text-center mb-2">Sign in</h1>
            <p className="fw-light text-center mb-4">Ingresa tu email o usuario y contraseña.</p>
        </header>
    )
}

export default Brand;