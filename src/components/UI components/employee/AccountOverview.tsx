import React, { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import { FiCamera, FiEdit2 } from 'react-icons/fi';
import { useFetchGet, useFetchPut } from '../../../components/hooks';
import { defaultEmployee, type Employee } from '../../../interface/employee.interface';

const DEFAULT_URL = "https://res.cloudinary.com/dswwzexhq/image/upload/";
function AccountOverview({ employeeId, onClose }: { employeeId: string, onClose: () => void }) {

  const userData = useFetchGet("employee", employeeId as string);
  const [data_after_put, set_data_after_put] = useState<Employee>(defaultEmployee);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const defaultURL = userData.image;
  console.log(defaultURL)
  console.log(userData)
  const [imgUrl, setImgUrl] = useState<string>(defaultURL);

  const [confirmUpload, setConfirmUpload] = useState(false);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setImgFile(e.target.files[0]);
  };
  useEffect(() => {

    if (imgFile) setImgUrl(URL.createObjectURL(imgFile));
    // setConfirmUpload(true);
  }, [imgFile]);

  useEffect(() => {
    if (confirmUpload) {
      const data_after_fetch = useFetchPut('employee', dat)
      set_data_after_put()
    }
  }, [confirmUpload]);

  return (employeeId &&
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-[wiggle_1s_ease-in-out_infinite]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <img id='imgFile'
                  src={`${imgUrl}`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="absolute bottom-0 right-0 bg-orange-400 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200">
                <FiCamera className="text-white" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div className='flex justify-items-center shadow-xl shadow-black-300/50 rounded-md'>
              <label className="text-xl text-white self-center px-4 py-2">Employee ID</label>
              <p className="ml-2 text-white text-xl self-center px-4 py-2 font-bold">{userData?.id}</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>
                  <p className="text-gray-800 font-medium">{userData?.firstName} {userData?.lastName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Date of Birth</label>
                  <p className="text-gray-800 font-medium">{userData?.dateOfBirth}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Gender</label>
                  <p className="text-gray-800 font-medium">{userData?.gender}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="text-gray-800 font-medium">{userData?.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Phone</label>
                  <p className="text-gray-800 font-medium">{userData?.phone}</p>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Professional Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Position</label>
                  <p className="text-gray-800 font-medium">{userData?.position}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Citizen ID</label>
                  <p className="text-gray-800 font-medium">{userData?.citizenIdentificationCard}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Status</label>
                  <span className={`m-4 px-3 py-1 rounded-full text-sm ${userData?.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {userData?.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200">
              <FiEdit2 className="mr-2" />
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AccountOverview;