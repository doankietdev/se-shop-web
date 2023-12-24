import images from "~/assets/images"
import { Container, Line } from "~/components"
import { CopyrightIcon, FacebookIcon, InstagramIcon, LinkedIcon, SendIcon, TwitterIcon } from "~/components/icon"
import style from "~/style"

const Footer = () => {
    return (
        <>
            <Container classCustom={"w-full h-[376px] bg-black bottom-0"}>
                <div className="footer pt-20 pb-[60px]">
                    <div className="flex">
                        <div className="flex flex-2 flex-col items-start me-[87px]">
                            <a
                                href="/#"
                                className="text-base mb-6 font-bold font-['Inter'] leading-6 tracking-wider text-color-white"
                            >
                                SE Shop
                            </a>
                            <a href="/#" className="text-sm mb-6 font-light text-color-white">
                                Subscribe
                            </a>
                            <a href="/#" className="text-sm mb-4 font-light text-color-white">
                                Get 10% off your first order
                            </a>
                            <div className="input-email">
                                <form
                                    className="h-[40px] w-full flex justify-center items-center rounded border-[1.5px] border-[#FAFAFA] py-[12px] ps-[16px]"
                                    action=""
                                >
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        name="email"
                                        className="flex-1 w-[100%] bg-transparent focus:outline-none text-sm font-[Poppins] text-white"
                                    />
                                    <button type="submit" className="flex items-center pe-[16px]">
                                        <SendIcon />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start me-[87px]">
                            <span className="text-base mb-6 font-light text-color-white">Support</span>
                            <span className="text-sm mb-4 font-light text-color-white">
                                111 Bijoy sarani, Dhaka,
                                <br />
                                DH 1515, Bangladesh
                            </span>
                            <span className="text-sm mb-4 font-light text-color-white">exclusive@gmail.com</span>
                            <span className="text-sm font-light text-color-white">+88015-88888-9999</span>
                        </div>
                        <div className="flex flex-1 flex-col items-start me-[87px]">
                            <span className="text-base mb-6 font-medium text-color-white">Account</span>
                            <span className="text-sm mb-4 font-light text-color-white">My Account</span>
                            <span className="text-sm mb-4 font-light text-color-white">Login / Register</span>
                            <span className="text-sm mb-4 font-light text-color-white">Cart</span>
                            <span className="text-sm mb-4 font-light text-color-white">Wishlist</span>
                            <span className="text-sm font-light text-color-white">Shop</span>
                        </div>
                        <div className="flex flex-1 flex-col items-start me-[87px]">
                            <span className="text-base mb-6 font-medium text-color-white">Quick Link</span>
                            <span className="text-sm mb-4 font-light text-color-white">Privacy Policy</span>
                            <span className="text-sm mb-4 font-light text-color-white">Term Of Use</span>
                            <span className="text-sm mb-4 font-light text-color-white">FAQ</span>
                            <span className="text-sm font-light text-color-white">Contact</span>
                        </div>
                        <div className="flex flex-2 flex-col items-start">
                            <span className="text-base mb-6 font-medium text-color-white">Download App</span>
                            <span className="text-xs mb-2 leading-4 font-medium text-color-white opacity-70">
                                Save $3 with App New User Only
                            </span>
                            <div className="download flex mb-6">
                                <div className="download__qr me-2">
                                    <img
                                        src={images.qr_code}
                                        alt="qr"
                                        className="w-[76px] h-[76px] border-[2.5px] border-solid border-[#FFF] bg-gray-50"
                                    />
                                </div>
                                <div className="download__store flex flex-col justify-between">
                                    <div className="google_play flex justify-center items-center">
                                        <img
                                            src={images.google_play}
                                            alt="google_play"
                                            className="w-[110px] h-[36px] object-cover rounded border-[0.6px] border-solid border-[#FAFAFA] bg-[#030406]"
                                        />
                                    </div>
                                    <div className="app_store flex justify-center items-center">
                                        <img
                                            src={images.app_store}
                                            alt="google_play"
                                            className="w-[110px] h-[36px] object-cover rounded border-[0.6px] border-solid border-[#FAFAFA] bg-[#030406]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="social-link">
                                <ul className="socical-link__list flex items-center">
                                    <li className="me-6">
                                        <FacebookIcon />
                                    </li>
                                    <li className="me-6">
                                        <TwitterIcon />
                                    </li>
                                    <li className="me-6">
                                        <InstagramIcon />
                                    </li>
                                    <li>
                                        <LinkedIcon />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Line style={style.lineStyleFooter} />
            <div className="footer-bottom w-full h-[64px] bg-black">
                <div className="flex justify-center items-center pt-4 pb-6 opacity-30">
                    <CopyrightIcon />
                    <span className="text-xs font-light text-color-white">
                        &nbsp; Copyright SE-Lengend 2023. All right reserved
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer
