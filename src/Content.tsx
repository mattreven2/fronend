import React, { useState } from 'react';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from 'react-router-dom';

const Content = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {

    // Estado para manejar si está cargando o no
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  // Función que se ejecuta al hacer clic en el botón "Confirmar"
  const handleConfirmClick = () => {
    setLoading(true); // Cambia el estado a "cargando"

    // Simula una solicitud de red o algún proceso
    setTimeout(() => {
      setLoading(false); // Finaliza la carga después de 2 segundos (simulación)
       onLoginSuccess();;  // Notificar que el login fue exitoso
       navigate('/home'); // Redirigir a la pantalla Home
    }, 2000);
  };

  return (
    <>
      <section className='login-card'>
        <div>
          <img src="https://media.istockphoto.com/id/1303877287/es/vector/lista-de-verificaci%C3%B3n-de-papel-y-pictograma-plano-l%C3%A1piz.jpg?s=612x612&w=0&k=20&c=hQYGjkR8CBZEElNgfOOSb4xF5o9rPPcaITEev-7ZTQI=" 
          alt="User Avatar" 
          style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <div className='login-input'>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder='RUT' />
        </div>
        <div className='login-input'>
          <FontAwesomeIcon icon={faKey} />
          <input type="password" placeholder='Contraseña' />
        </div>
        <button className='login-button'onClick={handleConfirmClick} disabled={loading}>
            {loading ? <div className="spinner"></div> : 'Confirmar'}
        </button>
      </section>
    </>
  );
}

export default Content;
