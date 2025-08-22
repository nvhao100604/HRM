import { FaAccessibleIcon, FaSort } from 'react-icons/fa';
import EmployeeUpdate from '../update/EmployeeUpdate';
import type { Employee, Query } from '../../../interface/interfaces';
import DeleteEmployee from '../delete/employee.delete';
import { PageSegmentation } from '../../../components';
import EmployeeListSkeleton from './employee.employee_list_skeleton';
import { CLONE_AVATAR } from '../../../config/constants/public';
import { getEmployeeFilter } from '../../../services';

const EmployeeList = ({ query, handleSetData }: { query: Query, handleSetData: (key: string, data: string | number) => void }) => {
    const { data, error, isLoading } = getEmployeeFilter(query);

    const employeeList = (data && data.data) ? data.data : {};
    if (error) {
        console.error(error);
    }

    if (isLoading) {
        return (
            <>
                <EmployeeListSkeleton />
            </>
        )
    }
    return (
        <>
            {data && data.data && (
                <div className='overflow-x-auto overflow-y-auto lg:h-144'>
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-2"
                                >
                                    Action <FaAccessibleIcon className="inline ml-1" />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {(employeeList.content as Employee[]).map((employeeData) => (
                                <tr
                                    key={employeeData.id}
                                    className="hover:bg-gray-200 cursor-pointer transition-colors duration-150"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <img
                                            className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden object-cover"
                                            src={(employeeData.image == null || employeeData.image == "") ?
                                                CLONE_AVATAR : employeeData.image} alt="" />
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
                </div>
            )}

            {data && data.data &&
                <div className='sticky bot-0 z-10'>
                    <PageSegmentation
                        onSetPrevious={() => handleSetData("page", ((query.page ?? 1) - 1))}
                        onSetAfter={() => handleSetData("page", ((query.page ?? 1) + 1))}
                        currentPage={query.page ?? 0}
                        totalItems={employeeList.content.length}
                        totalPages={employeeList.totalPages}
                        sizePerPage={query.size ?? 0}
                        onGoToPage={handleSetData}
                    />
                </div>}
        </>
    )
}

export default EmployeeList;