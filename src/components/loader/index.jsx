import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"

const Loader = ({ children }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])

    const loader = (
        <div className="min-h-[200px] flex justify-center items-center">
            <ClipLoader
                color="#DB4444"
                loading={loading}
                // cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
    return <>{loading ? loader : children}</>
}

export default Loader
