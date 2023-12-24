import { Button, WishlistProduct } from "~/components"
import CategoryRectangle from "~/components/icon/CategoryRectangle"

const Cart = (props) => {
    const { items } = props
    return (
        <div className="product-list relative">
            <div className="flex justify-between items-center mb-10 mt-20">
                <div className="name">
                    <h1 className="text-[20px] leading-[26px]">
                        Wishlist({Array.isArray(items) ? items.length : 0})
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px]">
                {items.map((item, index) => (
                    <WishlistProduct view key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Cart
