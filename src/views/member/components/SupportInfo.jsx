import React from "react"
import images from "~/assets/images"
import { CiUser } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

const SupportInfo = () => {
    return (
        <div className="payment-box-container shadow-md border rounded-lg px-4 py-5">
            <div className="payment-header flex items-center justify-start gap-4 mb-4">
                <div className="w-[35px] h-[35px]">
                    <img src={images.presentor} className="object-contain" />
                </div>
                <h3 className="text-lg font-medium">Support Information</h3>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start gap-6">
                    <BsTelephone size={22} color="#4a4a4a" />
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-sm text-[#4a4a4a]">
                            Shop's phone number:
                        </p>
                        <a
                            href="tel:02871000472"
                            className="support-phone text-base text-[#ff0000]"
                        >
                            (028) 7100 0472
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-6">
                    <CiLocationOn size={24} color="#4a4a4a" />
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-sm text-[#4a4a4a]">
                            Shop's location:
                        </p>
                        <p className="support-phone text-base">
                            472 - 474 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportInfo
