import React from 'react'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <>
        <section className='login-card'>
            <div>
                <img src="https://rickandmortyapi.com/api/character/avatar/517.jpeg" alt="" />
            </div>
            <div className='login-input'>
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder='RUT' />
            </div>
            <div className='login-input'>
                <FontAwesomeIcon icon={faKey} />
                <input type="text" placeholder='Contraseña' />
            </div>
            <button className='login-button'>
                Confimar
            </button>
        </section>

    </>
  )
}

export default Content