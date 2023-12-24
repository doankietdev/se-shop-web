import React from "react"
import SideBar from "../components/SideBar"
import { useState } from "react"

const Gift = () => {

    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>

            <div className="gift-container flex flex-col ms-6 w-full">
                <div className="gift-content py-32">
                    <div className="no-gift flex flex-col items-center justify-center gap-4">
                        <img
                            src="https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/Warranty-new.png"
                            alt="gift card"
                        />
                        <p className="text-sm text-[#4a4a4a]">
                            There is no gift card for you
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gift
