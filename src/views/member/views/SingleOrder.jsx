import React, { useCallback } from 'react'
import SideBar from '../components/SideBar'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { GiConfirmed } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaBoxOpen } from 'react-icons/fa'
import { AiOutlineDash } from 'react-icons/ai'
import PaymentBox from '../components/PaymentBox'
import MemberInfo from '../components/MemberInfo'
import SupportInfo from '../components/SupportInfo'
import { statusRecord } from '~/config/StatusRecord'
import { useGetOrderByIdQuery, usePayMutation } from '~/features/order/orderApiSlice'
import OrderedProductDetail from '../components/OrderedProductDetail'
import getUserInfoFromLocalStorage from '~/config/GetUserInfo'
import moment from 'moment'
import { Button } from '~/components'

const SingleOrder = () => {
  const navigate = useNavigate()
  let { id: orderId } = useParams()
  const { data: orders, isLoading, isSuccess, isError, error } = useGetOrderByIdQuery(orderId)
  const [pay] = usePayMutation()

  let userInfo
  let order
  let productContent
  let orderStatus
  let orderPaymentForm
  let totalCost
  let colorRecord
  if (isLoading) {
    productContent = <p>Loading...</p>
  } else if (isSuccess) {
    order = orders?.metadata?.order
    orderStatus = order?.orderStatus?.name
    colorRecord = statusRecord[orderStatus]
    orderPaymentForm = order?.paymentForm?.name
    productContent = Array.isArray(order?.products) ? (
      order?.products?.map((item, index) => <OrderedProductDetail key={index} {...item} />)
    ) : (
      <></>
    )

    totalCost = order?.products?.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)

    const user = getUserInfoFromLocalStorage()

    userInfo = {
      name: `${user?.firstName} ${user?.lastName}`,
      phone: `${order?.phoneNumber}`,
      address: `${order?.shipAddress}`
    }
  } else if (isError) {
    productContent = <p>{error}</p>
  }

  const handlePayNow = useCallback(async () => {
    const {
      metadata: { paymentUrl }
    } = await pay({ orderId: order?.id }).unwrap()
    window.location.href = paymentUrl
  }, [order?.id, pay])

  return (
    <section className="my-4 flex">
      <div className="min-w-[260px]">
        <SideBar />
      </div>
      <div className="flex flex-col gap-6 ms-6 w-full">
        <div className="flex items-center header-order-detail">
          <button className="back" onClick={() => navigate('/member/order')}>
            <FaAngleDoubleLeft size={32} />
          </button>
          <h1 className="text-2xl text-center font-semibold ms-[45%]">Order Detail</h1>
        </div>
        <div className="order-status flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">
              Order Code:
              <span className="font-semibold">&nbsp;{order?.id}</span>
            </p>
            <span className="status-order text-center w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">
              {orderStatus}
            </span>
          </div>
          <p className="date-order text-sm">
            {moment(order?.createdAt).format('YYYY-MM-DD hh:mm:ss A')}
          </p>
        </div>

        {productContent}

        <Button primary medium type="submit" onClick={handlePayNow}>
          Pay Now
        </Button>

        <div className="status-cotainer flex justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <BsFillBoxSeamFill size={35} color={`${colorRecord?.colorIcon_1}`} />
            <h5 className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_1}`}>
              Đặt hàng <br />
              thành công
            </h5>
          </div>
          <AiOutlineDash size={35} color={`${colorRecord?.colorIcon_1}`} />
          <div className="flex flex-col items-center justify-center">
            <GiConfirmed size={35} color={`${colorRecord?.colorIcon_2}`} />
            <h5 className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_2}`}>
              Đã <br />
              xác nhận
            </h5>
          </div>
          <AiOutlineDash size={35} color={`${colorRecord?.colorIcon_2}`} />
          <div className="flex flex-col items-center justify-center">
            <TbTruckDelivery size={35} color={`${colorRecord?.colorIcon_3}`} />
            <h5 className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_3}`}>
              Đang <br />
              vận chuyển
            </h5>
          </div>
          <AiOutlineDash size={35} color={`${colorRecord?.colorIcon_3}`} />
          <div className="flex flex-col items-center justify-center">
            <FaBoxOpen size={35} color={`${colorRecord?.colorIcon_4}`} />
            <h5 className={`flex text-center text-xs mt-2 ${colorRecord?.textColor_4}`}>
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
