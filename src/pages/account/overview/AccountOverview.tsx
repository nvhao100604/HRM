import type { Account, EmployeeDataForm } from "../../../interface/interfaces";
import { AvatarUpload, BackButton } from "../../../components";
import EditButton from "./EditButton";
import EditableView from "./EditableView";
import NonEditableView from "./Non-EditableView";

function AccountOverview(
  { userData, userForm, imgUrl, isLoading, isEditing,
    handleChange, handleImageUpload, onSubmit, setEditing }:
    {
      userData: Account,
      userForm: EmployeeDataForm,
      imgUrl: string,
      isLoading: boolean,
      isEditing: boolean,
      handleChange: (e: any) => void,
      handleImageUpload: (e: any) => void,
      onSubmit: (e: any) => void,
      setEditing: (e: any) => void
    }) {

  return (
    <div className="inset-0 z-50 flex items-center justify-center">
      <div className="relative max-w-5xl w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <BackButton href="/" />
        <form onSubmit={onSubmit}>
          <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-8">
            <div
              className='absolute top-0 right-2 flex justify-items-center rounded-md 
             text-gray-200 text-md font-bold p-2
            '>
              <label className=" self-center"> ID:</label>
              <p className="ml-2 self-center ">{userData.id}7987070987</p>
            </div>
            <div className="flex flex-col items-center">
              <AvatarUpload
                edge="w-32 h-32"
                imgUrl={imgUrl}
                onImageUpload={handleImageUpload}
              />
              <div className='flex justify-items-center rounded-md mt-4'>
                <p className=" text-white text-3xl self-center px-4 py-2 font-bold text-shadow-lg">
                  {userData.firstName} {userData.lastName}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EditableView
                userForm={userForm}
                isEditing={isEditing}
                handleChange={handleChange}
              />
              <NonEditableView userData={userData} />
            </div>
            {/* Button */}
            <EditButton
              isEditing={isEditing}
              isLoading={isLoading}
              setEditing={setEditing}
            />
          </div>
        </form>
      </div >
    </div >
  )
}

export default AccountOverview;