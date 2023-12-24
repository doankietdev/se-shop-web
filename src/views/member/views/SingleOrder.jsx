import React from "react"
import SideBar from "../components/SideBar"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { GiConfirmed } from "react-icons/gi"
import { TbTruckDelivery } from "react-icons/tb"
import { FaBoxOpen } from "react-icons/fa"
import { AiOutlineDash } from "react-icons/ai"
import PaymentBox from "../components/PaymentBox"
import MemberInfo from "../components/MemberInfo"
import SupportInfo from "../components/SupportInfo"
import { statusRecord } from "~/config/StatusRecord"
import { useGetOrderByIdQuery } from "~/features/order/orderApiSlice"
import OrderedProductDetail from "../components/OrderedProductDetail"
import getUserInfoFromLocalStorage from "~/config/GetUserInfo"

const SingleOrder = () => {
    const navigate = useNavigate()
    let { id: orderId } = useParams()
    const {
        data: orders,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetOrderByIdQuery(orderId)

    let userInfo
    let orderedProducts
    let productContent
    let orderStatus
    let orderPaymentForm
    let totalCost
    let colorRecord
    if (isLoading) {
        productContent = <p>Loading...</p>
    } else if (isSuccess) {
        orderedProducts = orders?.metadata?.order
        orderStatus = orderedProducts?.orderStatus?.name
        colorRecord = statusRecord[orderStatus]
        orderPaymentForm = orderedProducts?.paymentForm?.name
        productContent = Array.isArray(orderedProducts.products) ? (
            orderedProducts.products.map((item, index) => (
                <OrderedProductDetail key={index} {...item} />
            ))
        ) : (
            <></>
        )

        totalCost = orderedProducts?.products?.reduce(
            (acc, cur) => acc + cur.quantity * cur.price,
            0
        )

        const user = getUserInfoFromLocalStorage()

        userInfo = {
            name: `${user?.firstName} ${user?.lastName}`,
            phone: `${orderedProducts?.phoneNumber}`,
            address: `${orderedProducts?.shipAddress}`,
        }
    } else if (isError) {
        productContent = <p>{error}</p>
    }

    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="flex flex-col gap-6 ms-6 w-full">
                <div className="flex items-center header-order-detail">
                    <button
                        className="back"
                        onClick={() => navigate("/member/order")}
                    >
                        <FaAngleDoubleLeft size={32} />
                    </button>
                    <h1 className="text-2xl text-center font-semibold ms-[45%]">
                        Order Detail
                    </h1>
                </div>
                <div className="order-status flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-sm">
                            Product Code:
                            <span className="font-semibold">
                                &nbsp;WN0301425802
                            </span>
                        </p>
                        <span className="status-order text-center w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">
                            {orderStatus}
                        </span>
                    </div>
                    <p className="date-order text-sm">1/11/2023 14:24</p>
                </div>

                {productContent}

                <div className="status-cotainer flex justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <BsFillBoxSeamFill
                            size={35}
                            color={`${colorRecord?.colorIcon_1}`}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_1}`}
                        >
                            Đặt hàng <br />
                            thành công
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={`${colorRecord?.colorIcon_1}`}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <GiConfirmed
                            size={35}
                            color={`${colorRecord?.colorIcon_2}`}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_2}`}
                        >
                            Đã <br />
                            xác nhận
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={`${colorRecord?.colorIcon_2}`}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <TbTruckDelivery
                            size={35}
                            color={`${colorRecord?.colorIcon_3}`}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_3}`}
                        >
                            Đang <br />
                            vận chuyển
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={`${colorRecord?.colorIcon_3}`}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <FaBoxOpen
                            size={35}
                            color={`${colorRecord?.colorIcon_4}`}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_4}`}
                        >
                            Đã <br />
                            giao hàng
                        </h5>
                    </div>
                </div>
                <PaymentBox
                    total={totalCost}
                    orderStatus={orderStatus}
                    orderPaymentForm={orderPaymentForm}
                />
                <MemberInfo {...userInfo} />
                <SupportInfo />
            </div>
        </section>
    )
}

export default SingleOrder
