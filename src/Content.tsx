import React, { useState } from 'react';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from 'react-router-dom';
import { useStore } from './store'; 


const Content = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {

    // Estado para manejar si está cargando o no
  const [loading, setLoading] = useState(false);
  const [rut, setRut] = useState('')
  const [password, setPassword] = useState('');
  const setToken = useStore((state: { setToken: any; }) => state.setToken);
  const navigate = useNavigate(); 

  // Función que se ejecuta al hacer clic en el botón "Confirmar"
  const handleConfirmClick = async () => {
    setLoading(true); // Cambia el estado a "cargando"

    // Simula una solicitud de red o algún proceso
    try {
      // Enviar los datos al microservicio 1
      const response = await fetch('https://api.tu-microservicio.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rut, password }),
      });

      const data = await response.json();

      // Guardar accessToken y refreshToken en Zustand
      setToken(data.accessToken, data.refreshToken);

      // Mostrar un mensaje de éxito o redirigir al usuario
      alert('Login exitoso');
    } catch (error) {
      console.error('Error en el login', error);
      alert('Hubo un error, intenta de nuevo');
    } finally {
      setLoading(false); // Termina el loading
    }
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
