import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { AvatarUpload, DatePickers, InputField, Modal, Radio, Submit } from '../../components';
import type { EmployeeDataForm, RadioItems } from "../../interface/interfaces";
import { genderOption } from "../../config/constants";

const EmployeeModal = ({ textModal, isLoading, formData, imgUrl, onClose, onChange, onImageUpload, onSubmit }:
    {
        textModal: string,
        isLoading: boolean,
        formData: EmployeeDataForm,
        imgUrl: string,
        onClose: () => void;
        onChange: (e: any) => void,
        onImageUpload: (e: any) => void,
        onSubmit: (e: any) => void
    }) => {

    return createPortal(
        <Modal handleClick={onClose}>
            <div className="mx-4 md:mx-0" role="dialog" aria-modal="true">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-blue-600">{`${textModal} Employee`}</h2>
                    </div>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="flex items-stretch place-content-between p-2">
                            <AvatarUpload
                                edge="w-28 h-28"
                                imgUrl={imgUrl}
                                isEditing={true}
                                onImageUpload={onImageUpload}
                            />
                            <div className='relative'>
                                <InputField label="First name" name="firstName" type="text" formData={formData.firstName} onChange={onChange} />
                                <InputField label="Last name" name="lastName" type="text" formData={formData.lastName} onChange={onChange} />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <InputField label="Email" name="email" type="email" formData={formData.email} onChange={onChange} />
                            <InputField label="Phone number" name="phone" type="text" formData={formData.phone} onChange={onChange} />
                        </div>
                        <InputField label='Citizen Identification Card'
                            type='number' name='citizenIdentificationCard'
                            formData={formData.citizenIdentificationCard}
                            onChange={onChange}
                        />
                        <InputField label="Address" name="address" type="text" formData={formData.address} onChange={onChange} />
                        <DatePickers
                            labelText="Date of birth"
                            name="dateOfBirth"
                            initDate={formData.dateOfBirth}
                            setData={onChange}
                        />
                        <Radio name="gender" radioName="Gender" radioItems={genderOption} radioInitValue={formData.gender} onSetData={onChange} />
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