import Modal from "../../UI components/modal";

const LogoutModal = ({ onShowLogoutModal, onLogout }:
    { onShowLogoutModal: () => void, onLogout: () => void }) => {
    return (
        <Modal handleClick={onShowLogoutModal}>
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
                <p className="text-gray-600 mb-6">Are you sure you want to logout? This action cannot be undone.</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onShowLogoutModal}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onLogout}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default LogoutModal;
