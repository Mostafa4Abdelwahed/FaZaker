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
import Container from '../atoms/Container';
import categories from '@/lib/categories';

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
      <div className="my-8">
        <Swiper
          modules={[Navigation]}
          loop
          spaceBetween={27}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            720: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={setSwiperInstance}
        >
          {categories.slice(0, 8).map((category, idx) => (
            <SwiperSlide key={idx}>
              <CategoryCard name={category.name} image={category.image} href={category.href} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الأزرار تحت */}
        <div className="flex justify-center gap-5 mt-5">
          <button ref={prevRef}>
            <Icon className='text-4xl cursor-pointer text-main hover:text-main-100 transition-all' icon={"carbon:next-filled"} />
          </button>
          <button ref={nextRef}>
            <Icon className='text-4xl cursor-pointer text-main hover:text-main-100 transition-all' icon={"carbon:previous-filled"} />
          </button>
        </div>
      </div>
    </div>
  )
}
