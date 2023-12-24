import { apiSlice } from "~/app/api/apiSlice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => {
                return {
                    url: "/api/users/get-info",
                }
            },
        }),
        updateUserInfo: builder.mutation({
            query: (params) => {
                const { firstName, lastName, address, image = null } = params
                const bodyFormData = new FormData()
                if (image) {
                    bodyFormData.append("image", image)
                }
                bodyFormData.append("firstName", firstName)
                bodyFormData.append("lastName", lastName)
                bodyFormData.append("address", address)
                return {
                    url: "/api/users/update-profile",
                    method: "PATCH",
                    body: bodyFormData,
                }
            },
        }),
    }),
})

export const { useGetUserQuery, useUpdateUserInfoMutation } = userApiSlice
