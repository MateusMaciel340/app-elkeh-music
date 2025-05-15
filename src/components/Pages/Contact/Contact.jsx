import { useEffect } from 'react';
import './Contact.css';

function Contact() {
    useEffect(() => {
            document.title  = 'Elkeh Music | Contato';
    }, []);

  return (
    <>
         <section className="content__space">
            <h2 className="content__subtitle">Contato</h2>

            <div className="content__contact">
                <div className="contact__content">
                    <img src={"assets/social/instagram-elkeh-music.png"}alt="Instagram da Loja Elkeh Music" className="contact__image"/>
                    <p className="content__text">@elkeh_music</p>

                    <div className="contact__button">
                        <a href="https://www.instagram.com/elkeh_music/" target="_blank" className="contact__link">Instagram</a>
                        <a href="https://wa.me/+55859921597561" target="_blank" className="contact__link-whatsapp">Whatsapp</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact;