import TextBox from "./TextBox";
import type { EmployeeDataForm } from "../../../interface/interfaces";

const EditableView = ({ userForm, isEditing, handleChange }:
    { userForm: EmployeeDataForm, isEditing: boolean, handleChange: (e: any) => void }) => {
    return (
        <>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Editable Information</h2>
                <div className="space-y-4">
                    <TextBox
                        label="Citizen Identification Card"
                        name="citizenIdentificationCard"
                        text={userForm.citizenIdentificationCard}
                        type="number"
                        isEditing={isEditing}
                        onChange={handleChange}
                    />
                    <TextBox
                        label="Address"
                        name="address"
                        text={userForm.address}
                        type="text"
                        isEditing={isEditing}
                        onChange={handleChange}
                    />
                    <TextBox
                        label="Date of birth"
                        name="dateOfBirth"
                        text={userForm.dateOfBirth}
                        type="date"
                        isEditing={isEditing}
                        onChange={handleChange}
                    />
                    <TextBox
                        label="Gender"
                        name="gender"
                        text={userForm.gender}
                        type="radio"
                        isEditing={isEditing}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}

export default EditableView;