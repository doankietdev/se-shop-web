import React from "react"
import { Line } from "~/components"
import { PaymentIcon } from "~/components/icon"
import style from "~/style"

const PaymentBox = ({ total, orderStatus, orderPaymentForm }) => {
    return (
        <div className="payment-box-container shadow-md border rounded-lg px-4 py-5">
            <div className="payment-header flex items-center justify-start gap-4 mb-4">
                <PaymentIcon />
                <h3 className="text-lg font-medium">Payment Information</h3>
            </div>
            <div className="payment-info flex flex-col gap-4">
                <div className="flex items-center justify-between payment-total">
                    <h5 className="text-sm text-[#717171]">Total cost:</h5>
                    <span className="text-sm text-[#4a4a4a]">
                        {total + 500}
                    </span>
                </div>
                <div className="flex items-center justify-between payment-discount">
                    <h5 className="text-sm text-[#717171]">Discount:</h5>
                    <span className="text-sm text-[#4a4a4a]">-500</span>
                </div>
                <div className="flex items-center justify-between payment-fee-transport">
                    <h5 className="text-sm text-[#717171]">Transport fee:</h5>
                    <span className="text-sm text-[#4a4a4a]">Free</span>
                </div>
                <Line style={style.lineStyleCart} />
                <div className="flex items-center justify-between payment-required">
                    <h5 className="text-sm text-[#717171]">
                        Payment form:
                    </h5>
                    <span className="text-sm text-[#4a4a4a] font-semibold">
                        {orderPaymentForm}
                    </span>
                </div>
                <div className="flex items-center justify-between payment-required">
                    <h5 className="text-sm text-[#717171]">
                        Required payment:
                    </h5>
                    <span className="text-sm text-[#4a4a4a] font-semibold">
                        {total}
                    </span>
                </div>
                <div className="flex items-center justify-between payment-fee-transport">
                    <h5 className="text-sm text-[#717171]">Paid:</h5>
                    <span className="text-sm font-semibold text-[#5ad733]">
                        {orderStatus}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PaymentBox
