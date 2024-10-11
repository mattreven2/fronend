import React, { useEffect } from 'react';
import { useStore } from './store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Content from './Content';
import Home from './Home';

const App = () => {
  const accessToken = useStore(state => state.accessToken);

  // Función que se llamará cuando el login sea exitoso
  const handleLoginSuccess = () => {
    console.log('Login exitoso, el token se ha guardado correctamente.');
    // Aquí puedes manejar cualquier lógica adicional después del login exitoso
  };

  useEffect(() => {
    if (accessToken) {
      // Verifica el token con el microservicio
      fetch('https://api.tu-microservicio.com/validateToken', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }).then(response => {
        if (!response.ok) {
          console.error('Token no válido');
        }
      });
    }
  }, [accessToken]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={accessToken ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Content onLoginSuccess={handleLoginSuccess} />} />
      </Routes>
    </Router>
  );
};

export default App;
