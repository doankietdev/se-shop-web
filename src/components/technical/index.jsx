import React from "react"

const Technical = (products) => {
    const productDetail = {
        screen: ['Screen size',products?.screen],
        operatingSystem: ['Operating system',products?.operatingSystem],
        processor: ['Processor',products?.processor],
        ram: ['Ram',products?.ram],
        storageCapacity: ['Storage Capacity',products?.storageCapacity],
        dimensions: ['Dimensions',products?.dimensions],
        weight: ['Weight',products?.weight],
        batteryCapacity: ['Battery Capacity',products?.batteryCapacity],
        frontCameraResolution: ['Front camera resolution',products?.frontCameraResolution],
        rearCameraResolution: ['Rear camera resolution',products?.rearCameraResolution],
        connectivity: ['Connectivity',products?.connectivity],
    }

    return (
        <div className="technicalInfo flex flex-col overflow-hidden">
            <h2 className="text-base font-medium text-[#4a4a4a] mb-3">Specifications</h2>
            <ul className=" [&>*:nth-child(odd)]:bg-[#f2f2f2] border rounded-xl overflow-hidden">
                {Object.entries(productDetail).map(([key, [name, value]]) => (
                    <li
                        key={key}
                        className="flex items-center justify-start p-3 gap-12"
                    >
                        <p className="text-sm text-[#4a4a4a] min-w-[200px]">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </p>
                        <div className="text-sm text-[#4a4a4a] min-w-[150px]">{value}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Technical
