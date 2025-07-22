import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

const SendButton = ({ email, initialCount }: { email: string, initialCount: number }) => {
    const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        if (isSending) {
            timerIdRef.current = setInterval(() => {
                setCount(precount => {
                    if (precount <= 1) {
                        clearInterval(timerIdRef.current!);
                        setIsSending(false);
                        return 0;
                    }
                    return precount - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(timerIdRef.current!);
        }
    }, [isSending]);

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s_@]+$/;
        return re.test(email);
    }
    const handleSendOTP = () => {
        if (!validateEmail(email)) {
            alert(`${email} is not an email!`);
            return;
        }
        setIsSending(true);
    }
    return (
        <button
            className={`group relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white
                ${isSending ?
                    "bg-gray-400 cursor-not-allowed"
                    :
                    'bg-green-500 hover:bg-green-700'}`}
            onClick={handleSendOTP}
        >
            {isSending ?
                <div className="flex w-full justify-between">
                    <span className="place-items-center">（{count}）</span>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                :
                <div className="flex place-items-center">Send   <FiSend /></div>
            }
        </button>
    )
}

export default SendButton;