import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import '../css/startPage.css';
import Logo from '../img/logo/logo_03.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function StartPage() {
  const [isRotating, setIsRotating] = React.useState(false);
  const navigate = useNavigate();  // Obtiene la función de navegación desde react-router-dom

  const handleNavigate = () => {
    // Lógica o acciones antes de navegar (si es necesario)
    // Utiliza la función navigate para realizar la navegación
    navigate('/auth');
  };

  return (
    <div className="app">
      <div className="blur-bg"></div>
      <div className="content">
        <img
          src={Logo}
          alt="Logo"
          className={`logo ${isRotating ? 'rotate' : ''}`}
          onClick={() => setIsRotating(!isRotating)}
        />
        <p className='brandText'>
        Descubre cómo nuestro sistema inteligente transforma la manera en que gestionamos los residuos. Con EcoSort, clasificar la basura nunca ha sido tan fácil y eficiente. 
        </p>
        <p className='brandText'> 
          <strong> ¡Únete a nosotros en la misión de un mundo más limpio y sostenible!</strong>
        </p>
        <div className="buttons">
          <button className="button1" onClick={handleNavigate}>
            <FontAwesomeIcon className='ArrowButton' icon={faArrowRight} />
            <div className="text_1">
              Unirse
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
