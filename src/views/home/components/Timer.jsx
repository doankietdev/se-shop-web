import PropsType from "prop-types"
import EllipseIcon from "~/components/icon/EllipseIcon"
import { useTimer } from "~/hooks"

const Timer = ({ month, day, year }) => {
    let { days, hours, minutes, seconds } = useTimer(
        `${year}-${month}-${day}T23:59:59`
    )
    let timeArr = Object.entries({
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds,
    })
    const length = timeArr.length
    return (
        <div className="timer flex gap-[21px]">
            {timeArr.map(([label, value], index) => (
                <div key={label} className="flex gap-[21px] items-end">
                    <div className="box">
                        <span className="text-sm leading-[18px] font-medium text-black font-[Poppins]">
                            {label}
                        </span>
                        <p className="text-[32px] font-bold leading-[30px] tracking-[1.28px] font-[Inter] text-black">
                            {`${value}`.padStart(2, "0")}
                        </p>
                    </div>
                    {index !== length - 1 && (
                        <div className="flex flex-col gap-2 mb-2">
                            <EllipseIcon />
                            <EllipseIcon />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

Timer.propsType = {
    month: PropsType.number.isRequired,
    day: PropsType.number.isRequired,
    year: PropsType.number.isRequired,
}

export default Timer
