import { CLONE_AVATAR } from "../../../../config/constants";
import type { Notification } from "../../../../interface/interfaces"
import { formatTimeStamp } from "../../../../utils"

const NotifyItem = ({ notification, handleNotificationClick }:
    { notification: Notification, handleNotificationClick: () => void }) => {
    return (
        <>
            <div
                key={notification.id}
                onClick={handleNotificationClick}
                className={`p-4 border-b 
                    border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-150 
                    ${!notification.read ? 'bg-blue-50' : ''}`}
            >
                <div className="flex items-start space-x-3">
                    <img
                        src={notification.message}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                        onError={(e: any) => {
                            e.target.src = CLONE_AVATAR;
                        }}
                    />
                    <div className="flex-1">
                        <p className="font-medium text-gray-900">{notification.senderName}</p>
                        <p className="text-sm text-gray-600 mt-1">{notification.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                            {formatTimeStamp(notification.createdAt)}
                        </p>
                    </div>
                    {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                </div>
            </div>
        </>
    )
}
export default NotifyItem;