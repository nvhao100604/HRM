import Modal from "../../../UI components/modal";

const ConfirmModal = ({ setShowConfirmModal, handleDeleteAll }:
    { setShowConfirmModal: () => void, handleDeleteAll: () => void }) => {
    return (
        <Modal handleClick={setShowConfirmModal}>
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                <h4 className="text-lg font-semibold mb-4">Delete All Notifications</h4>
                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete all notifications? This action cannot be undone!</p>
                <div className="flex justify-end space-x-5">
                    <button
                        onClick={setShowConfirmModal}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDeleteAll}
                        className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Delete All
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmModal;