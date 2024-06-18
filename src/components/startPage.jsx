import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import '../css/startPage.css';
import Logo from '../img/logo/Logo-White-sf.png';
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
        <h1 className='logoName'>AMI</h1>
        <p className='brandText'>
          Tu compañero en el camino hacia una vida más saludable. 
          Con la mezcla de tecnología avanzada y un enfoque pensado en ti
        </p>
        <p className='brandText'> 
          <strong> ¡Es hora de cuidar de ti de una manera fácil y divertida! ¡Únete!</strong>
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
