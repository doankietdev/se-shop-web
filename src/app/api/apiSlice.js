import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_ROOT,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('x-api-version', 1)
    if (localStorage.getItem('user')) {
      headers.set('x-user-id', JSON.parse(localStorage.getItem('user'))?.id)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/api/auth/refresh-token', api, extraOptions)
    console.log(refreshResult)
    if (refreshResult?.data) {
      // store the new token
      // api.dispatch(setCredentials({ ...refreshResult.data }))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Cart', 'Order', 'Wishlist'],
  endpoints: (builder) => ({})
})
