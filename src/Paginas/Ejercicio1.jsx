// src/Ejercicio1.js
import { useState } from 'react';

function Ejercicio1() {
  const [estudios, setEstudios] = useState('primario');

  function cambioEstudios(e) {
    setEstudios(e.target.value);
  }

  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        Kevin Leandro Lis Galeano ID:797602<br />
        David Alejandro Yazo Barbosa ID: 785337<br />
        Juan Pablo Montaño Ladino ID: 604864
      </p>
      <p>
        <input 
          type="radio" 
          value="primario" 
          checked={estudios === 'primario'} 
          onChange={cambioEstudios} 
        />
        Primario
      </p>
      <p>
        <input 
          type="radio" 
          value="secundario" 
          checked={estudios === 'secundario'} 
          onChange={cambioEstudios} 
        />
        Secundario
      </p>
      <p>
        <input 
          type="radio" 
          value="universitario" 
          checked={estudios === 'universitario'} 
          onChange={cambioEstudios} 
        />
        Universitario
      </p>
      <p>
        <input 
          type="radio" 
          value="maestria" 
          checked={estudios === 'maestria'} 
          onChange={cambioEstudios} 
        />
        Maestría
      </p>
      <p>
        <input 
          type="radio" 
          value="especializacion" 
          checked={estudios === 'especializacion'} 
          onChange={cambioEstudios} 
        />
        Especialización
      </p>
      <p>
        <input 
          type="radio" 
          value="certificacion" 
          checked={estudios === 'certificacion'} 
          onChange={cambioEstudios} 
        />
        Certificación
      </p>
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default Ejercicio1;
