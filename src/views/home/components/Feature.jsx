import { Link } from "react-router-dom"
import images from "~/assets/images"
import { Service } from "~/components"
import CategoryRectangle from "~/components/icon/CategoryRectangle"

const Feature = (props) => {
    // const { items } = props

    return (
        <div className="product-list relative">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5 mb-10">
                    <div className="category-rectagle flex items-center gap-4">
                        <CategoryRectangle />
                        <h3 className="text-base leading-5 font-semibold font-[Poppins] text-[#DB4444]">
                            Featured
                        </h3>
                    </div>
                    <div className="event flex items-end">
                        <h1 className="text-[32px] leading-[30px] font-semibold tracking-[1.44px] font-[Inter] text-black me-[87px]">
                            New Arrival
                        </h1>
                    </div>
                </div>
            </div>
            {/* Grid items */}
            <div className="grid grid-cols-2 grid-flow-row gap-[30px] h-[600px]">
                <div
                    className="playstation bg-black pt-[89px] ps-[29px] pe-[30px] relative"
                    style={{
                        backgroundImage: `url(${images.ps_5})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="flex flex-col gap-4 items-start absolute bottom-8">
                        <h1 className="text-[#FAFAFA] text-2xl leading-6 font-semibold tracking-[0.72px] font-[Inter]">
                            PlayStation 5
                        </h1>
                        <p className="mt-0 text-[#FAFAFA] text-sm leading-[21px] opacity-80">
                            Black and White version of the PS5 <br />
                            coming out on sale.
                        </p>
                        <Link to={`/#`}>
                            <div className="flex gap-2 items-center">
                                <div className="text-[#FAFAFA] text-base font-medium text-center flex flex-col">
                                    <span>Shop Now</span>
                                    <span className="h-[1px] w-full bg-[#FAFAFA] opacity-50"></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-8">
                    <div className="wm-collection bg-black overflow-hidden relative">
                        <div className="wm-collection-content flex flex-col gap-4 z-10 left-6 bottom-6 absolute">
                            <h1 className="text-[#FAFAFA] text-2xl leading-6 font-semibold tracking-[0.72px] font-[Inter]">
                                Women’s Collections
                            </h1>
                            <p className="mt-0 text-[#FAFAFA] text-sm leading-[21px] opacity-80">
                                Featured woman collections
                                <br />
                                that give you another vibe.
                            </p>
                            <Link to={`/#`}>
                                <div className="flex gap-2 items-center">
                                    <div className="text-[#FAFAFA] text-base font-medium text-center flex flex-col">
                                        <span>Shop Now</span>
                                        <span className="h-[1px] w-full bg-[#FAFAFA] opacity-50"></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className="wm-collection-img w-[432px] h-full -scale-x-100 absolute right-0"
                            style={{
                                backgroundImage: `url(${images.wm_collection})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>
                    <div className="grid grid-cols-2 grid-flow-row gap-[30px]">
                        <div className="bg-black py-[31px] px-[30px] relative">
                            <div className="wm-collection-content flex flex-col gap-4 z-10 absolute left-6 bottom-6">
                                <h1 className="text-[#FAFAFA] text-2xl leading-6 font-semibold tracking-[0.72px] font-[Inter]">
                                    Speakers
                                </h1>
                                <p className="mt-0 text-[#FAFAFA] text-sm leading-[21px] opacity-80">
                                    Amazon wireless speakers
                                </p>
                                <Link to={`/#`}>
                                    <div className="flex gap-2 items-center">
                                        <div className="text-[#FAFAFA] text-base font-medium text-center flex flex-col">
                                            <span>Shop Now</span>
                                            <span className="h-[1px] w-full bg-[#FAFAFA] opacity-50"></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="speaker-img-container w-full h-full"
                                style={{
                                    backgroundImage: `url(${images.speaker})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "25% 75%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                        <div className="bg-black py-[31px] px-[30px] relative">
                            <div className="wm-collection-content flex flex-col gap-4 z-10 absolute left-6 bottom-6">
                                <h1 className="text-[#FAFAFA] text-2xl leading-6 font-semibold tracking-[0.72px] font-[Inter]">
                                    Perfume
                                </h1>
                                <p className="mt-0 text-[#FAFAFA] text-sm leading-[21px] opacity-80">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <Link to={`/#`}>
                                    <div className="flex gap-2 items-center">
                                        <div className="text-[#FAFAFA] text-base font-medium text-center flex flex-col">
                                            <span>Shop Now</span>
                                            <span className="h-[1px] w-full bg-[#FAFAFA] opacity-50"></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="speaker-img-container w-full h-full"
                                style={{
                                    backgroundImage: `url(${images.gucci})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "25% 75%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto">
                <Service />
            </div>
        </div>
    )
}

export default Feature
