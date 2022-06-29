import { useLocation } from "react-router"

const Success = () => {
    const location = useLocation()

    console.log(location)
    return (
        <div>
            Succesfull!
        </div>
    )
}

export default Success
