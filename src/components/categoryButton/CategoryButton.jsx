import React from "react"

const CategoryButton = (props) => {
    const { title, image, active } = props
    return (
        <div
            className={`w-[170px] h-[145px] flex justify-center items-center rounded border border-solid ${
                active ? `border-[#DB4444] bg-[#DB4444]` : `border-[rgba(0,0,0,0.30)]]`
            }`}
        >
            <div className="flex flex-col items-center gap-4">
                {image}
                <h5 className={`${active ? `text-white` : `text-black`} font-[Poppins] text-base`}>{title}</h5>
            </div>
        </div>
    )
}

export default CategoryButton
