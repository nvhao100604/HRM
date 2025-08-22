import { FiEdit2, FiUpload } from "react-icons/fi"
import { LoadingIcon } from "../../../components"


const EditButton = ({ isEditing, isLoading, setEditing }:
    { isEditing: boolean, isLoading: boolean, setEditing: (e: any) => void }) => {

    return (
        <div className="mt-8 flex justify-center">
            {isEditing ?
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-flex items-center px-6 py-3 rounded-md
                    ${isLoading ? "bg-gray-600 text-white transition duration-200 cursor-progress" :
                            "bg-blue-600 hover:bg-blue-700 text-white transition duration-200"}
                   `}
                >
                    {isLoading ? <div className="mr-2"><LoadingIcon /> </div> : <FiUpload className="mr-2" />}
                    {isLoading ? "On Updating..." : "Update"}
                </button>
                :
                <button
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
              text-white rounded-md transition duration-200"
                    onClick={setEditing}
                >
                    <FiEdit2 className="mr-2" />
                    Edit profile
                </button>}
        </div>
    )
}

export default EditButton;