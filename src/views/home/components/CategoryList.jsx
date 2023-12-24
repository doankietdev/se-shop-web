import { Button, CardProduct } from "~/components"
import CategoryRectangle from "~/components/icon/CategoryRectangle"
import { useGetLimitProductQuery } from "~/features/products/productApiSlice"

const CategoryList = (props) => {
    const { titleCategory, titleEvent, buttonBottom = false } = props

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetLimitProductQuery()

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const items = products?.metadata?.products
        content = (
            <>
                {items.map((item, index) => (
                    <CardProduct key={index} {...item} />
                ))}
            </>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }
    return (
        <div className="product-list relative">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5 mb-10">
                    <div className="category-rectagle flex items-center gap-4">
                        <CategoryRectangle />
                        <h3 className="text-base leading-5 font-semibold font-[Poppins] text-[#DB4444]">
                            {titleCategory}
                        </h3>
                    </div>
                    <div className="event flex items-end">
                        <h1 className="text-[32px] leading-[30px] font-semibold tracking-[1.44px] font-[Inter] text-black me-[87px]">
                            {titleEvent}
                        </h1>
                    </div>
                </div>
                {!buttonBottom && (
                    <div className="flex justify-center items-center mb-10">
                        <Button primary large>
                            View All
                        </Button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-5 gap-x-[10px] gap-y-[10px]">
                {content}
            </div>
            {buttonBottom && (
                <div className="flex justify-center items-center mb-[60px] mt-[60px]">
                    <Button primary large>
                        View All Products
                    </Button>
                </div>
            )}
        </div>
    )
}

export default CategoryList
