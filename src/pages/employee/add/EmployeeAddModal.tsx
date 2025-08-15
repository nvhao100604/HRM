import { useEffect, useState, type ChangeEvent } from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { employeeDefaultDataForm } from '../../../interface/interfaces';
import { apiFile } from '../../../config/axios';
import EmployeeModal from '../employee.modal';

///Employee Add button
const EmployeeAdd = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState(employeeDefaultDataForm);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

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
    const onAdd = async (e: SubmitEvent) => {
      e.preventDefault();
      const response = await apiFile.post("employee", formData);
      setFormData(employeeDefaultDataForm);
      alert(response.data.message);
    }
    //Create eventlistener
    document.addEventListener("submit", onAdd);
    //Clean up
    return () => {
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