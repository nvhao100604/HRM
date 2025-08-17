import { createContext } from "react";

interface ToastifyContextType {
    notify: (notification: string, type: string) => void
}

const Context = createContext<ToastifyContextType>({
    notify: () => { }
})

export default Context;