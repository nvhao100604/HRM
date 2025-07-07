import { useContext } from "react"
import { UIContext } from "."

const useUI = () =>{
    const [state, dispatch] = useContext(UIContext);

    return [state, dispatch];
}

export {useUI};