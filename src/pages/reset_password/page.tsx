import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import SendButton from "./SendButton";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const handleInputChange = (text: string) => {
        setEmail(text);
    }

    const handleSubmit = () => {
        console.log("Sending OTP to email");
    }
    return (
        <div className="w-screen h-screen flex justify-center place-items-center">
            <form
                className="w-96 h-100 py-10 px-10 rounded-lg shadow-2xl"
                onSubmit={handleSubmit}
            >
                <div
                    className="relative h-6 w-8 rounded-2xl flex place-items-center items-center justify-center
                    shadow-sm hover:bg-gray-200"
                ><Link to={'/login'}><FiArrowLeft /></Link></div>
                <h1 className="font-bold text-center py-4 mb-6 text-2xl text-gray-900">Reset password</h1>
                <p>testemail.@gmail.com</p>
                <label htmlFor="reset_email" className="block text-sm font-medium text-gray-700">Your email</label>
                <input
                    id="reset_email"
                    name="reset_email"
                    type="email"
                    autoComplete="reset_email"
                    required
                    className={`appearance-none relative block w-full px-3 py-2 border border-gray-300
                                placeholder-gray-500 text-gray-900 rounded-md
                                focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                    value={email}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <div className="mt-6">
                    <label htmlFor="reset_otp" className="block text-sm font-medium text-gray-700">Reset OTP</label>
                    <div className="flex justify-between">
                        <input type="text" id="reset_otp" name="reset_otp" required
                            className="appearance-none relative block w-48 px-3 py-2 border border-gray-300
                                    placeholder-gray-500 text-gray-900 rounded-md
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        />
                        <SendButton email={email} initialCount={30} />
                    </div>
                    <div className="justify-center place-items-center py-4">
                        <button
                            className="relative w-36 flex justify-center py-2 px-4 
                            border border-transparent text-sm font-medium rounded-md text-white 
                            bg-blue-600 hover:bg-blue-700"
                            type="submit"
                        >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;