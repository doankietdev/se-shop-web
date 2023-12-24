import { BsTabletLandscape } from "react-icons/bs"
import { GrShieldSecurity } from "react-icons/gr"
import { TbDeviceWatchStats } from "react-icons/tb"
import {
    CameraIcon,
    ComputerIcon,
    GamingIcon,
    HeadPhoneIcon,
    PhoneIcon,
} from "~/components/icon"

export const categoryBrowse = [
    { _id: "1", title: "Phones", image: <PhoneIcon /> , active: false },
    { _id: "2", title: "Computer", image: <ComputerIcon /> , active: false },
    { _id: "3", title: "SmartWatch", image: <TbDeviceWatchStats size={"56px"}/> , active: false },
    { _id: "4", title: "Cameras", image: <CameraIcon /> , active: true },
    { _id: "5", title: "HeadPhones", image: <HeadPhoneIcon /> , active: false },
    { _id: "6", title: "Gaming,", image: <GamingIcon /> , active: false },
    { _id: "7", title: "Sercurity", image: <GrShieldSecurity size={"56px"}/> , active: false },
    { _id: "8", title: "Tablet", image: <BsTabletLandscape size={"56px"}/> , active: false },
]
