import { useState } from "react";
import Video from "./componentes/video";
import Input from "./componentes/Input";
import logo from './assets/img/logo.png';
import HeaderLogin from "./componentes/HeaderLogin";
import Button from "./componentes/Button";
import FooterLogin from "./componentes/FooterLogin";
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
        <HeaderLogin logo={logo} />
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
          { password === '252525' ? <Button label="ENTRAR" /> : null }
          <FooterLogin />
      </form>
    </main>
  );
}

export default App;
