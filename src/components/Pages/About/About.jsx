import { useEffect } from 'react';
import './About.css';

function About() {

    useEffect(() => {
        document.title  = 'Elkeh Music | Sobre';
    }, []);

  return (
    <>
      <section className="about content__space">
            <h2 className="content__subtitle">Sobre</h2>

            <div className="about__info">
                <div className="info__content">
                    <img src={"assets/logo-elken-music.jpg"} alt="Logo, Elken Music"/>
                    <h3 className="about__title">Elkeh Music</h3>
                </div>

                <div className="info__content">
                    <p className="about__text">"Descubra o som que transforma sua vida! Na nossa loja de instrumentos musicais, você encontra qualidade, variedade e os melhores preços para soltar sua criatividade. Seja iniciante ou profissional, aqui a música começa com você!"</p>
                    <p className="about__text about__emphasis">Atenciosamente, Elkeh Music - Elkana Tavares</p>
                </div>
            </div>
        </section>

        <section className="local content__space">
            <div className="local__content">
                <h2 className="content__subtitle">Onde encontrar Elkeh Music?</h2>
                <p className="content__text">Rua Oscar Gama, 103 - Pacajus, Ceará - CE, 62870-000, Brasil.</p>
                <p className="content__text">Próximo à <span className="local__emphasis"> CAIXA ECONÔMICA</span></p>
            </div>

            <div className="local__iframe">
                <iframe width="50%" height="300" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Oscar%20Gama,%20103%20-%20Pacajus,%20CE,%2062870-000+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personl trackers</a></iframe>
            </div>
        </section>
    </>
  )
}

export default About;