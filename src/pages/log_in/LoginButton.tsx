import { useEffect, useRef } from "react";
import type { IError } from "../../interface/interfaces";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ isLoading, errors, setIsLoading }: { isLoading: boolean, errors: IError, setIsLoading: () => void }) => {
    const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            timerIdRef.current = setTimeout(() => {
                clearTimeout(timerIdRef.current!);
                setIsLoading();
                navigate('/');
            }, 3000);
        }

        return () => {
            clearTimeout(timerIdRef.current!);
        }
    }, [isLoading]);
    
    return (
        <button
            type="submit"
            disabled={Object.keys(errors).length > 0 || isLoading}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
                                ${isLoading || Object.keys(errors).length > 0 ?
                    'bg-gray-400 cursor-not-allowed'
                    :
                    'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
        >
            {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : "Log in"}
        </button>
    )
}

export default LoginButton;