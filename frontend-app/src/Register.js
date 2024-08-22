import './login.css'
import React, { useState } from 'react';

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      setMessage('Las contraseñas coinciden.');
      // Aquí puedes añadir la lógica para enviar los datos al servidor
    } else {
      setMessage('Las contraseñas no coinciden.');
    }
  };

  return (
    <div className='card-form'>
      <h1>Crea una Cuenta</h1>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label className='text-input' htmlFor='username'>Tu nombre</label>
        <div className='input-email'>
          <input type='text' maxLength='30' className='email' id='username' name='name' required placeholder='Nombre' />
        </div>
        <label className='text-input' htmlFor='lastname'>Tu apellido</label>
        <div className='input-email'>
          <input type='text' maxLength='30' className='email' id='lastname' name='name' required placeholder='Apellido' />
        </div>
        <label className='text-input' htmlFor='Address'>Tu dirección</label>
        <div className='input-email'>
          <input type='text' maxLength='30' className='email' id='Address' name='name' required />
        </div>
        <label className='text-input' htmlFor='email'>Tu correo</label>
        <div className='input-email'>
          <input type='email' maxLength='30' className='email' id='email' name='email' required />
        </div>
        <label className='text-input' htmlFor='password'>Contraseña</label>
        <div className='input-email'>
          <input 
            type='password' 
            maxLength='30' 
            className='email' 
            id='password' 
            name='password' 
            placeholder='Como mínimo 6 caracteres' 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <p className='information'> La contraseña debe contener al menos seis caracteres. </p>
        <label className='text-input' htmlFor='confirmPassword'>Vuelve a escribir la contraseña</label>
        <div className='input-email'>
          <input 
            type='password' 
            maxLength='30' 
            className='email' 
            id='confirmPassword' 
            name='confirmPassword' 
            required 
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <p style={{ color: password === confirmPassword ? 'green' : 'red' }}>
          {message}
        </p>
        <div className='container-input'>
          <input type='submit' className='button-continue' value='Continuar' />
        </div>
      </form>
    </div>
  );
}

export default Register;