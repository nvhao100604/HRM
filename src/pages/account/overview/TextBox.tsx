import { DatePickers, Radio } from "../../../components"
import { genderOption } from "../../../config/constants"

const TextBox = ({ label, text, name, type, isEditing, onChange }
    :
    {
        label: string,
        text: string | null,
        name: string,
        type: string,
        isEditing: boolean,
        onChange: (e: any) => void
    }) => {
    return (
        <div className='flex flex-col'>
            <label className="text-md text-gray-500 p-2">{label}</label>
            {isEditing ?
                (() => {
                    switch (type) {
                        case "number":
                        case "email":
                        case "text": return (
                            <input
                                type={type}
                                name={name}
                                className={`text-gray-800 text-md p-2 font-medium 
                                    border-gray-600 border-1 rounded-md`}
                                value={text ?? ""}
                                required
                                onChange={onChange} />
                        )
                        case "radio": return (
                            <Radio
                                name={name}
                                radioName={label}
                                radioItems={genderOption}
                                radioInitValue={text ?? genderOption[0].label}
                                onSetData={onChange}
                            />
                        )
                        case "date": return (
                            <DatePickers
                                labelText={label}
                                name="dateOfBirth"
                                initDate={text}
                                setData={onChange}
                            />
                        )
                        default: return <div>New input</div>
                    }
                })()
                :
                (<p className="text-gray-800 font-medium p-2">{text}</p>)
            }
        </div >
    )
}

export default TextBox;