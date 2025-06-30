import { useState } from 'react';
import { format } from "date-fns";
import { FaSearch, FaSort } from 'react-icons/fa';
import { Button } from '@mui/material';
import useFetchList from '../../hooks/useFetchList';
import type { Employee } from '../../interface/employee.interface';
import useQuery from '../../hooks/useQuery';
import useDataPost from '../../hooks/useDataPost';
import { defaultPage, type DataResponse, type Page } from '../../interface/FetchData.interface';
import AccountOverview from './AccountOverview';

interface employeeDataPost {
  name: string,
  email: string,
  gender: string,
  address: string,
  status: string
};

const gender = [
    { label: "Male", value: "Male"},
    { label: "Female", value: "Female"},
    { label: "Other", value: "Other"},
    { label: "All", value: ""},
];
const EmployeeManagement = () => {
//
const [idTemp, setIdTemp] = useState('0');
const [showDetail, setShowDetail] = useState(false);

const path: string = "employee";
const [dataPost, updateDataPost, resetDataPost] = useDataPost({
  "name": '',
  "email": '',
  "gender": '',
  "address": '',
  "status": ''
});
const [query, updateQuery, resetQuery ] = useQuery(defaultPage);
const data: DataResponse = useFetchList(path, (query as Page), dataPost);
//
const SetData = (dataField: string, newData: string) => {
  if(typeof updateDataPost === 'function' && typeof resetQuery === 'function'){
    updateDataPost({ [dataField]: newData});
    resetQuery();
  }
}
const SetPage = (newPage: number) =>{
  if(typeof updateQuery === 'function' && typeof resetQuery === 'function'){
    updateQuery({ page: newPage});
  }
}

const HandleDetail = (id: string) =>{
  setIdTemp(id);
  setShowDetail(true);
}

const onCloseDetail = () =>{
  setShowDetail(false);
}

return (
  <>
  {data.data && (
  <div className="container mx-auto px-4 py-0 items-stretch">
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Employee Management</h1>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={(dataPost as employeeDataPost).name}
            onChange={(e) => SetData("name", e.target.value)}
          />
        </div>
      </div>

      <div className={`overflow-x-auto lg:h-128 bg-white rounded-lg shadow `}>
        <table className="min-w-full table-auto">
          <thead >
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Employee ID <FaSort className="inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Full Name <FaSort className="inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Date of born <FaSort className="inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Position <FaSort className="inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Status <FaSort className="inline ml-1" />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(data.data as Employee[]).map((employeeData) => (
              <tr
                key={employeeData.id}
                onClick={() => HandleDetail(employeeData.id)}
                className="hover:bg-gray-200 cursor-pointer transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {employeeData.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employeeData.firstName} {employeeData.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(employeeData.dateOfBirth, "MM/dd/yyyy")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employeeData.position}
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

    <div className="relative grid grid-cols-3 w-3/5 justify-items-center-safe mx-auto">
        <Button onClick={() => SetPage((query as Page).page - 1)}
        disabled={(query as Page).page === 0? true : false}>Previous</Button>
        <span className='self-center'>Page: {(query as Page).page + 1}</span>
        <Button
        disabled={data.data.length < (query as Page).size? true : false ||
          ((query as Page).page + 1) === data.totalPages? true : false
        }
        onClick={() => SetPage((query as Page).page + 1)}>After</Button>
    </div>

    {showDetail && (<AccountOverview employeeId={idTemp} onClose={onCloseDetail} />)}
  </div>
  )}
  </>
)
}

export default EmployeeManagement;