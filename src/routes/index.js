import { useRoutes } from "react-router-dom"
import { Loader } from "~/components"
import RequireAuth from "~/features/auth/RequireAuth"
import { Authentication, DefaultLayout } from "~/layout"
import {
    Home,
    Login,
    Signup,
    WishList,
    Cart,
    SingleProduct,
    CheckOut,
    SmartPhone,
    HomeMember,
    Tivi,
    Camera,
    Laptop,
    Studio,
    Products,
    PC,
    Accessories,
    Order,
    SingleOrder,
    Warranty,
    Gift,
    Rank,
    Account,
    Support,
    Feedback,
    ProductSearch,
} from "~/views"

export default function Router() {
    let element = useRoutes([
        {
            element: <DefaultLayout />,
            children: [
                {
                    path: "/",
                    element: (
                        <Loader>
                            <Home />
                        </Loader>
                    ),
                },
                { path: "/product", element: <Products /> },
                {
                    path: "/product-search",
                    element: (
                        <Loader>
                            <ProductSearch />
                        </Loader>
                    ),
                },
                { path: "/laptop", element: <Laptop /> },
                { path: "/studio", element: <Studio /> },
                { path: "/smartphone", element: <SmartPhone /> },
                { path: "/camera", element: <Camera /> },
                { path: "/accessory", element: <Accessories /> },
                { path: "/pc", element: <PC /> },
                { path: "/tv", element: <Tivi /> },
                {
                    path: "/member",
                    element: (
                        <RequireAuth>
                            <Loader>
                                <HomeMember />
                            </Loader>
                        </RequireAuth>
                    ),
                },
                {
                    path: "/user/wishlist",
                    element: (
                        <RequireAuth>
                            <Loader>
                                <WishList />
                            </Loader>
                        </RequireAuth>
                    ),
                },
                {
                    path: "/user/cart",
                    element: (
                        <RequireAuth>
                            <Loader>
                                <Cart />
                            </Loader>
                        </RequireAuth>
                    ),
                },
                {
                    path: "/user/checkout",
                    element: (
                        <RequireAuth>
                            <Loader>
                                <CheckOut />
                            </Loader>
                        </RequireAuth>
                    ),
                },
            ],
        },
        {
            path: "/member",
            element: (
                <RequireAuth>
                    <DefaultLayout />
                </RequireAuth>
            ),
            children: [
                { path: "order", element: <Order /> },
                { path: "warranty", element: <Warranty /> },
                { path: "gift", element: <Gift /> },
                { path: "rank", element: <Rank /> },
                { path: "account", element: <Account /> },
                { path: "support", element: <Support /> },
                { path: "feedback", element: <Feedback /> },
                { path: "order/:id", element: <SingleOrder /> },
            ],
        },
        {
            path: "/product",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/smartphone",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/laptop",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/studio",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/camera",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/accessory",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/pc",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/tv",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            element: <Authentication />,
            children: [
                { path: "/login", element: <Login /> },
                { path: "/signup", element: <Signup /> },
            ],
        },
    ])
    return element
}
