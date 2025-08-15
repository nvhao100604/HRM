import { useEffect, useState, type ChangeEvent } from 'react'
import { employeeDefaultDataForm, type EmployeeDataForm } from '../../../interface/interfaces';
import { apiFile } from '../../../config/axios';
import { type Employee } from './../../../interface/employee/employee.interface';
import EmployeeModal from '../employee.modal';

const CreateEmployeeForm = (employee: Employee) => {
  const employeeForm: EmployeeDataForm = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    gender: employee.gender,
    phone: employee.phone,
    dateOfBirth: employee.dateOfBirth,
    citizenIdentificationCard: employee.citizenIdentificationCard,
    address: employee.address,
    status: employee.status,
    image: null
  }

  return employeeForm;
}
///Employee update button
const EmployeeUpdate = ({ employee }: { employee: Employee }) => {
  const [isAddModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(CreateEmployeeForm(employee));
  const [imgUrl, setImgUrl] = useState<string | null>(() => {
    return employee.image
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const image = (e.target.files) ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: image
    })
  };

  useEffect(() => {
    if (formData.image) setImgUrl(URL.createObjectURL(formData.image));
    //Clean up
    return () => {
      setImgUrl(null);
    }
  }, [formData.image]);

  useEffect(() => {
    const onUpdate = async (e: SubmitEvent) => {
      e.preventDefault();
      const response = await apiFile.put("employee", formData);
      setFormData(employeeDefaultDataForm);
      alert(response.data.message);
    }
    //Create eventlistener
    document.addEventListener("submit", onUpdate);
    //Clean up
    return () => {
      document.removeEventListener("submit", onUpdate);
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
          onClick={() => setIsModalOpen(true)}
          className="flex items-center p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          Update
        </button>
      </div>

      <EmployeeModal
        textModal='Update'
        formData={formData}
        imgUrl={imgUrl}
        isOpen={isAddModalOpen}
        onClose={() => setIsModalOpen(false)}
        onChange={handleChange}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default EmployeeUpdate;