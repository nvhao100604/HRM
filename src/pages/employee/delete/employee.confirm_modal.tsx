import { mutate } from "swr";
import { Modal } from "../../../components"
import type { Employee } from "../../../interface/interfaces";
import { useNotify } from "../../../store/ToastifyContext";
import { deleteEmployee } from "../../../services";
import { HandleError, HandleResponse } from "../../../utils";

const ConfirmModal = ({ employee, handleClose }
    : { employee: Employee, handleClose: () => void }) => {
    const notify = useNotify();

    const fetchDelete = async () => {
        try {
            const response = await deleteEmployee(employee.id);
            HandleResponse(response, notify, () => {
                mutate("employee/filter");
                handleClose();
            })
        } catch (error) {
            HandleError(error, notify);
        }
    }
    return (
        <>
            <Modal handleClick={handleClose}>
                <div className="p-4 text-xl">
                    <p className="text-2xl">{`Are you sure to delete ${employee.firstName} ${employee.lastName} ?`}</p>
                    <div className="w-full place-items-end mt-8">
                        <div className="w-2/5 p-2 flex place-items-stretch justify-between">
                            <button
                                className=" py-2 px-4 bg-red-600 rounded-md text-white"
                                onClick={fetchDelete}
                            >Yes</button>
                            <button
                                className=" py-2 px-4 bg-gray-400 rounded-md text-white"
                                onClick={handleClose}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ConfirmModal;