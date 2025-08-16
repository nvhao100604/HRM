import { Modal } from "../../../components"
import type { Employee } from "../../../interface/interfaces";
import { api } from "../../../config/axios";

const ConfirmModal = ({ employee, handleClose }: { employee: Employee, handleClose: () => void }) => {
    const fetchDelete = async () => {
        try {
            const response = await api.delete(`employee/${employee.id}`);
            if (response.data.success) {
                alert(response.data.message);
                handleClose();
            } else console.error(response.data.errors);
        } catch (error) {
            console.error(error);
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