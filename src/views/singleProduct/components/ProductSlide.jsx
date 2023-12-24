import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { Mousewheel, FreeMode, Navigation, Thumbs } from "swiper/modules"

export default function ProductSlide({ image }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#ddd",
                    "--swiper-pagination-color": "#fff",
                    overflow: "hidden"
                }}
                loop={true}
                spaceBetween={16}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 max-w-[650px] m-0"
            >
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[600px] shadow-sm border rounded-md">
                        <img src={image} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[600px] shadow-sm border rounded-md">
                        <img src={image} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[600px] shadow-sm border rounded-md">
                        <img src={image} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[600px] shadow-sm border rounded-md">
                        <img src={image} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[600px] shadow-sm border rounded-md">
                        <img src={image} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                direction={"vertical"}
                spaceBetween={8}
                slidesPerView={5}
                mousewheel={false}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Mousewheel, FreeMode, Navigation, Thumbs]}
                className="mySwiper max-w-[100px] m-0"
            >
                <SwiperSlide>
                    <div className="h-[80px] p-1 shadow-sm border-[2px] overflow-hidden rounded-md flex items-center">
                        <img src={image} className="object-contain"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80px] p-1 shadow-sm border-[2px] overflow-hidden rounded-md flex items-center">
                        <img src={image} className="object-contain"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80px] p-1 shadow-sm border-[2px] overflow-hidden rounded-md flex items-center">
                        <img src={image} className="object-contain"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80px] p-1 shadow-sm border-[2px] overflow-hidden rounded-md flex items-center">
                        <img src={image} className="object-contain"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80px] p-1 shadow-sm border-[2px] overflow-hidden rounded-md flex items-center">
                        <img src={image} className="object-contain"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
