import { apiSlice } from "~/app/api/apiSlice"

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCartByUserId: builder.query({
            query: () => "/api/carts/get-my-cart",
            providesTags: ["Cart"],
        }),
        addCart: builder.mutation({
            query: (params) => ({
                url: "/api/carts/add-to-cart",
                method: "POST",
                body: {
                    cartId: JSON.parse(localStorage.getItem("user"))?.id,
                    productId: params.productId,
                    quantity: params.quantity,
                },
            }),
            invalidatesTags: ["Cart"],
        }),
        updateProductCartQuantity: builder.mutation({
            query: (params) => ({
                url: "/api/carts/update-quantity-product",
                method: "PATCH",
                body: {
                    cartId: JSON.parse(localStorage.getItem("user"))?.id,
                    productId: params.productId,
                    quantity: params.quantity,
                },
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteProductFromCart: builder.mutation({
            query: ({ id }) => {
                const cartId = JSON.parse(localStorage.getItem("user"))?.id
                return {
                    url: `/api/carts/delete-product-from-cart?cartId=${cartId}&productId=${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["Cart"],
        }),
    }),
})

export const {
    useAddCartMutation,
    useGetCartByUserIdQuery,
    useUpdateProductCartQuantityMutation,
    useDeleteProductFromCartMutation
} = cartApiSlice
