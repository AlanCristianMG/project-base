import React, { useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../css/auth.css';
import Logo_black from '../../img/logo/logo_03.png'; 
import Button1 from '../components_form/Buttons/button_1/button_1';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Button2 from '../components_form/Buttons/button_2/button_2';


// Componente de formulario de inicio de sesión
function LoginForm({ onSwitchToRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logNavigate = useNavigate();  

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4430/login', { email, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        logNavigate("/home");
      } catch (error) {
        console.log("Error al Iniciar Sesión: " + error);
        // Lógica adicional para manejar errores de inicio de sesión
      }
    }

  return (
    <form className='form' onSubmit={handleLogin}>
    <img src={Logo_black} className='logoForm' alt="" />
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
        <Button1 type="submit" text={"LogIn"}/>
        <Button2 text={"Switch to Register"} onClick={onSwitchToRegister}/>
    </form>
  );
}
 
// Componente de formulario de registro
function RegisterForm({ onSwitchToLogin }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regiterNavigate = useNavigate();  

  const handleRegister = async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:4430/register', {firstname, lastname, email, password });
    console.log(response);
    if(response.status==201){
      console.log("Usuario Registrado exitosamente")
      regiterNavigate("/auth")
    }else{
      console.log("Error al registrar")
    }
  }

  return (
    <form className='form' onSubmit={handleRegister}>
        <img src={Logo_black} className='logoForm' alt="" />
      <label>
        Firstname:
        <input type="text" name="firstname" value={firstname} onChange={(e)=> setFirstname(e.target.value) }/>
      </label>
      <label>
        Lastname:
        <input type="text" name="lastname" value={lastname} onChange={(e)=> setLastname(e.target.value) }/>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </label>
        <Button1 text={"Register"} />
      <Button2 type="button" text={"Switch to Login"} onClick={onSwitchToLogin}/>
    </form>
  );
}

// Componente principal de autenticación
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="containerBack">
      <CSSTransition
        in={isLogin}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* Enviar una función para cambiar el estado directamente */}
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      </CSSTransition>
      <CSSTransition
        in={!isLogin}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* Enviar una función para cambiar el estado directamente */}
        <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
      </CSSTransition>
    </div>
  );
};

export default Auth;
