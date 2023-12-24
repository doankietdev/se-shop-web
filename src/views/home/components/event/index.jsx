import React from "react"
import EventTimer from "./EventTimer"
import Button from "~/components/button"
import { useNavigate } from "react-router-dom"

const Event = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center bg-black relative">
            <div className="description flex flex-col items-start ps-[56px] py-[69px]">
                <div className="intro-content flex flex-col gap-8 mb-[40px]">
                    <h5 className="text-base text-[#0F6] font-semibold leading-5 font-[Poppins]">
                        Categories
                    </h5>
                    <p className="text-5xl text-[#FAFAFA] leading-[60px] tracking-[1.92px] font-semibold">
                        Enhance Your
                        <br />
                        Music Experience
                    </p>
                    <EventTimer year={2023} month={12} day={10} />
                </div>
                <Button onClick={() => navigate('/product/301')} third large>
                    Buy Now!
                </Button>
            </div>
            <div className="w-[600px] h-[420px] opacity-30 blur-[130px] rounded-[504px] bg-[#D9D9D9]"></div>
            <div
                className="w-[600px] h-[420px] flex justify-center items-center -scale-x-100 absolute right-0 top-10"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dmnzkqysq/image/upload/v1696870710/tbilvxafyafwx3tkyend.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </div>
    )
}

export default Event
