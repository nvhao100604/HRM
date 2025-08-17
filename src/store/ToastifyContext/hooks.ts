import { useContext } from "react";
import { ToastifyContext } from ".";

const useNotify = () => useContext(ToastifyContext);

export { useNotify }