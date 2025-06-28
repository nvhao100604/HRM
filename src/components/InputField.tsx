import React, { type ChangeEvent } from 'react'
import type { Employee } from '../interface/employee.interface'

export const InputField = ({label, name, type, formData, handleChange}: 
    {label: string, name: string, type: string, formData: string, handleChange: (e: ChangeEvent<HTMLInputElement>) => void}
) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={formData}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
        />
    </div>
  )
}
