import { useParams } from "react-router-dom";
import { listCategory } from "../../../data/category";

import { listProduct } from '../../../data/product';
import { useEffect } from 'react';

import { Grid, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Category() {
    const { id } = useParams();
    const categoryChosen = listCategory.find(category => category.id == id);
    const productFilter = listProduct.filter(product => product.idCategory == id);

      useEffect(() => {
        document.title  = `Elkeh Music | ${categoryChosen.title}`;
     }, []);

  return (
    <section className="content__space">
       <h2 className="content__subtitle">{categoryChosen.title}</h2>

        <div className='product__pagination'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Grid]}
              direction={'horizontal'}
              loop={false}
              slidesPerView={3}
              grid={{ rows: 4, fill: 'row' }}
               breakpoints={{
                    0: {
                      slidesPerView: 1,
                      grid: { rows: 2 }, // sobrescreve se necessário
                    },
                    640: {
                      slidesPerView: 2,
                      grid: { rows: 2 },
                    },
                    1024: {
                      slidesPerView: 3,
                      grid: { rows: 2 },
                    },
              }}
              spaceBetween={20}
              navigation={true}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = '.swiper-button-prev';
                swiper.params.navigation.nextEl = '.swiper-button-next';
                swiper.params.pagination.el = '.swiper-pagination';
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              pagination={{ 
                clickable: true,
              }}
              >
                {productFilter.map((product, index) =>
                  <SwiperSlide key={index} className="product__group">
                    <div className="product__layer" key={index}>
                      <img src={`/assets/product/0${product.id}.png`} alt={`Produto (${product.title})`}/>
                      <p className="content__text">{product.title}</p>
                      <span className="product__tag">{product.category}</span>
                      <a href={`https://wa.me/5585921597561?text=Tenho interesse no produto "${product.title}", pode me ajudar?`} target="_blank" className="link-whatsapp">Chamar no whatsapp</a>
                    </div>
                  </SwiperSlide>
                )} 
              </Swiper>
        </div>

    </section>
  )
}

export default Category