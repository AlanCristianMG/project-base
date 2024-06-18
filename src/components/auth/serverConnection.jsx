// Importar React y los hooks necesarios desde la biblioteca React
import React, { useEffect, useState } from 'react';

// Importar Axios para realizar solicitudes HTTP
import axios from 'axios';

// Definir el componente funcional App
const App = () => {
  // Definir un estado local 'roles' utilizando el hook useState
  const [roles, setRoles] = useState([]);

  // Utilizar el hook useEffect para realizar la solicitud al backend cuando el componente se monta
  useEffect(() => {
    // Realizar una solicitud GET al servidor backend (asegúrate de usar el puerto correcto)
    axios.get('http://localhost:3001')
      .then(response => {
        // Si la solicitud es exitosa, actualizar el estado 'roles' con los datos recibidos
        setRoles(response.data);
      })
      .catch(error => {
        // Si hay un error en la solicitud, imprimirlo en la consola
        console.error('Error al obtener roles:', error);
      });
  }, []); // El segundo argumento vacío asegura que la solicitud se realice solo una vez al montar el componente

  // Renderizar la interfaz de usuario del componente
  return (
    <div>
      {/* Encabezado */}
      <h1>Roles de Usuario</h1>

      {/* Lista de roles */}
      <ul>
          {roles.map(role => (
            <li key={role.id_rol}>{role.Nombre}</li>
          ))}
      </ul>

    </div>
  );
};

// Exportar el componente App para su uso en otros archivos
export default App;

