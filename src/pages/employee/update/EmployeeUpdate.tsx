import { useEffect, useState, type ChangeEvent } from 'react'
import { employeeDefaultDataForm, type EmployeeDataForm } from '../../../interface/interfaces';
import { apiFile } from '../../../config/axios';
import { type Employee } from './../../../interface/employee/employee.interface';
import EmployeeModal from '../employee.modal';
import dayjs from 'dayjs';

const CreateEmployeeForm = (employee: Employee) => {
  const employeeForm: EmployeeDataForm = {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    gender: employee.gender,
    phone: employee.phone,
    dateOfBirth: employee.dateOfBirth,
    citizenIdentificationCard: employee.citizenIdentificationCard,
    address: employee.address,
    status: employee.status,
    image: null,
    roleId: employee.roleId
  }

  return employeeForm;
}
///Employee update button
const EmployeeUpdate = ({ employee }: { employee: Employee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    console.log("check date of birth: ", formData.dateOfBirth);
  }, [formData.dateOfBirth])

  const onSubmitUpdate = async (e: any) => {
    try {
      e.preventDefault();
      if (formData.dateOfBirth == null) {
        const now = dayjs().format('YYYY-MM-DD');
        console.log("check now:", now);
        setFormData({
          ...formData,
          dateOfBirth: now
        })
      }
      const response = await apiFile.put("employee", formData);
      console.log(response.data.errors);
      if (!response.data.success) {
        console.log("check form after:", formData);
        console.log(response.data.errors);
      }
      alert(response.data.message);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      console.log(formData);
    }
  }

  const handleChange = (e: any) => {
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onChange={handleChange}
        onImageUpload={handleImageUpload}
        onSubmit={(e) => onSubmitUpdate(e)}
      />
    </div>
  );
};

export default EmployeeUpdate;