import { React } from "react"
import { useSwiper } from "swiper/react"

const NavigationSlide = (props) => {
    const swiper = useSwiper()

    return (
        <div>
            <button ref={props.refPrev} onClick={() => swiper.slidePrev()}></button>
            <button ref={props.refNext} onClick={() => swiper.slideNext()}></button>
        </div>
    )
}

export default NavigationSlide
