import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { defaultQuery } from '../../../interface/interfaces.ts';
import EmployeeAdd from '../add/EmployeeAddModal.tsx';
import { useQuery } from '../../../hooks';
import EmployeeList from './employee.employee_list.tsx';

const EmployeeManagement = () => {
  const [query, updateQuery, resetQuery] = useQuery(defaultQuery);
  //
  const handleSetData = (dataField: string, newData: string | number) => {
    console.log(dataField, newData)
    updateQuery({ [dataField]: newData });
  }
  return (
    <>
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

            <div className={` bg-white rounded-lg shadow`}>
              <EmployeeList query={query} handleSetData={handleSetData} />
            </div>
          </div>
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
          <div className='flex bg-red-500 justify-items-center place-items-center'>
            <EmployeeAdd />
          </div>
        </div>

        <div className='absolute bottom-8'>
          <Link to={"/employee"}>Back</Link>
        </div>
      </div>
    </>
  )
}

export default EmployeeManagement;