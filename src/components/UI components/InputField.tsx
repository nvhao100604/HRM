import type { ChangeEvent } from "react";

const InputField = ({label, name, type, formData, onChange}:
  {label: string, name: string, type: string, formData: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void}
  ) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
          type={type}
          name={name}
          value={formData}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
    </div>
  )
}

export default InputField;
