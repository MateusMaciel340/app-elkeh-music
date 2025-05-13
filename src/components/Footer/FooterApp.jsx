import './FooterApp.css'

import { listCategory } from '../../data/category.js';
import { listSocial } from '../../data/social.js';

import logoHeader from '../../assets/logo-header.png';

function FooterApp() {

  return (
    <>
       <footer className="footer">
        <div className="footer__group-content">
            <div className="footer__presentation">
                <div className="footer__logo">
                    <img src={logoHeader} className="Imagem de duas guitarras"/>
                    <h1 className="footer__title">
                        Elken<span className="footer__emphasis">Music</span>
                    </h1>
                </div>

                <p className="footer__text"><strong>Apaixonado por música?</strong> Venha conhecer a loja onde a melodia ganha vida! Aqui você encontra instrumentos musicais de qualidade, desde violões, guitarras, acessórios e mais.</p>
            </div>
            
            <div className="footer__presentation">
                 <div className="footer__logo">
                    <img src={logoHeader} className="Imagem de duas guitarras"/>
                    <h1 className="footer__title">Categorias</h1>
                </div>

                <ul className="footer__menu">
                    {listCategory.map((category, index) =>
                        <li key={index} className="footer__item">{category.title}</li>
                    )}
                </ul>
            </div>

            <div className="footer__presentation">
                <div className="footer__logo">
                    <img src={logoHeader} className="Imagem de duas guitarras"/>
                    <h1 className="footer__title">Redes Sociais</h1>
                </div>

                <ul className="footer__social">
                {listSocial.map((social, index) =>
                 <a key={index} href={social.link} target="_blank" className="footer__social-item">
                    {social.title}
                   <img src={`/assets/social/${social.icon}.svg`} alt={`Icone do ${social.title}`}/>
                 </a>
                )}
                </ul>
            </div>
        </div>

        <div className="footer__group-text">
            <p className="footer__text">® <span id="ano"></span> Elkeh Music. Todos os direitos reservados. Serviço e comercialização de produtos musiciais.</p>
            <p className="footer__text">Elkeh Music é uma loja de venda e comercialização de produtos musiciais, além de itens variados. O serviço Elkeh Music é comercializado por Elkana Tavares, Rua Oscar Gama, 103 - Pacajus, Ceará - CE, 62870-000, Brasil.</p>
        </div>
    </footer>

    </>
  )
}

export default FooterApp;