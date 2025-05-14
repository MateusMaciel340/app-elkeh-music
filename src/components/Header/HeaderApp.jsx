import './HeaderApp.css'
import logoHeader from '../../assets/logo-header.png';

import { listSocial } from '../../data/social.js';
import { Link } from 'react-router';

function HeaderApp() {

  return (
    <>
       <header className="header">
        <div className="header__logo">
            <img src={logoHeader} alt="Imagem de duas guitarras" className="header__image"/>

            <h1 className="header__title">
                Elkeh<span className="header__emphasis">Music</span>
            </h1>
        </div>

         <nav className="header__nav">
          <Link className="header__link" to="/">Home</Link> 
          <Link className="header__link" to="/product">Produtos</Link>
          <Link className="header__link" to="/about">Sobre</Link>
          <Link className="header__link" to="/contact">Contato</Link>
        </nav>

        <ul className="header__social">
          {listSocial.map((social, index) =>
           <a key={index} href={social.link} target="_blank" className="header__link">
            <img src={`/assets/social/${social.icon}.svg`} alt={`Icone do ${social.title}`}/>
           </a>
          )}
        </ul>
    </header>
    </>
  )
}

export default HeaderApp;