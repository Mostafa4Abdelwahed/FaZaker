"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../molecules/HeaderSection"
import PodcastCard from "../molecules/PodcastCard"
import Thumbnail from "@/assets/thumbnail_podcast.jpg"
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Icon } from "@iconify/react";

function Podcasts() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="mb-10 mt-26">
            <HeaderSection title="عن الدين" href="/podcasts" />
            <div className="max-w-screen-2xl mx-auto px-4 sm:pr-6 lg:pr-8 lg:pl-0 2xl:px-8 my-8">
                <Swiper
                    modules={[Navigation]}
                    centeredSlides={true}
                    grabCursor={true}
                    spaceBetween={25}
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
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
                                    <PodcastCard image={Thumbnail} href={"/podcasts/id"} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
                <div className="flex justify-center gap-5 mb-7 mx-auto">
                    <button ref={prevRef} className="">
                        <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:next-filled"} />
                    </button>
                    <button ref={nextRef} className="">
                        <Icon className='text-4xl cursor-pointer text-main' icon={"carbon:previous-filled"} />
                    </button>
                </div>
        </div>
    )
}

export default Podcasts
