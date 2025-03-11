import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.10.111:4000/api/v1",
    }),

    tagTypes: [],

    endpoints: (builder) => ({

        //create Contact
        createContact: builder.mutation({
            query: (data) => ({
                url: "/contacts/",
                method: "POST",
                body: data
            })
        }),

        //create Category
        createNewsletter: builder.mutation({
            query: (data) => ({
                url: "/newsletters/",
                method: "POST",
                body: data
            })
        }),

        //getCategories
        getCategory: builder.query({
            query: () => "/categories/"
        }),

        //review create
        createReview: builder.mutation({
            query: (data) => ({
                url: "/reviews/",
                method: "POST",
                body: data
            })
        })




    })
})





export const {

    useCreateContactMutation,
    useGetCategoryQuery,
    useCreateNewsletterMutation,
    useCreateReviewMutation










} = baseApi

