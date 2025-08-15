import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FiCamera } from 'react-icons/fi';
import { DatePickers, InputField, Modal, Radio, Submit } from '../../components';
import type { EmployeeDataForm, RadioItems } from "../../interface/interfaces";
import { useEffect, useState, type ChangeEvent } from "react";

const genderOption: RadioItems[] = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "other", label: "Other" }
]

const EmployeeModal = ({ textModal, formData, imgUrl, isOpen, onClose, onChange, onImageUpload }:
    {
        textModal: string,
        formData: EmployeeDataForm,
        imgUrl: string | null,
        isOpen: boolean;
        onClose: () => void;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void,
        onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void
    }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timerId);
        }
    }, [isLoading]);

    if (!isOpen) return null;

    return createPortal(
        <Modal handleClick={onClose}>
            <div className="mx-4 md:mx-0" role="dialog" aria-modal="true">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-blue-600">{`${textModal} Employee`}</h2>
                    </div>
                    <form className="space-y-4">
                        <div className="flex items-stretch place-content-between p-2">
                            <div className="relative">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-grey-400">
                                    <img
                                        src={imgUrl ?? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-2 right-1 bg-orange-400 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200">
                                    <FiCamera className="text-white" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={onImageUpload}
                                    />
                                </label>
                            </div>
                            <div className='relative'>
                                <InputField label="First name" name="firstName" type="text" formData={formData.firstName} onChange={onChange} />
                                <InputField label="Last name" name="lastName" type="text" formData={formData.lastName} onChange={onChange} />
                            </div>
                        </div>
                        <InputField label="Address" name="address" type="text" formData={formData.address} onChange={onChange} />
                        <InputField label="Email" name="email" type="email" formData={formData.email} onChange={onChange} />
                        <InputField label="Phone number" name="phone" type="text" formData={formData.phone} onChange={onChange} />
                        <InputField label='Citizen Identification Card'
                            type='number' name='citizenIdentificationCard'
                            formData={formData.citizenIdentificationCard}
                            onChange={onChange}
                        />
                        <DatePickers labelText="Date of birth" initDate={formData.dateOfBirth} />
                        <Radio radioName="Gender" radioItems={genderOption} onSetData={onChange} />
                        <Submit feature={`${textModal} Employee`} text={`On ${textModal}...`} isLoading={isLoading} onClose={onClose} />
                    </form>
                </div>
            </div>
        </Modal>,
        document.body
    );
};

EmployeeModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default EmployeeModal