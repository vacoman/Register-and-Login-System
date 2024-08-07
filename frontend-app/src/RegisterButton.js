import React from 'react'
import './login.css'

export default function RegisterButton() {
  return (
    <div className='new-user'>
        <div className='text-new'>
            <h5>¿Eres nuevo en Amazon?</h5>
        </div>
        <div id='container-button'>
            <button type='submit' id='button-Create'>Crea tu cuenta de Amazon</button>
          </div>
    </div>
  )
}
