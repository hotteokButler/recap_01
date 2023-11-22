import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import MovieLi from '../components/MovieLi';
import { FcFilmReel } from "react-icons/fc";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MainIntroSlide() {
  const loader_data = useLoaderData();
  const { results } = loader_data;

  return (
    <div className='pt-4 pb-10'>
      <h2 className='font-bold text-3xl pb-4 flex items-center'><FcFilmReel className='inline-block mr-3' /><span>NOW PLAYING</span></h2>
      <Swiper
        wrapperTag='ul'
        slidesPerView={1.4}
        spaceBetween={20}
        grabCursor={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          480: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween:30,
          },
          1080 : {
            slidesPerView: 6.5,
          }
        }}
        className='mySwiper'
      >
        {results.map((movie, idx) => (
          <SwiperSlide key={`movie_${idx}`} tag='li' className="pb-[5%]">
            <MovieLi key={idx} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainIntroSlide;
