import React from "react"
import SideBar from "../components/SideBar"
import { useNavigate } from "react-router-dom"
import { FaRegCalendarCheck } from "react-icons/fa"

import images from "~/assets/images"

const HomeMember = () => {
    const navigate = useNavigate()
    const handleOnClickOffer = () => {
        navigate("/member/promotion")
    }
    const handleOnClickOrder = () => {
        navigate("/member/order")
    }
    const handleOnClickRank = () => {
        navigate("/member/rank")
    }
    let userInfo = null
    if (localStorage.getItem("user")) {
        userInfo = JSON.parse(localStorage.getItem("user"))
    }
    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="overview-container ms-6 w-full">
                <div className="flex">
                    <div className="w-full border flex flex-col items-center gap-7 p-4">
                        <div className="w-[70px] h-[70px] rounded-full border border-[#ccc]">
                            <img
                                className="object-contain"
                                src="https://cellphones.com.vn/smember/_nuxt/img/Shipper_CPS3.77d4065.png"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-base">Welcome</p>
                            <h2 className="name text-3xl font-medium text-[#ff0000]">
                                {`${userInfo?.lastName} ${userInfo?.firstName}`}
                            </h2>
                        </div>
                        <div className="flex items-center justify-around gap-40">
                            <div className="participate flex flex-col gap-2 items-center justify-center">
                                <h3 className="text-sm">Participating Date</h3>
                                <FaRegCalendarCheck size={45} color="red" />
                                <p className="text-base">30/3/2023</p>
                            </div>
                            <div className="participate flex flex-col gap-2 items-center justify-center">
                                <h3 className="text-sm">Rank Member</h3>
                                <FaRegCalendarCheck size={45} color="red" />
                                <p className="text-base">SNew</p>
                            </div>
                            <div className="participate flex flex-col gap-2 items-center justify-center">
                                <h3 className="text-sm">Accumulated Points</h3>
                                <FaRegCalendarCheck size={45} color="red" />
                                <p className="text-base">$99999</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="flex flex-col items-center justify-center gap-6 p-4 border bg-[#fef5f0]">
                        <div className="flex flex-col items-center justify-center w-[86px] h-[86px] rounded-full">
                            <img src={images.gift_cellphone} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-base">Your Offer</h1>
                        </div>
                        <div className="button">
                            <button
                                onClick={() => handleOnClickOffer()}
                                className="flex items-center justify-center w-[174px] h-[47px] bg-white rounded-lg"
                            >
                                Go Detail
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 p-4 border bg-[#edf1fd]">
                        <div className="flex items-center justify-center w-[86px] h-[86px] rounded-full bg-[#fff7ca]">
                            <img src={images.shipper_cellphone} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-base">Your Orders</h1>
                        </div>
                        <div className="button">
                            <button
                                onClick={() => handleOnClickOrder()}
                                className="flex items-center justify-center w-[174px] h-[47px] bg-white rounded-lg"
                            >
                                <span className="text-base">Go Detail</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 p-4 border bg-[#f1f8fe]">
                        <div className="flex items-center justify-center w-[86px] h-[86px] rounded-full bg-[#89c1f5]">
                            <img src={images.rank_cellphone} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-row items-center">
                                <span className="">Rank: </span>
                                &nbsp;
                                <span className="">SNew</span>
                            </div>
                        </div>
                        <div className="button">
                            <button
                                onClick={() => handleOnClickRank()}
                                className="flex items-center justify-center w-[174px] h-[47px] bg-white rounded-lg"
                            >
                                <span className="text-base">Go Detail</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeMember
