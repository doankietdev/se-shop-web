import React, { useState } from "react"
import ReactStars from "react-stars"
import { FiHeart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import formatCurrency from "~/config/CustomCost"
import { Discount } from "../icon"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "~/features/auth/authSlice"
import {
    useAddProductToWishlistMutation,
    useDeleteProductFromWishlistMutation,
} from "~/features/wishlist/wishlistApiSlice"

const CardProduct = (props) => {
    const { id, name, price, stockQuantity, imageUrl } = props
    const userState = useSelector(selectCurrentUser)
    const [addProductToWishlist] =
        useAddProductToWishlistMutation()
    const [deleteProductFromWishlist] = useDeleteProductFromWishlistMutation()
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    const oldPrice = price + 9999
    const percent = Math.floor(100 * (1 - price / oldPrice))
    const isWishList = stockQuantity === undefined
    const handleClick = async () => {
        setClick(!click)
        if (!click && userState) {
            try {
                await addProductToWishlist({ id })
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                await deleteProductFromWishlist({ id })
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <section className="product-item p-[10px] cursor-pointer flex flex-col relative border-[2px] border-[#F5F5F5] rounded-lg shadow-sm">
            <div
                onClick={() => navigate(`/product/${id}`)}
                className="product-img-container mt-[10px]"
            >
                <div className="w-[100px] h-[28px] object-contain absolute top-0 -left-1">
                    <Discount />
                    <p className="text-xs text-white font-medium absolute top-2 left-2">{`Discount ${percent}%`}</p>
                </div>
                <div className="product-img mt-[10px] flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt="product"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="product-info pt-4 ps-[10px]">
                <div className="flex flex-col gap-2 items-start">
                    <h1 className="text-sm text-left font-semibold font-[Poppins] text-black">
                        {name}
                    </h1>
                    <div className="flex items-center justify-start gap-3">
                        <span className="text-base font-medium font-[Poppins] text-[#DB4444]">{`${formatCurrency(
                            price
                        )}`}</span>
                        <span className="text-sm font-medium font-[Poppins] line-through text-[#000] opacity-50">{`${formatCurrency(
                            oldPrice
                        )}`}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex justify-start items-center gap-2 -mt-2">
                            <ReactStars
                                count={5}
                                size={20}
                                value={4}
                                edit={false}
                                color2={"#FFAD33"}
                            />
                            {!isWishList && (
                                <span className="flex text-sm font-semibold font-[Poppins] text-black opacity-50 pt-[2px]">
                                    {`(${stockQuantity})`}
                                </span>
                            )}
                        </div>

                        {!isWishList && (
                            <div className="w-[30px] h-[30px] -mt-2 bg-transparent">
                                <FiHeart
                                    className="heart"
                                    size={20}
                                    color="red"
                                    fill={`${click ? "red" : "none"}`}
                                    onClick={() => handleClick()}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardProduct
