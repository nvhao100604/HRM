import { useEffect, useState, type ChangeEvent } from 'react'
import { type Employee } from './../../../interface/employee/employee.interface';
import EmployeeModal from '../employee.modal';
import dayjs from 'dayjs';
import { mutate } from 'swr';
import { useNotify } from '../../../store/ToastifyContext';
import { updateEmployee } from '../../../services';
import { CreateFormByEmployee, HandleError, HandleResponse } from '../../../utils';

///Employee update button
const EmployeeUpdate = ({ employee }: { employee: Employee }) => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = useNotify();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(CreateFormByEmployee(employee));
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(employee.image);
  }, [])

  useEffect(() => {
    if (formData.image) setImgUrl(URL.createObjectURL(formData.image));
    //Clean up
    return () => {
      setImgUrl("");
    }
  }, [formData.image]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const image = (e.target.files) ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: image
    })
  };

  const onSubmitUpdate = async (e: any) => {
    try {
      e.preventDefault();
      if (formData.dateOfBirth == null) {
        const now = dayjs().format('YYYY-MM-DD');
        setFormData({
          ...formData,
          dateOfBirth: now
        })
      }
      setIsLoading(true);
      const response = await updateEmployee(formData);
      HandleResponse(response, notify, () => {
        console.log("updated")
        mutate("employee/filter");
        setIsModalOpen(false);
      })
    } catch (error) {
      HandleError(error, notify)
    } finally {
      setIsLoading(false);
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
          className="flex items-center p-2
           bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          Update
        </button>
      </div>

      {isModalOpen && <EmployeeModal
        textModal='Update'
        isLoading={isLoading}
        formData={formData}
        imgUrl={imgUrl}
        onClose={() => setIsModalOpen(false)}
        onChange={handleChange}
        onImageUpload={handleImageUpload}
        onSubmit={(e) => onSubmitUpdate(e)}
      />}
    </div>
  );
};

export default EmployeeUpdate;