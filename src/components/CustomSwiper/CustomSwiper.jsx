import { Swiper, SwiperSlide } from 'swiper/react';

import { listSlide } from '../../data/slide.js';
import './CustomSwiper.css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

function CustomSwiper() {
  return (
    <section>
    <div className="swiper-pagination"></div>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar]}
      direction={'horizontal'}
      loop={true}
      slidesPerView={1}
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
      {listSlide.map((slide, index) =>
        <SwiperSlide key={index}>
          <img src={`/assets/slide/${slide.image}.png`} alt={`Slide apresentação (${slide.title})`}/>
        </SwiperSlide>
      )} 
    </Swiper>

    <div className="swiper-button-prev" />
    <div className="swiper-button-next" />
    </section>
  )
}

export default CustomSwiper;