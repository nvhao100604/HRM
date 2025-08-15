
import { FaSort } from 'react-icons/fa';
import EmployeeUpdate from '../update/EmployeeUpdate';
import type { Employee } from '../../../interface/interfaces';
import DeleteEmployee from '../delete/employee.delete';

const EmployeeList = ({ employeeList }: { employeeList: Employee[] }) => {
    return (
        <>
            <table className="min-w-full table-auto border-collapse">
                <thead className='sticky top-0 z-10'>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-1"
                        >
                            Avatar <FaSort className="inline ml-1" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
                      tracking-wider cursor-pointer col-span-2"
                        >
                            Full Name <FaSort className="inline ml-1" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-3"
                        >
                            Email <FaSort className="inline ml-1" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-2"
                        >
                            Status <FaSort className="inline ml-1" />
                        </th>
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

export default EmployeeList;