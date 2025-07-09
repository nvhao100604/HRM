import React, { useEffect, useState, type ChangeEvent } from 'react'
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FiCamera } from 'react-icons/fi';
import {FaUserPlus } from 'react-icons/fa';
import apiFile from '../../config/axios/index';
import { employeeDefaultDataForm, type EmployeeDataForm, type RadioItems } from '../../interface/interfaces';
import {InputField, RadioVariant, SubmitComponent} from '../../components/UI components';

const genderOption: RadioItems[] = [
  {id: "male", label: "Male"},
  {id: "female", label: "Female"},
  {id: "other", label: "Other"}
]

const EmployeeAddModal = ({formData, imgUrl, isOpen, onClose, onChange, onImageUpload } :
  {formData: EmployeeDataForm,
    imgUrl: string | null,
    isOpen: boolean; 
    onClose: () => void; 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void
    }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 md:mx-0" role="dialog" aria-modal="true">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-600">Add New Employee</h2>
          </div>
          <form className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-grey-400">
                  <img id='imgFile'
                    src={imgUrl ?? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
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
                    onChange={onImageUpload}
                  />
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <InputField label="First name" name="firstName" type="text" formData={formData.firstName} onChange={onChange}/>
                <InputField label="Last name" name="lastName" type="text" formData={formData.lastName} onChange={onChange}/>
            </div>
            <InputField label="Address" name="address" type="text" formData={formData.address} onChange={onChange}/>
            <InputField label="Email" name="email" type="email" formData={formData.email} onChange={onChange}/>
            <InputField label="Phone number" name="phone" type="text" formData={formData.phone} onChange={onChange}/>
            <InputField label='Citizen Identification Card' 
                        type='number' name='citizenIdentificationCard' 
                        formData={formData.citizenIdentificationCard}
                        onChange={onChange}
                        />
            <RadioVariant radioName="gender" radioItems={genderOption} onSetData={onChange} />
            <SubmitComponent feature='Add Employee' text='Adding...' isLoading={isLoading} onClose={onClose}/>

          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

EmployeeAddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

///Employee Add button
const EmployeeAdd = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState(employeeDefaultDataForm);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const image = (e.target.files)? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: image})
  };

  useEffect(() => {
    if(formData.image) setImgUrl(URL.createObjectURL(formData.image));
    //Clean up
    return () => {
      setImgUrl(null);
    }
  }, [formData.image]);

  useEffect(() => {
    const onAdd = async(e: SubmitEvent) =>{
      e.preventDefault();
      const response = await apiFile.post("employee", formData);
      setFormData(employeeDefaultDataForm);
      alert(response.data.message);
    }
    //Create eventlistener
    document.addEventListener("submit", onAdd);
    //Clean up
    return () =>{
      document.removeEventListener("submit", onAdd);
    }
  }, [formData])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mt-3 space-y-4 flex items-center justify-center">
      <div className="flex space-x-4">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <FaUserPlus className="mr-2" />
          Add Employee
        </button>
      </div>

      <EmployeeAddModal
        formData={formData}
        imgUrl={imgUrl}
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onChange={handleChange}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default EmployeeAdd;