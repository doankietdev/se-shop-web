import React from "react"
import SideBar from "../components/SideBar"
import { useState } from "react"

const Warranty = () => {
    // useSelector to get the state => display Warrantyed items
    const [active, setActive] = useState("")
    const filterWarranty = {
        getAll: "All Warranty",
        accepted: "Accepted Product",
        dispatching: "Dispatching Product",
        fixing: "Fixing",
        done: "Done",
        returned: "Returned",
    }

    const handleOnClickFilter = (key, title) => {
        // set active,
        // dispatch action to get new state
        setActive(title)
    }

    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>

            <div className="warranty-container flex flex-col ms-6 w-full">
                <div className="flex items-start justify-around">
                    {Object.entries(filterWarranty).map(([key, title]) => (
                        <button
                            key={key}
                            className={`flex items-center justify-center px-4 py-2 border rounded ${
                                active === title ? "bg-[#ff0000]" : ""
                            }`}
                            onClick={() => handleOnClickFilter(key, title)}
                        >
                            <span
                                className={`text-base ${
                                    active === title ? "text-white" : ""
                                }`}
                            >
                                {title}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="warranty-content py-8">
                    <div className="no-warranty flex flex-col items-center justify-center gap-4">
                        <img
                            src="https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/Warranty-new.png"
                            alt="warranty card"
                        />
                        <p className="text-sm text-[#4a4a4a]">
                            There is no satisfactory warranty card
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Warranty
