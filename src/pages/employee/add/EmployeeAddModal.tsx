import { useEffect, useState, type ChangeEvent } from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { employeeDefaultDataForm } from '../../../interface/interfaces';
import { apiFile } from '../../../config/axios';
import EmployeeModal from '../employee.modal';
import { mutate } from 'swr';
import dayjs from 'dayjs';

///Employee Add button
const EmployeeAdd = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formAddData, setFormData] = useState(employeeDefaultDataForm);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const image = (e.target.files) ? e.target.files[0] : null;
    setFormData({
      ...formAddData,
      image: image
    })
  };

  useEffect(() => {
    if (formAddData.image) setImgUrl(URL.createObjectURL(formAddData.image));
    //Clean up
    return () => {
      setImgUrl(null);
    }
  }, [formAddData.image]);

  const onSubmitAdd = async (e: SubmitEvent) => {
    try {
      e.preventDefault();
      if (formAddData.dateOfBirth == null) {
        const now = dayjs();
        setFormData({
          ...formAddData,
          dateOfBirth: now.toString()
        })
      }
      const response = await apiFile.post("employee", formAddData);
      if (response.data.success) {
        mutate("employee/filter");
        alert(response.data.message);
        setFormData(employeeDefaultDataForm);
        setIsAddModalOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setFormData({
      ...formAddData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-4 flex items-center justify-center">
      <div className="flex space-x-4">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <FaUserPlus className="mr-2" />
          Add
        </button>
      </div>

      <EmployeeModal
        textModal='Add'
        formData={formAddData}
        imgUrl={imgUrl}
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onChange={handleChange}
        onImageUpload={handleImageUpload}
        onSubmit={(e) => onSubmitAdd(e)}
      />
    </div>
  );
};

export default EmployeeAdd;