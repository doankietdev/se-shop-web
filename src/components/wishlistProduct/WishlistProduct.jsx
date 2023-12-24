import React from "react"
import CardProduct from "../cardProduct/CardProduct"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDeleteProductFromWishlistMutation } from "~/features/wishlist/wishlistApiSlice"

const WishlistProduct = (item) => {
    const id = item?.id
    const [deleteProductFromWishlist] = useDeleteProductFromWishlistMutation()
    const handleDelete = async () => {
        try {
            await deleteProductFromWishlist({ id })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div className="relative">
                <button
                    className="absolute top-5 right-5 z-50"
                    onClick={() => handleDelete()}
                >
                    <RiDeleteBin6Line size={24} color="red" />
                </button>
                <CardProduct {...item} />
            </div>
        </>
    )
}

export default WishlistProduct
