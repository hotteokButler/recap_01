import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import MovieLi from '../components/MovieLi';

function MainIntroSlide() {
  const loader_data = useLoaderData();
  const { results } = loader_data;

  return (
    <>
      <Swiper
        wrapperTag='ul'
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {results.map((movie, idx) => (
          <SwiperSlide key={`movie_${idx}`} tag="li">
            <MovieLi key={idx} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MainIntroSlide;
