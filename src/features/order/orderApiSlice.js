import { apiSlice } from "../../app/api/apiSlice"

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => "/api/checkout/get-all-orders",
            providesTags: ["Order", "Cart"],
        }),
        getOrderById: builder.query({
            query: (id) => `/api/checkout/get-order?orderId=${id}`,
        }),
        createOrderFromCart: builder.mutation({
            query: (params) => {
                const cartId = JSON.parse(localStorage.getItem("user"))?.id
                const {
                    shipAddress,
                    phoneNumber,
                    paymentFormId,
                    order,
                } = params
                return {
                    url: "/api/checkout/order-from-cart",
                    method: "POST",
                    body: {
                        cartId,
                        shipAddress,
                        phoneNumber,
                        paymentFormId,
                        orderProducts: order,
                    },
                }
            },
            invalidatesTags: ["Order", "Cart"],
        }),
        createOrderNow: builder.mutation({
            query: (params) => {
                const {
                    shipAddress,
                    phoneNumber,
                    paymentFormId,
                    order,
                } = params
                return {
                    url: "/api/checkout/order",
                    method: "POST",
                    body: {
                        shipAddress,
                        phoneNumber,
                        paymentFormId,
                        orderProduct: order,
                    },
                }
            },
            invalidatesTags: ["Order"],
        }),
    }),
})

export const {
    useCreateOrderFromCartMutation,
    useCreateOrderNowMutation,
    useGetAllOrderQuery,
    useGetOrderByIdQuery,
} = orderApiSlice
