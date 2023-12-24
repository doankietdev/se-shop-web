import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { RiHome3Fill } from "react-icons/ri"
import { MdWorkHistory } from "react-icons/md"
import { GoShieldCheck } from "react-icons/go"
import { GiPresent } from "react-icons/gi"
import { PiMedalLight } from "react-icons/pi"
import { FaUser } from "react-icons/fa"
import { MdSupportAgent } from "react-icons/md"
import { SlNote } from "react-icons/sl"
import { TbLogout } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { Popup } from "~/components"

const SideBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const sidebar = {
        member: ["Home", RiHome3Fill],
        order: ["Purchase History", MdWorkHistory],
        warranty: ["Look up warranty", GoShieldCheck],
        gift: ["Gift Card", GiPresent],
        rank: ["Rank", PiMedalLight],
        account: ["Account", FaUser],
        support: ["Support", MdSupportAgent],
        feedback: ["Feedback", SlNote],
    }
    const [pathName, setPathName] = useState(null)

    useEffect(() => {
        if (location) {
            let tmp = location.pathname.slice(
                location.pathname.lastIndexOf("/"),
                location.pathname.length
            )
            setPathName(tmp)
        }
    }, [location])

    const handleClickSideBar = (link) => {
        String(link) === "member"
            ? navigate("/member")
            : navigate(`/member/${link}`)
    }

    return (
        <div className="flex flex-col gap-2 items-start p-4 bg-[#f6fbfc] rounded-lg w-full">
            {Object.entries(sidebar).map(([link, [title, Icon]]) => (
                <div
                    onClick={() => handleClickSideBar(link)}
                    key={link}
                    // onClick={() => {
                    //     if(String(pathName) !== String(`/${link}`)) {
                    //         handleClickSideBar(link)
                    //     }
                    // }}
                    className={`w-full flex items-center justify-start p-2 
                        border rounded-lg gap-4 cursor-pointer 
                        ${
                            String(pathName) === String(`/${link}`)
                                ? "border-[#ff0000]"
                                : "border-transparent"
                        }`}
                >
                    <Icon
                        size={24}
                        color={`${
                            String(pathName) === String(`/${link}`) ? "red" : ""
                        }`}
                    />
                    <h3
                        className={`text-sm ${
                            String(pathName) === String(`/${link}`)
                                ? "text-[#ff0000]"
                                : ""
                        }`}
                    >
                        {title}
                    </h3>
                </div>
            ))}

            <Popup>
                <button
                    className="logout-button w-full flex items-center justify-start p-2 
                border-[2px] rounded-lg gap-4 cursor-pointer hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
                >
                    <TbLogout size={24} />
                    <h3 className="text-sm">Logout</h3>
                </button>
            </Popup>
        </div>
    )
}

export default SideBar
