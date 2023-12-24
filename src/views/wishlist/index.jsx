import React from "react"
import Cart from "./components/Cart"
import { useGetWishlistQuery } from "~/features/wishlist/wishlistApiSlice"

const WishList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetWishlistQuery()
    let content
    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isSuccess) {
        const products = data?.metadata?.wishList
        content = (
            <div className="flex flex-col gap-16 mb-20">
                <section className="wishlist-product">
                    <Cart items={products} />
                </section>
            </div>
        )
    } else if (isError) {
        content = <div>{error}</div>
    }
    return content
}

export default WishList
