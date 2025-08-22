import { EMPLOYEE_ACTIVE_STATUS } from "../../../config/constants";
import type { Account } from "../../../interface/interfaces";


const NonEditableView = ({ userData }: { userData: Account }) => {
    return (
        <>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Non-Editable Information</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-500">Position</label>
                        <p className="text-gray-800 font-medium">{userData.roleName}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Department</label>
                        <p className="text-gray-800 font-medium">{userData.departmentName}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Email</label>
                        <p className="text-gray-800 font-medium">{userData.email}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Phone </label>
                        <p className="text-gray-800 font-medium">{userData.phone}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Status</label>
                        <span className={`m-4 px-3 py-1 rounded-full text-sm 
                        ${userData.status === EMPLOYEE_ACTIVE_STATUS ?
                                "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {userData.status}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NonEditableView;