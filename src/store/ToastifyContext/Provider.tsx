import { Bounce, ToastContainer, toast } from "react-toastify";
import { type ReactElement } from "react"
import Context from "./Context";
import { TOASTIFY_ERROR, TOASTIFY_INFO, TOASTIFY_SUCCESS, TOASTIFY_WARNING } from "../../config/constants";

const Provider = ({ children }: { children: ReactElement }) => {
    const notify = (notification: string, type: string) => {
        switch (type) {
            case TOASTIFY_SUCCESS: return toast.success(notification);
            case TOASTIFY_ERROR: return toast.error(notification);
            case TOASTIFY_WARNING: return toast.warning(notification);
            case TOASTIFY_INFO: return toast.info(notification);
        }
    }
    return (
        <Context.Provider value={{ notify }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Context.Provider >
    )
}

export default Provider;