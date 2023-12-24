import React from "react"
import { useNavigate } from "react-router-dom"

const OrderedProductDetail = (props) => {
    const navigate = useNavigate()
    const { quantity, price, product } = props
    const { id, name, imageUrl } = product

    return (
        <div className="border rounded-lg shadow-md px-4 pt-4 pb-2">
            <div className="flex flex-row items-center">
                <div className="w-[110px] h-[110px] object-contain">
                    <img src={imageUrl} />
                </div>
                <div className="order-short-info flex flex-col gap-2 items-start ps-4 w-full">
                    <h2
                        onClick={() => navigate(`/product/${id}`)}
                        className="name-product-order hover:text-[#ff0000] cursor-pointer"
                    >
                        {name}
                    </h2>
                    <div className="quantity-container flex flex-row justify-between w-full">
                        <span className="price-order text-sm">
                            Quantity:
                            <span className="text-[#ff0000] text-base">
                                &nbsp;{quantity}
                            </span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="price-order font-medium text-base text-[#ff0000]">
                            {price}
                        </span>
                        <span className="price-order line-through font-medium text-sm text-zinc-600">
                            {price + 500}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => navigate(`/product/${id}`)}
                    className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                >
                    Rate
                </button>
                <button
                    onClick={() => navigate(`/product/${id}`)}
                    className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                >
                    Repurchase
                </button>
            </div>
        </div>
    )
}

export default OrderedProductDetail
