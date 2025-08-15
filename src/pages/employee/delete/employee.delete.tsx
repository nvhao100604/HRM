import { useState } from "react";
import type { Employee } from "../../../interface/interfaces";
import ConfirmModal from "./employee.confirm_modal";


const DeleteEmployee = ({ employee }: { employee: Employee }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="mt-3 space-y-4 flex items-center justify-center">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {isModalOpen &&
                <ConfirmModal employee={employee} handleClose={() => setIsModalOpen(false)} />
            }
        </>
    )
}

export default DeleteEmployee;