import type { ReactElement } from "react"

const Modal = ({ children, handleClick }: { children: ReactElement, handleClick: () => void }) => {
    return (
        <div className="fixed inset-0 z-1000 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-999" onClick={handleClick}></div>
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md z-1000">
                {children}
            </div>
        </div>
    )
}

export default Modal