import Input from "./componentes/Input";
import { useState } from "react";
import Video from "./componentes/video";
import logo from './assets/img/logo.png';
import './assets/css/style.scss';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = (e) => {
    e.preventDefault();
    console.log(`user: ${user} pass: ${password}`)
  }

  return (
    <main id="wrap" className="d-flex justify-content-center align-items-center container mx-auto min-vh-100">
      <Video />
      <form onSubmit={sendForm} className="p-5 bg-dark text-light rounded position-relative">
        <img src={logo} alt="Logo Tec" className="d-block m-auto mb-3" width="70" />
        <h1 className="fw-normal text-center mb-2">Sign in</h1>
        <p className="fw-light text-center mb-3">Ingresa tu email o usuario<br />y contraseña</p>
        <Input 
          name="user" 
          label="Usuario o Email" 
          placeholder="Ej: Username" 
          setValue={setUser} />

        <Input 
          name="password" 
          label="Contraseña" 
          placeholder="******" 
          type="password" 
          setValue={setPassword} />

          { password === '252525' ? 
            <button id="btn" className="btn btn-lg w-100 fw-bold text-dark mt-2">ENTRAR</button> : 
            null 
          }

          <div className="d-flex align-items-center justify-content-around mt-5 mb-2">
            <a href="#" className="small link text-info">Recuperar contraseña &raquo;</a>
            <a href="#" className="small link text-info">Registrarte &raquo;</a>
          </div>

      </form>
    </main>
  );
}

export default App;
