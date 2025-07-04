"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import CategoryCard from "../molecules/CategoryCard"
import HeaderSection from "../molecules/HeaderSection"
import Thumbnail from "@/assets/thumbnail_category.jpg"

import 'swiper/css';
import 'swiper/css/navigation';

export default function CategoriesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // state علشان نمسك السوايبر بعد ما يشتغل
  const [swiperInstance, setSwiperInstance] = useState(null);

  // بعد ما يترندر كله نحدث navigation
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div>
      <HeaderSection title="فذكر" href="/categories" />
      <div className="max-w-screen-2xl mx-auto px-4 sm:pr-6 lg:pr-8 lg:pl-0 2xl:px-8 my-8">
        <Swiper
          modules={[Navigation]}
          loop
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={setSwiperInstance}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <CategoryCard name="القران الكريم" image={Thumbnail} href="/quran" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الأزرار تحت */}
        <div className="flex justify-center gap-5 mt-5">
          <button ref={nextRef}>
            <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:next-filled"} />
          </button>
          <button ref={prevRef}>
            <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:previous-filled"} />
          </button>
        </div>
      </div>
    </div>
  )
}
