import images from "~/assets/images"
import SignUpForm from "./Form/Form"

const Signup = () => {
    return (
        <section>
            <div className="flex w-full h-auto justify-between items-center py-16">
                <div className="overflow-hidden">
                    <img
                        className="w-[805px] object-contain"
                        src={images.shop_auth}
                    />
                </div>
                <div className="me-[135px] min-w-[371px]">
                    <SignUpForm />
                </div>
            </div>
        </section>
    )
}

export default Signup
