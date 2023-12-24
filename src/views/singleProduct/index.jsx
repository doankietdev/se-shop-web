import React from "react"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"
import { useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "~/features/products/productApiSlice"
import { Technical } from "~/components"
import RelatedSlide from "./components/RelatedSlide"

const SingleProduct = () => {
    const { id: productId } = useParams()
    const {
        data: product,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetProductByIdQuery(productId)

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const productInfo = product?.metadata?.product
        content = (
            <section className="my-8 flex flex-col">
                <div className="flex w-full gap-10 flex-1">
                    <div className="h-[600px] flex flex-row-reverse relative gap-x-8 gap-y-4 justify-end">
                        <ProductSlide image={productInfo?.imageUrl} />
                    </div>
                    <div className="w-full">
                        <ProductInfo {...product} />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-10 gap-6">
                    <div className="max-w-[700px] overflow-hidden">
                        <h2 className="text-base text-[#4a4a4a] font-medium mb-3">
                            Accessories purchased together
                        </h2>

                        <RelatedSlide />
                    </div>
                    <div className="w-full">
                        <Technical {...productInfo} />
                    </div>
                </div>
            </section>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }

    return <>{content}</>
}

export default SingleProduct
