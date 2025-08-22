import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { actions } from "../../store/UIContext/state";
import { useUI } from "../../store/UIContext";

const ReturnButton = () => {
    const [state, dispatch] = useUI();
    
    const handleReturn = () => {
        dispatch(actions.resetUIState());
    }

    return (
        <div
            className="relative h-6 w-8 rounded-2xl flex place-items-center items-center justify-center
                    shadow-sm hover:bg-gray-200"
        ><Link to={'/'} onClick={handleReturn}><FiArrowLeft /></Link></div>
    )
}

export default ReturnButton;