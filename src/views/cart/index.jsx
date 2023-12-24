import React, { useEffect, useState } from "react"
import CartProduct from "./components/CartProduct"
import { Button } from "~/components"
import { useNavigate } from "react-router-dom"
import { useGetCartByUserIdQuery } from "~/features/cart/cartApiSlice"

const Cart = () => {
    // API get cart product, if has cart product => display, if not
    // display no product in cart
    // if click buy, process => navigate to order
    const navigate = useNavigate()

    const {
        data: cart,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetCartByUserIdQuery()

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const cartProducts = cart?.metadata?.cart?.products
        content = (
            <>
                {cartProducts.map((item, index) => (
                    <CartProduct key={index} {...item} />
                ))}
            </>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }


    const handleCreateCart = () => {
        // Cart info => cart ids
        // User info => user id, or user's token to determine user
        // dispatch createOrders action => recieve response => if nice
        // => navigate to checkout to fill necessary information
        navigate("/user/checkout")
    }
    return (
        <div className="my-20">
            <div className="flex flex-col gap-10">
                <div className="grid grid-cart grid-cols-5 grid-flow-row place-items-start rounded h-[72px]">
                    <div className="w-full h-full flex items-center col-span-2">
                        <h3 className="ms-6 text-base">Product</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Price</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Quantity</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Subtotal</h3>
                    </div>
                </div>
                {content}
            </div>
            <div className="flex items-start justify-between mt-6">
                <Button outline large onClick={() => navigate("/smartphone")}>
                    Return To Shop
                </Button>

                <Button
                    primary
                    large
                    type="submit"
                    onClick={() => handleCreateCart()}
                >
                    Process to checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart
