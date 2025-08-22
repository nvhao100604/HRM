import { FiCamera } from "react-icons/fi"
import { CLONE_AVATAR } from "../../config/constants"
import { useRef } from "react";

const AvatarUpdate = ({ edge, imgUrl, onImageUpload }:
    { edge: string, imgUrl: string, onImageUpload: (e: any) => void }) => {
    const imageRef = useRef(null);

    return (
        <>
            <div className="relative">
                <div className={`${edge}
                rounded-full overflow-hidden border-2 border-grey-400`}>
                    <img
                        ref={imageRef}
                        src={(imgUrl && imgUrl != "") ? imgUrl : CLONE_AVATAR}
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
        </>
    )
}

export default AvatarUpdate;