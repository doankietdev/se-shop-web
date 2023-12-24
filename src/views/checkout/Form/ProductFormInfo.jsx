import React from "react"
//props or useSelector to get the state

const ProductFormInfo = ({ carts }) => {
    let content
    if (Array.isArray(carts)) {
        content = (
            <>
                {carts.map((cart, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between w-full"
                    >
                        <div className="flex items-center gap-6">
                            <img
                                className="w-[54px] h-[54px] p-1 object-contain"
                                src={cart?.product?.imageUrl}
                            />
                            <h3 className="text-base">{cart?.product?.name}</h3>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="quantity">
                                    {cart?.quantity}
                                </span>
                                <span className="">&times;</span>
                                <span className="price">
                                    {cart?.product?.price}
                                </span>
                            </div>
                            <p className="text-base">
                                {cart?.quantity * cart?.product?.price}
                            </p>
                        </div>
                    </div>
                ))}
            </>
        )
    } else {
        content = (
            <div
                className="flex items-center justify-between w-full"
            >
                <div className="flex items-center gap-6">
                    <img
                        className="w-[54px] h-[54px] p-1 object-contain"
                        src={carts?.imageUrl}
                    />
                    <h3 className="text-base">{carts?.name}</h3>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="quantity">{carts?.quantity}</span>
                        <span className="">&times;</span>
                        <span className="price">{carts?.price}</span>
                    </div>
                    <p className="text-base">
                        {carts?.quantity * carts?.price}
                    </p>
                </div>
            </div>
        )
    }

    return <>{content}</>
}

export default ProductFormInfo
