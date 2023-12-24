import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useRef } from "react"
import { CardProduct } from "~/components"
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useGetAllProductsByCategoryQuery } from "~/features/category/categoryApiSlide"
import { NavigationSlide } from "~/components"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const RelatedSlide = ({ categoryId }) => {
    const refPrev = useRef()
    const refNext = useRef()
    const handleClickPrevBtn = () => {
        refPrev.current.click()
    }
    const handleClickNextBtn = () => {
        refNext.current.click()
    }

    const { data, isFetching, isSuccess } = useGetAllProductsByCategoryQuery({
        type: 3, // 3 means get accessories for this product
        limit: 20,
    })
    let content
    if (isFetching) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const productsRelated = data?.metadata?.products?.products
        content = (
            <div className="relative">
                <button
                    className="z-50 absolute top-1/3 -left-3 swiper-btn hover:bg-[#00000033] hover:cursor-pointer swiper-btn-prev mr-2 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-none outline-none bg-[#f5f5f5] text-black shadow-md"
                    onClick={handleClickPrevBtn}
                >
                    <IoIosArrowBack size={28} />
                </button>
                <button
                    className="z-50 absolute top-1/3 -right-3 swiper-btn hover:bg-[#00000033] hover:cursor-pointer swiper-btn-next inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-none outline-none bg-[#f5f5f5] text-black shadow-md"
                    onClick={handleClickNextBtn}
                >
                    <IoIosArrowForward size={28} />
                </button>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={10}
                    modules={[Autoplay, Navigation]}
                    className="max-w-fit"
                >
                    {productsRelated?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <CardProduct {...item} />
                        </SwiperSlide>
                    ))}
                    <div className="hidden">
                        <NavigationSlide refPrev={refPrev} refNext={refNext} />
                    </div>
                </Swiper>
            </div>
        )
    }
    return <>{content}</>
}

export default RelatedSlide
