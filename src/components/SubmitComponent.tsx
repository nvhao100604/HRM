import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

export const SubmitComponent = ({feature, text, isLoading, onClose} : 
    {feature: string, text: string, isLoading: boolean, onClose: ()=> void}
) => {
  return (
    <div className="flex justify-end space-x-3 mt-6">
        <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
        disabled={isLoading}
        >
        Cancel
        </button>
        <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center"
        disabled={isLoading}
        >
        {isLoading ? (
            <>
            <ImSpinner8 className="animate-spin mr-2" />
            {text}
            </>
        ) : (
            <>{feature}</>
        )}
        </button>
    </div>
  )
}
