import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import PropsType from 'prop-types'

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import AdvertisementSlide from "./AdvertisementSlide"

const Advertisement = (props) => {
    const { advertisement } = props
    return (
        <section className="h-[360px] bg-black">
            <Swiper
                spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    advertisement.map((ad, index) => (
                        <SwiperSlide key={index}>
                            <AdvertisementSlide {...ad}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

Advertisement.propsType = {
    props: PropsType.array.isRequired
}

export default Advertisement
