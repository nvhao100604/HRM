import { FiRewind } from "react-icons/fi"
import { Link } from "react-router-dom"


const BackHome = ({ href }: { href: string }) => {
    return (
        <button
            className="absolute flex top-2 left-2 z-50 rounded-lg text-white 
            hover:bg-gray-300 hover:text-black hover:font-medium"
        >
            <Link
                className="flex place-items-center gap-2 p-2"
                to={href}>
                <FiRewind /><span>Go back</span>
            </Link>
        </button>
    )
}

export default BackHome;