import './Home.css';

import { listCategory } from '../../../data/category';
import { listMark } from '../../../data/mark';
import logoStars from '../../../assets/icon-stars.png';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
          document.title  = 'Elken Music | Home';
  }, []);

  return (
    <>
      <section className="content__category content__space">
            <h2 className="content__subtitle">Categorias</h2>

            <div className="category__group">
              {listCategory.map((category, index) =>
                 <div className="category__layer" key={index}>
                    <img src={`/assets/category/${category.img}.png`} alt={`Categoria - ${category.title}`}/>
                    <h2 className="category__title">{category.title}</h2>
                    <img src={logoStars}/>
                    <a href={`https://wa.me/85991378240?text=Tenho interesse na categoria (${category.title}), pode me ajudar?`} target="_blank" className="link-whatsapp">
                        Chamar no whatsapp
                    </a>
                  </div>
              )}
            </div>
        </section>

        <section className="content__mark content__space">
            <h2 className="content__subtitle">Nossas marcas</h2>

            <div className="mark__group">
              {listMark.map((mark, index) => 
                <div className="mark__layer" key={index}>
                  <h3 className="mark__title">{mark.title}</h3>
                </div>
              )}
            </div>
        </section>
    </>
  )
}

export default Home;