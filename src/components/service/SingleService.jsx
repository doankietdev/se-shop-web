import PropsType from "prop-types"

const SingleService = (props) => {
    const { serviceName, serviceDesc, serviceIcon } = props
    return (
        <div className="flex flex-col gap-6 justify-center">
            <div className="service-icon-container flex justify-center items-center">
                <div className="service-icon bg-black w-[80px] h-[80px] rounded-full flex justify-center items-center border-[10px] border-b-gray-700">{serviceIcon}</div>
            </div>
            <div className="service-content flex flex-col justify-center items-center">
                <h1 className="text-black font-[Poppins] text-xl font-semibold uppercase mb-2">{serviceName}</h1>
                <p className="text-black font-[Poppins] text-sm leading-[21px] font-normal">{serviceDesc}</p>
            </div>
        </div>
    )
}

SingleService.propsType = {
    serviceName: PropsType.string.isRequired,
    serviceDesc: PropsType.string.isRequired,
    serviceIcon: PropsType.element.isRequired
}

export default SingleService
