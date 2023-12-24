import React from "react"
import SideBar from "../components/SideBar"
import images from "~/assets/images"
import { useState } from "react"
import CalendarDropDown from "../components/CalendarDropDown"
import OrderedProduct from "../components/OrderedProduct"
import { useGetAllOrderQuery } from "~/features/order/orderApiSlice"


const Order = () => {
    const {
        data: orders,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllOrderQuery()

    const [active, setActive] = useState("")
    const filterOrder = {
        getAll: "All Order",
        waitForComfirm: "Wait For Comfirm",
        confirmOrder: "Confirm Order",
        transporting: "Transporting",
        canceled: "Canceled",
    }

    const handleOnClickFilter = (key, title) => {
        setActive(title)
    }

    let content
    let numberOrder
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const items = orders?.metadata?.orders
        numberOrder = items?.length
        content = (
            <>
                {items.map((item) => (
                    <OrderedProduct key={item.orderId} {...item} />
                ))}
            </>
        )
    } else if (isError) {
        content = <p>{error}</p>
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
            <div className="flex flex-col gap-4 ms-6 w-full">
                <div className="customer-info flex items-center gap-4 h-[100px]">
                    <div className="w-[70px] h-[70px] rounded-full bg-[#f4f6f8]">
                        <img src={images.presentor} />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="name text-lg font-medium">
                            {`${userInfo?.lastName} ${userInfo?.firstName}`}
                        </h1>
                        <div className="w-[67px] h-[21px] flex items-center justify-center text-xs text-[#ff0000] border border-[#ff0000] rounded">
                            SNew
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-evenly h-[100px] bg-[#f4f6f8]">
                    <div className="order-number flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">{numberOrder}</h1>
                        <p className="text-xs">orders</p>
                    </div>
                    <div className="absolute left-[50%] w-[1px] bg-black py-10"></div>
                    <div className="acumulation-number flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">4M</h1>
                        <p className="text-xs">Total Acumulation</p>
                    </div>
                </div>

                <div className="">
                    <CalendarDropDown />
                </div>
                <div className="flex items-center justify-around">
                    {Object.entries(filterOrder).map(([key, title]) => (
                        <button
                            key={key}
                            className={`flex items-center justify-center px-4 py-2 border rounded ${
                                active === title ? "bg-[#ff0000]" : ""
                            }`}
                            onClick={() => handleOnClickFilter(key, title)}
                        >
                            <span
                                className={`text-base ${
                                    active === title ? "text-white" : ""
                                }`}
                            >
                                {title}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-4">{content}</div>
            </div>
        </section>
    )
}

export default Order
