import { Advertisement, Category, PageButton } from "~/components"
import { advertisement } from "~/components/variables"
import style from "~/style"
import { GrPowerReset } from "react-icons/gr"
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa"
import { Product } from "~/components"
import { useState } from "react"
import { useGetAllProductQuery } from "~/features/products/productApiSlice"

const Products = () => {
    const [page, setPage] = useState(1)
    const [sortActive, setSortActive] = useState(null)

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductQuery({
        page,
        order: sortActive,
    })

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = <Product products={products?.metadata?.products} />
    } else if (isError) {
        content = <p>{error}</p>
    }

    const sort = {
        asc: [FaSortAmountDown, "Price Low-High"],
        desc: [FaSortAmountDownAlt, "Price High-Low"],
        reset: [GrPowerReset, "Reset"],
    }

    const sortActiveHandler = (key) => {
        if (String(key) !== 'reset') {
            setSortActive(key)
        } else {
            setSortActive(null)
        }
    }

    const lastPage = () => setPage(products?.metadata?.totalPage)

    const firstPage = () => setPage(1)

    const pagesArray = Array(products?.metadata?.totalPage)
        .fill()
        .map((_, index) => index + 1)

    const nav = (
        <nav className="nav-ex2 flex items-center justify-center gap-3">
            <button
                className="text-xl text-white w-[32px] h-[32px] rounded-lg bg-slate-500 disabled:bg-slate-300"
                onClick={firstPage}
                disabled={page === 1}
            >
                &lt;&lt;
            </button>
            {pagesArray.map((pg) => (
                <PageButton key={pg} pg={pg} setPage={setPage} />
            ))}
            <button
                className="text-xl text-white w-[32px] h-[32px] rounded-lg bg-slate-500 disabled:bg-slate-300"
                onClick={lastPage}
                disabled={page === products?.metadata?.totalPage}
            >
                &gt;&gt;
            </button>
        </nav>
    )

    return (
        <div className="flex flex-col gap-16 mb-8">
            <section>
                <div className="top-home flex pt-10">
                    <div className="flex-1 category-menu">
                        <Category />
                    </div>
                    <div className={`ms-[56px] ${style.advertisememtStyle}`}>
                        <Advertisement advertisement={advertisement} />
                    </div>
                </div>
            </section>
            <section>
                <div className="sort">
                    <h1 className="sort-title mb-4">Sort by:</h1>
                    <div className="btn-sort flex gap-4">
                        {Object.entries(sort).map(([key, [Icon, title]]) => (
                            <button
                                onClick={() => sortActiveHandler(key)}
                                key={key}
                                className={`sort-decrement flex items-center justify-around gap-3 px-2 rounded bg-[#f3f4f6] border ${
                                    key === sortActive
                                        ? "border-[#ff0000]"
                                        : "border-[#e5e7eb]"
                                } h-[34px]`}
                            >
                                <Icon
                                    color={`${key === sortActive ? "red" : ""}`}
                                />
                                <p
                                    className={`text-xs ${
                                        key === sortActive
                                            ? "text-[#ff0000]"
                                            : "text-[black]"
                                    }`}
                                >
                                    {title}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {content}
            {nav}
        </div>
    )
}

export default Products
