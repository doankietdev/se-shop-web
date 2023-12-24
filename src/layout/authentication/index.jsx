import { Outlet } from "react-router-dom"
import { Container, Footer, Header } from "~/components"

const Authentication = () => {
    return (
        <section className="w-full h-full pt-[94px]">
            <Header />
            <Container maxWidthNone={"maxWidthNone"}>
                <Outlet />
            </Container>
            <Footer />
        </section>
    )
}

export default Authentication
