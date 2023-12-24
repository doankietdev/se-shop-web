import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"

const LoaderSearch = ({ children }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [])

    const loader = (
        <div className="max-h-[100px] flex justify-center items-center">
            <ClipLoader
                color="#DB4444"
                loading={loading}
                // cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
    return <>{loading ? loader : children}</>
}

export default LoaderSearch
