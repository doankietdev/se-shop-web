import PropsType from "prop-types"
import { useTimer } from "~/hooks"

const EventTimer = ({ month, day, year }) => {
    let { days, hours, minutes, seconds } = useTimer(
        `${year}-${month}-${day}T23:59:59`
    )

    return (
        <div className="timer flex gap-6">
            {Object.entries({
                Days: days,
                Hours: hours,
                Minutes: minutes,
                Seconds: seconds,
            }).map(([label, value]) => (
                <div key={label} className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center">
                    <p className="text-base leading-[20px] font-semibold font-[Poppins] text-black -mb-1">
                        {`${value}`.padStart(2, "0")}
                    </p>
                    <span className="text-black font-[Poppins] text-[11px] leading-[18px]">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    )
}

EventTimer.propsType = {
    month: PropsType.number.isRequired,
    day: PropsType.number.isRequired,
    year: PropsType.number.isRequired,
}

export default EventTimer
