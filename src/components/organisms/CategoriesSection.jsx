"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from "../molecules/CategoryCard"
import HeaderSection from "../molecules/HeaderSection"
import Thumbnail from "@/assets/thumbnail_category.jpg"
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

function CategoriesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <HeaderSection title="فذكر" href="/categories" />
      <div className="max-w-screen-2xl mx-auto px-4 sm:pr-6 lg:pr-8 lg:pl-0 2xl:px-8 my-8">
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}

          loop
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            Array.from({ length: 12 }).map(() => {
              return (
                <SwiperSlide>
                  <CategoryCard name="القران الكريم" image={Thumbnail} href="/quran" />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className="flex justify-center gap-5 mb-7 mx-auto">
        <button ref={prevRef}>
          <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:next-filled"} />
        </button>
        <button ref={nextRef}>
          <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:previous-filled"} />
        </button>
      </div>
    </div>
  )
}

export default CategoriesSection
