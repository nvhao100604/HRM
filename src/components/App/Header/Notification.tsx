import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi"
import { api } from "../../../config/axios";
import { NOTIFICATIONS, NOTIFICATIONS_CURRENT } from "../../../config/constants";

const Notification = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [notificationList, setNotificationList] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await api.get(`${NOTIFICATIONS}/${NOTIFICATIONS_CURRENT}`);
                if (response.data.success) {
                    setNotificationList(response.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetch();
    }, [isLoggedIn]);
    return (
        <>
            <button className="">
                <FiBell size={22} />
                {isLoggedIn && notificationList.length > 0 &&
                    (<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>)}
            </button>
        </>
    )
}

export default Notification;