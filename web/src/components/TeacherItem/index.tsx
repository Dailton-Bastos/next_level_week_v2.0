import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/36246937?s=460&u=9beb0f15e8eef3130f6a1f565ee683cc401f3d6a&v=4'
          alt='Dailton Bastos'
        />

        <div>
          <strong>Dailton Bastos</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        <br />
        Aut cupiditate ab enim voluptatibus optio deleniti alias cum, repellat
        minus beatae laborum ex dicta eveniet quibusdam illum architecto
        voluptatum iure ad.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsAppIcon} alt='WhatsApp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
