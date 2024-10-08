import React from 'react'
import './login.css'

function RegisterButton() {
  return (
    <div className='new-user'>
        <div className='text-new'>
            <h5>¿Eres nuevo en Amazon?</h5>
        </div>
        <div class='container-button'>
            <button type='submit' class='button-Create'>Crea tu cuenta de Amazon</button>
          </div>
    </div>
  )
}

export default RegisterButton;
