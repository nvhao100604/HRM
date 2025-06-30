import React, { useState, type ChangeEvent } from 'react'
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaBriefcase, FaClock, FaFileContract, FaGlobeAmericas, FaLaptop, FaUserGraduate, FaUserPlus } from 'react-icons/fa';
import type { SelectItem } from '../../interface/selectElement.interface';
import { defaultEmployee, type Employee } from '../../interface/employee.interface';
import { InputField } from '../../components/InputField';
import TypeSelect from '../../components/CustomSelection';
import { SubmitComponent } from '../../components/SubmitComponent';

const employmentTypes: SelectItem[] = [
    { id: "full-time", label: "Full Time", description: "Standard 40-hour work week" },
    { id: "part-time", label: "Part Time", icon: FaClock, description: "Less than 40 hours per week" },
    { id: "freelance", label: "Freelance", icon: FaLaptop, description: "Independent contractor work" },
    { id: "intern", label: "Intern", icon: FaUserGraduate, description: "Training position for students/graduates" },
    { id: "contract", label: "Contract", icon: FaFileContract, description: "Fixed-term employment agreement" },
    { id: "remote", label: "Remote", icon: FaGlobeAmericas, description: "Work from anywhere position" }
];

const EmployeeAddModal = ({ isOpen, onClose, onAdd } :
    {isOpen: boolean; onClose: ()=> void; onAdd: (E: Employee)=> void}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultEmployee);

  if (!isOpen) return null;

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onAdd(formData);
      setIsLoading(false);
      onClose();
    } catch (error) {
      console.error("Error adding employee:", error);
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  console.log(formData);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 md:mx-0" role="dialog" aria-modal="true">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-600">Add New Employee</h2>
          </div>
          <form onSubmit={() => handleSubmit} className="space-y-4">
            <div className='grid grid-cols-2 gap-5'>
                <InputField label="First name" name="firstName" type="text" formData={formData.firstName} handleChange={handleChange}/>
                <InputField label="Last name" name="lastName" type="text" formData={formData.lastName} handleChange={handleChange}/>
            </div>
            <InputField label="Position" name="position" type="text" formData={formData.position} handleChange={handleChange}/>
            <InputField label="Email" name="email" type="email" formData={formData.firstName} handleChange={handleChange}/>
            <InputField label="Phone number" name="phone" type="text" formData={formData.phone} handleChange={handleChange}/>
            <TypeSelect employmentTypes={employmentTypes} textType='Position' name="position"/>
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

const EmployeeAdd = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAdd = async (employeeData: Employee) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("New employee added:", employeeData);
        resolve(employeeData);
      }, 2000);
    });
  };

  return (
    <div className="p-4 space-y-4">
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
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default EmployeeAdd;