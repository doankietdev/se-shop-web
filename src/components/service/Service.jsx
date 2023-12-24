import { CustomerServiceIcon, DeliveryServiceIcon, SercureIcon } from "../icon"
import SingleService from "./SingleService"

const Service = () => {
    return (
        <div className="flex mx-auto gap-[88px] my-32">
            <SingleService
                serviceName={"FREE AND FAST DELIVERY"}
                serviceDesc={"Free delivery for all orders over $140"}
                serviceIcon={<DeliveryServiceIcon />}
            />
            <SingleService
                serviceName={"24/7 CUSTOMER SERVICE"}
                serviceDesc={"Friendly 24/7 customer support"}
                serviceIcon={<CustomerServiceIcon />}
            />
            <SingleService
                serviceName={"MONEY BACK GUARANTEE"}
                serviceDesc={"We return money within 30 days"}
                serviceIcon={<SercureIcon />}
            />
        </div>
    )
}

export default Service
