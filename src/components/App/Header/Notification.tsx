import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi"
import { api } from "../../../config/axios";

const Notification = () => {
    const [notificationList, setNotificationList] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const response = await api.get("notifications/notifications-current-employee");
            console.log(response.data);
            if (response.data.success) {
                setNotificationList(response.data.data);
            }
        }
        fetch();
    }, [])
    return (
        <>
            <button className="">
                <FiBell size={22} />
                {notificationList.length > 0 &&
                    (<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>)}
            </button>
        </>
    )
}

export default Notification;