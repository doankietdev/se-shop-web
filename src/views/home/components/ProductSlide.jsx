import { useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { NavigationSlide } from "~/components"
import { NextBtn, PrevBtn } from "~/components/icon"
import CategoryRectangle from "~/components/icon/CategoryRectangle"
import style from "~/style"
import { useGetLimitProductQuery } from "~/features/products/productApiSlice"

const ProductSlide = (props) => {
    const {
        CategoryModule,
        Line,
        Button,
        Timer,
        titleCategory,
        titleEvent,
        numberOfCard,
    } = props

    const refPrev = useRef()
    const refNext = useRef()
    const handleClickPrevBtn = () => {
        refPrev.current.click()
    }
    const handleClickNextBtn = () => {
        refNext.current.click()
    }

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetLimitProductQuery()

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const items = products?.metadata?.products
        content = (
            <Swiper
                className="swipper-custom mb-[60px]"
                slidesPerView={Number(numberOfCard)}
                centeredSlides={false}
                spaceBetween={10}
                pagination={{
                    type: "fraction",
                }}
                modules={Navigation}
            >
                {Array.isArray(items) ? (
                    items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <CategoryModule {...item} />
                        </SwiperSlide>
                    ))
                ) : (
                    <></>
                )}
                <div className="hidden">
                    <NavigationSlide refPrev={refPrev} refNext={refNext} />
                </div>
            </Swiper>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }

    return (
        <div className="product-slide relative">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5 mb-10">
                    <div className="category-rectagle flex items-center gap-4">
                        <CategoryRectangle />
                        <h3 className="text-base leading-5 font-semibold font-[Poppins] text-[#DB4444]">
                            {titleCategory}
                        </h3>
                    </div>
                    <div className="event flex items-end">
                        <h1
                            className={`text-[32px] leading-[36px] font-semibold tracking-[1.44px] font-[Inter] text-black me-[87px]`}
                        >
                            {titleEvent}
                        </h1>
                    </div>
                </div>
                <div className="mb-10 -ms-96">
                    {Timer && <Timer year={2023} month={12} day={12} />}
                </div>

                <div className="swiper-nav-btns mb-10">
                    <button
                        className="swiper-btn hover:bg-[#00000033] hover:cursor-pointer swiper-btn-prev mr-2 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-none outline-none bg-[#f5f5f5] text-black shadow-md"
                        onClick={handleClickPrevBtn}
                    >
                        <PrevBtn />
                    </button>
                    <button
                        className="swiper-btn hover:bg-[#00000033] hover:cursor-pointer swiper-btn-next inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-none outline-none bg-[#f5f5f5] text-black shadow-md"
                        onClick={handleClickNextBtn}
                    >
                        <NextBtn />
                    </button>
                </div>
            </div>
            {content}
            {Button && (
                <div className="flex justify-center items-center mb-[60px]">
                    <Button primary large>
                        View All Products
                    </Button>
                </div>
            )}
            {Line && <Line style={style.lineStyleMain} />}
        </div>
    )
}

export default ProductSlide
