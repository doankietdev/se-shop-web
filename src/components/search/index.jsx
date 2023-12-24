import React, { useState, useRef } from "react"
import { SearchIcon } from "../icon"
import { useNavigate } from "react-router-dom"
import { useSearchProductQuery } from "~/features/products/productApiSlice"
import LoaderSearch from "../loaderSearch"

const Search = () => {
    const [value, setValue] = useState("")
    const ref = useRef(null)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const { data, isFetching, isSuccess } = useSearchProductQuery({
        name: value,
        limit: 10,
    })
    const handleClickSearch = (e, id) => {
        e.preventDefault()
        navigate(`/product/${id}`)
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        navigate(`/product-search?search=${value}`, { state: { value } })
    }
    const handleOnChange = (e) => {
        setValue(e.target.value)
        setIsOpen(true)
    }
    const toggle = () => {
        setTimeout(() => setIsOpen(!isOpen), 100)
    }

    let content
    if (isFetching) {
        content = <></>
    } else if (isSuccess) {
        const searchData = data?.metadata?.products
        content = (
            <>
                {isOpen && (
                    <div className="drop-down z-10 right-0 top-[140%] w-[400px] h-fit absolute text-sm bg-white border shadow-md">
                        <LoaderSearch>
                            {searchData.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={(e) =>
                                        handleClickSearch(e, item.id)
                                    }
                                    className="drop-down-row cursor-pointer py-2 px-4 border-b flex items-center justify-between hover:bg-gray-200"
                                >
                                    <span>{item.name}</span>
                                    <img
                                        src={item.imageUrl}
                                        className="w-[40px] h-[40px] object-contain"
                                    />
                                </div>
                            ))}
                        </LoaderSearch>
                    </div>
                )}
            </>
        )
    }
    return (
        <div className="relative">
            <form
                onSubmit={(e) => handleSearchSubmit(e)}
                className="search-form-header h-[100%] w-[243px] flex ps-5 pe-3 py-[7px] justify-center items-center rounded gap-2"
                action=""
            >
                <input
                    type="text"
                    ref={ref}
                    placeholder="What are you looking for?"
                    name="search"
                    value={value}
                    onChange={handleOnChange}
                    onClick={toggle}
                    onBlur={toggle}
                    className="flex-1 h-[100%] bg-transparent focus:outline-none text-xs"
                />
                <button type="submit" className="flex items-center">
                    <SearchIcon />
                </button>
            </form>
            {content}
        </div>
    )
}

export default Search
