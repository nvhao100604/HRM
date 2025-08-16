
import { FaSort } from 'react-icons/fa';
import EmployeeUpdate from '../update/EmployeeUpdate';
import DeleteEmployee from '../delete/employee.delete';
import { Skeleton } from '@mui/material';

const EmployeeListSkeleton = () => {
    return (
        <>
            <table className="min-w-full table-auto border-collapse">
                <thead className='sticky top-0 z-10'>
                    <tr className="bg-gray-50 border-b border-gray-200 px-6 py-3 cursor-pointer ">
                        <Skeleton animation="wave" />
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {employeeList.map((employeeData) => (
                        <tr
                            key={employeeData.id}
                            className="hover:bg-gray-200 cursor-pointer transition-colors duration-150"
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <img src={employeeData.image} alt="" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {employeeData.firstName} {employeeData.lastName ?? ""}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {employeeData.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                                    {employeeData.status}
                                </span>
                            </td>
                            <td>
                                <div>
                                    <EmployeeUpdate employee={employeeData} />
                                    <DeleteEmployee employee={employeeData} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default EmployeeListSkeleton;