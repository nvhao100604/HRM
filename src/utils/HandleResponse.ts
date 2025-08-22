import axios from "axios";
import type { ToastifyContextType } from "../store/ToastifyContext/Context";
import { TOASTIFY_ERROR, TOASTIFY_SUCCESS } from "../config/constants";

const HandleError = (error: any, notify: ToastifyContextType) => {
    if (axios.isAxiosError(error)) {
        // console.error(error);
        console.log("check error: ", error.message);
        let message = "Some errors occurred! Please try again.";

        if (error.message.includes("401")) {
            message = "The work session has expired or encountered a problem!";
        }

        if (error.message.includes("404")) {
            message = "Data not matching! Please try another one!";
        }

        if (error.message.includes("500")) {
            message = "Server Error! Please try again."
        }

        notify.notify(message, TOASTIFY_ERROR);
    } else {
        throw new Error("Undefine error!");
    }
}

const HandleResponse = (response: any, notify: ToastifyContextType, todo: () => void) => {
    if (response.success) {
        notify.notify(response.message, TOASTIFY_SUCCESS);
        todo();
    } else {
        console.error(response.error);
    }
}

export { HandleError, HandleResponse }