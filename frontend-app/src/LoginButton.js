import React from 'react'
import './login.css'

function LoginButton() {
  return (
    <div className='new-user'>
        <div className='text-new'>
            <h5>¿Ya tienes cuenta en Amazon?</h5>
        </div>
        <div class='container-button'>
            <button type='submit' class='button-Create'>Inicia Secion</button>
          </div>
    </div>
  )
}

export default LoginButton;
