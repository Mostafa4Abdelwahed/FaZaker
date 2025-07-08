"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../molecules/HeaderSection"
import PodcastCard from "../molecules/PodcastCard"
import Thumbnail from "@/assets/thumbnail_podcast.jpg"
import ThumbnailFemale from "@/assets/female.jpg"
import { Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

function Podcasts({ title="" }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [swiperInstance, setSwiperInstance] = useState(null);

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
        <div className="mb-10 mt-14">
            <HeaderSection title={title} href="/podcasts" />
            <div className="max-w-screen-2xl mx-auto px-4 sm:pr-6 lg:pr-8 lg:pl-0 2xl:px-8 my-8">
                <Swiper
                    modules={[Navigation]}
                    centeredSlides={true}
                    grabCursor={true}
                    spaceBetween={25}
                    slidesPerView={4}
                    loop
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    onSwiper={setSwiperInstance}
                >
                    {
                        Array.from({ length: 12 }).map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <PodcastCard image={Thumbnail} href={"/podcasts/id"} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="flex justify-center gap-5 mb-7 mx-auto">
                <button ref={nextRef}>
                    <Icon className='text-4xl cursor-pointer text-main hover:text-main-100 transition-all' icon={"carbon:next-filled"} />
                </button>
                <button ref={prevRef}>
                    <Icon className='text-4xl cursor-pointer text-main hover:text-main-100 transition-all' icon={"carbon:previous-filled"} />
                </button>
            </div>
        </div>
    )
}

export default Podcasts;
