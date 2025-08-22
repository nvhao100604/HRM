import { Bounce, ToastContainer, toast } from "react-toastify";
import { type ReactElement } from "react"
import Context from "./Context";
import { TOASTIFY_DEFAULT, TOASTIFY_ERROR, TOASTIFY_INFO, TOASTIFY_SUCCESS, TOASTIFY_TIME_OUT, TOASTIFY_WARNING } from "../../config/constants";

const Provider = ({ children, options }: { options: object, children: ReactElement }) => {
    const notify = (notification: string, type: string) => {
        switch (type) {
            case TOASTIFY_SUCCESS: return toast.success(notification, options);
            case TOASTIFY_ERROR: return toast.error(notification, options);
            case TOASTIFY_WARNING: return toast.warning(notification, options);
            case TOASTIFY_INFO: return toast.info(notification, options);
            case TOASTIFY_DEFAULT: return toast(notification, options);
        }
    }
    return (
        <Context.Provider value={{ notify }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={TOASTIFY_TIME_OUT}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </Context.Provider >
    )
}

export default Provider;