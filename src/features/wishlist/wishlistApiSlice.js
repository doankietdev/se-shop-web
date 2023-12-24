import { apiSlice } from "~/app/api/apiSlice"

export const wishlistApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWishlist: builder.query({
            query: () => "/api/wishlist/get-my-wishlist",
            providesTags: ['Wishlist']
        }),
        addProductToWishlist: builder.mutation({
            query: ({ id }) => ({
                url: "/api/wishlist/add-product",
                method: "POST",
                body: {
                    productId: id,
                },
            }),
            invalidatesTags: ['Wishlist']
        }),
        deleteProductFromWishlist: builder.mutation({
            query: ({ id }) => ({
                url: `/api/wishlist/delete-product?productId=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Wishlist']
        })
    }),
})

export const { useGetWishlistQuery, useAddProductToWishlistMutation, useDeleteProductFromWishlistMutation } = wishlistApiSlice
