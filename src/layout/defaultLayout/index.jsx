import { Outlet } from "react-router-dom"
import { Container, Footer, Header } from "~/components"

const title =
    "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"

const DefaultLayout = () => {
    return (
        <section
            className={`w-full min-h-screen ${
                title ? "pt-[142px]" : "pt-[94px]"
            }`}
        >
            <Header title={title} />
            <Container><Outlet /></Container>
            <Footer />
        </section>
    )
}

export default DefaultLayout
