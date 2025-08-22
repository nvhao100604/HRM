import type { Notification } from "../../../../interface/interfaces"
import Modal from "../../../UI components/modal"

const NotifyDetailModal = ({ notify, handleClose }: { notify: Notification, handleClose: () => void }) => {
    return (
        <>
            <Modal handleClick={handleClose}>
                <div>{notify.message}</div>
            </Modal>
        </>
    )
}

export default NotifyDetailModal;