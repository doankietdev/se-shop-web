import { useNavigate } from "react-router-dom"
import { useGetAllCategoryQuery } from "~/features/category/categoryApiSlide"

const Category = () => {
    const navigate = useNavigate()
    const {
        data: categories,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllCategoryQuery()

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const types = categories?.metadata?.categories
        content = (
            <div className="category flex flex-col items-start">
                {types.map((item) => (
                    <div
                        onClick={() =>
                            navigate(`/${item.name}`.toLowerCase(), {
                                state: { categoryId: `${item.id}` },
                            })
                        }
                        key={item.id}
                        className="category__link w-full py-2 ps-2 ms-[-8px] rounded hover:bg-slate-100 flex cursor-pointer"
                    >
                        <span className="text-center leading-6 font-[Poppins] text-sm text-black">
                            {item.description}
                        </span>
                    </div>
                ))}
            </div>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }
    return <>{content}</>
}

export default Category
