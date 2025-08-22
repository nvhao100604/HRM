import { useEffect, useRef, useState } from "react";
import { FiBell, FiCheck, FiTrash2 } from "react-icons/fi"
import { type Notification } from "../../../../interface/interfaces";
import NotifyItem from "./NotifyItem";
import ConfirmModal from "./ConfirmModal";
import NotifyDetailModal from "./NotifyDetailModal";
import { getCurrentNotificationSWR, markReadNotification, mutateCurrentNotify } from "../../../../services";
import { PureLoading } from "../../../UI components/IsLoadingBox";

const NotificationButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [selected, setSelected] = useState<Notification | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const { data, isLoading, error } = getCurrentNotificationSWR();
    const notificationList = data && data.data ? (data.data as Notification[]) : [];

    useEffect(() => {
        const handleCloseLogoutModal = (e: any) => {
            if (submenuRef.current && !submenuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleCloseLogoutModal);

        return () => {
            document.removeEventListener("mousedown", handleCloseLogoutModal);
        }
    }, [submenuRef]);

    ///Click function
    const handleNotificationClick = async (notify: Notification) => {
        setSelected(notify);
        try {
            const response = await markReadNotification(notify.id);
            if (response.success) {
                console.log(response.message);
                mutateCurrentNotify();
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.error(error);
        }

    };

    const handleMarkAllRead = () => {
    };

    const handleDeleteAll = () => {
        console.log(123)
        setShowConfirmModal(false);
    };

    return (
        <>
            <button className="">
                <FiBell size={22}
                    onClick={() => setIsOpen(true)}
                />
                {isLoggedIn && notificationList.length > 0 &&
                    (<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>)}
            </button>

            {isOpen && (
                <div
                    ref={submenuRef}
                    className="absolute top-8 right-2 w-80 max-h-[480px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-700">Notifications</h3>
                        <div className="flex space-x-2">
                            <button
                                disabled={(notificationList.length === 0)}
                                onClick={handleMarkAllRead}
                                className={`text-sm flex items-center 
                                    ${(notificationList.length === 0) ? "text-gray-600" : "text-blue-600 hover:text-blue-800"}`}
                                aria-label="Mark all as read"
                            >
                                <FiCheck className="w-4 h-4 mr-1" />
                                Mark all read
                            </button>
                            <button
                                disabled={(notificationList.length === 0)}
                                onClick={() => setShowConfirmModal(true)}
                                className={`text-sm flex items-center 
                                    ${(notificationList.length === 0) ? "text-gray-600" : "text-red-600 hover:text-red-800"}`}
                                aria-label="Delete all notifications"
                            >
                                <FiTrash2 className="w-4 h-4 mr-1" />
                                Delete all
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto max-h-[400px]">
                        {notificationList.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                                No notifications
                            </div>
                        ) : (
                            isLoading ?
                                <PureLoading />
                                :
                                notificationList.map((notification) => (
                                    <NotifyItem
                                        key={`notify-${notification.id}`}
                                        notification={notification}
                                        handleNotificationClick={async () => {
                                            await new Promise(resolve => setTimeout(resolve, 500));
                                            handleNotificationClick(notification)
                                        }}
                                    />
                                ))
                        )}
                    </div>
                </div>
            )}

            {showConfirmModal &&
                <ConfirmModal
                    setShowConfirmModal={async () => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        setShowConfirmModal(false);
                    }}
                    handleDeleteAll={handleDeleteAll}
                />}

            {selected &&
                <NotifyDetailModal
                    notify={selected}
                    handleClose={async () => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        setSelected(null);
                    }}
                />}
        </>
    )
}

export default NotificationButton;