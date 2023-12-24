import PropsType from "prop-types"
import ArrowIcon from "../icon/ArrowIcon"
import { Link } from "react-router-dom"

const AdvertisementSlide = (props) => {
    const { logo, image, title, event } = props
    return (
        <div className="bg-black h-full flex advertisement justify-between">
            <div className="advertisement__content ms-16 mt-[58px] me-[47px]">
                <div className="title flex items-center gap-6">
                    <img src={logo} alt="logo" className="w-[40px] object-contain" />
                    <h5 className="flex-1 text-[#FAFAFA] text-start text-base font-[Poppins]">{title}</h5>
                </div>
                <div className="event mt-5 mb-[22px]">
                    <h1 className="text-[#FAFAFA] text-5xl font-semibold font-[Inter] text-start leading-[60px] tracking-[1.92px] w-[294px]">
                        {event}
                    </h1>
                </div>
                <div className="flex">
                    <Link to='/product'>
                        <div className="flex gap-2 items-center">
                            <div className="text-[#FAFAFA] text-base font-medium text-center flex flex-col">
                                <span>Shop Now</span>
                                <span className="h-[1px] w-full bg-[#FAFAFA]"></span>
                            </div>
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="advertisement__img">
                <img src={image} alt="product" className="w-[496px] h-[352px] object-contain pt-4" />
            </div>
        </div>
    )
}

AdvertisementSlide.propsType = {
    _id: PropsType.string.isRequired,
    logo: PropsType.string,
    image: PropsType.string,
    title: PropsType.string,
    event: PropsType.string,
}

export default AdvertisementSlide
