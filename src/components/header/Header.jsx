import { Link } from "react-router-dom"
import { Line, Search } from "~/components"
import { CartIcon, WishlistIcon } from "~/components/icon"
import style from "~/style"
import UserIcon from "../icon/UserIcon"
import AccountDropdown from "../accountDropdown"
import { useGetUserQuery } from "~/features/user/userApiSlice"
import { useGetCartByUserIdQuery } from "~/features/cart/cartApiSlice"
import { setCredentials } from "~/features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useGetWishlistQuery } from "~/features/wishlist/wishlistApiSlice"

const Header = (props) => {
    const dispatch = useDispatch()

    const { data: wishlist, isSuccess: isWishlist} = useGetWishlistQuery()

    const { data: user, isSuccess: isUser } = useGetUserQuery()

    const { data: cart, isSuccess: isCart } = useGetCartByUserIdQuery()

    let cartNumber = 0
    let wishlistNumber = 0
    let content
    if (!user) {
        content = (
            <Link to="/login" className="ms-6 flex items-center">
                <UserIcon />
            </Link>
        )
    } else if (isUser) {
        dispatch(setCredentials({ ...user }))
        content = (
            <div className="ms-6 mt-1">
                <AccountDropdown img={user?.metadata?.user?.imageUrl} />
            </div>
        )
    }
    if (isCart) {
        cartNumber = cart?.metadata?.cart?.products?.length
    }

    if(isWishlist) {
        wishlistNumber = wishlist?.metadata?.wishList?.length
    }

    const { title } = props
    return (
        <section
            className={`fixed w-[100%] top-0 ${
                title ? "h-[142px]" : "h-[94px]"
            } bg-slate-100 z-[9999]`}
        >
            {title && (
                <div className="flex h-[48px] w-[100%] top-0 justify-center items-center bg-top-header">
                    <div className="flex items-center justify-center">
                        <h3 className="text-[color:var(--text-color-white)] text-xs not-italic font-normal leading-[21px] me-2">
                            {title}
                        </h3>
                        <Link to="#">
                            <span className="text-xs font-semibold text-[color:var(--text-color-white)] leading-6 underline">
                                ShopNow
                            </span>
                        </Link>
                    </div>
                </div>
            )}
            <div
                className={`${style.boxWidth} h-[38px] flex justify-between items-center m-auto mt-[40px] mb-4`}
            >
                <Link
                    to="/"
                    className="flex-1 exclusive text-black font-['Inter'] text-2xl font-bold leading-6"
                >
                    SE SHOP
                </Link>
                <div className="flex-2 h-[24px] me-[148px]">
                    <ul className="header-menu w-[100%] flex justify-between items-center gap-12">
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">
                                    Contact
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex-1 header-menu__link"
                                to="/signup"
                            >
                                <span className="header-menu__item">
                                    Sign Up
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 h-[100%] flex items-center">
                    <Search />
                    {/* Get wishlist state, after that, check if state is Array, get Array.length,
                    create a div width:16px height: 16px rounded-full, pass a length to it*/}
                    <Link
                        to="/user/wishlist"
                        className="ms-6 flex items-center relative"
                    >
                        <span className="absolute -top-3 -right-3 w-[24px] h-[24px] border rounded-full text-xs flex items-center justify-center text-white bg-[#DB4444]">
                            {wishlistNumber}
                        </span>
                        <WishlistIcon />
                    </Link>
                    {/* Get order state, after that, check if state is Array, get Array.length,
                    create a div width:16px height: 16px rounded-full, pass a length to it*/}
                    <Link
                        to="/user/cart"
                        className="ms-6 flex items-center relative"
                    >
                        <span className="absolute -top-3 -right-3 w-[24px] h-[24px] border rounded-full text-xs flex items-center justify-center text-white bg-[#DB4444]">
                            {cartNumber}
                        </span>
                        <CartIcon />
                    </Link>
                    {/* Check if user login or not, then, switch icon as well as its function */}
                    {content}
                </div>
            </div>
            <Line style={style.lineStyleMain} />
        </section>
    )
}

export default Header
