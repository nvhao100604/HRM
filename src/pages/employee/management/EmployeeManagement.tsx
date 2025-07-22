import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSort } from 'react-icons/fa';
import { PageSegmentation } from '../../../components/index.ts';
import { defaultQuery, type Employee } from '../../../interface/interfaces.ts';
import { getCurrentUIState } from '../../../store/UIContext/hooks.tsx';
import EmployeeAdd from '../add/EmployeeAddModal.tsx';
import AccountOverview from '../overview/AccountOverview.tsx';
import { useFetchList, useQuery } from '../../../hooks';

const EmployeeManagement = () => {
  const [idTemp, setIdTemp] = useState('0');
  const [showDetail, setShowDetail] = useState(false);

  const currentState = getCurrentUIState();
  const path = currentState.path;

  const [query, updateQuery, resetQuery] = useQuery(defaultQuery);
  const data = useFetchList(path, query);
  //
  const handleSetData = (dataField: string, newData: string | number) => {
    console.log(dataField, newData)
    updateQuery({ [dataField]: newData });
  }

  const handleDetail = (id: string) => {
    setIdTemp(id);
    setShowDetail(true);
  }

  const handleCloseDetail = () => {
    setShowDetail(false);
  }

  return (
    <>
      {data.data && (
        <div className="container grid grid-cols-7 mx-auto px-4 py-0 items-stretch">
          <div className='col-span-5'>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Employee Management</h1>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={query.name ?? ""}
                    onChange={(e) => handleSetData("name", e.target.value)}
                  />
                </div>
              </div>

              <div className={`overflow-x-auto lg:h-136 bg-white rounded-lg shadow `}>
                <table className="min-w-full table-auto">
                  <thead >
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-1"
                      >
                        Employee ID <FaSort className="inline ml-1" />
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
                        Phone number <FaSort className="inline ml-1" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-2"
                      >
                        Status <FaSort className="inline ml-1" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(data.data as Employee[]).map((employeeData) => (
                      <tr
                        key={employeeData.id}
                        onDoubleClick={() => handleDetail(employeeData.id)}
                        className="hover:bg-gray-200 cursor-pointer transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {employeeData.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {employeeData.firstName} {employeeData.lastName ?? ""}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {employeeData.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {employeeData.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                            {/* {statusIcons[booking.status]}
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)} */}
                            {employeeData.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <PageSegmentation
              onSetPrevious={() => handleSetData("page", ((query.page ?? 1) - 1))}
              onSetAfter={() => handleSetData("page", ((query.page ?? 1) + 1))}
              currentPage={query.page ?? 0}
              totalItems={data.data.length}
              totalPages={data.totalPages}
              sizePerPage={query.size ?? 0}
              onGoToPage={handleSetData}
            />
          </div>

          <div className='px-10 w-95 col-span-2'>
            <div className='relative bg-white rounded-lg shadow h-60 px-2 py-4 items-center text-center'>
              <h1 className='uppercase font-bold'>Department's Information</h1>
              <h2 className='mb-4 font-bold text-orange-400'>Top Employee</h2>
            </div>
            <div className='relative bg-white rounded-lg shadow mt-4 h-95'>
              <h1 className='uppercase font-bold text-center py-4'>department other's employee</h1>
              <div className='px-4 overflow-x-auto'>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
              </div>
            </div>
            <div className='flex bg-red-500'>
              <EmployeeAdd />
              <EmployeeAdd />
            </div>

            {showDetail && (<AccountOverview employeeId={idTemp} onClose={handleCloseDetail} />)}
          </div>

          <div className='absolute bottom-8'>
            <Link to={"/employee"}>Back</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default EmployeeManagement;