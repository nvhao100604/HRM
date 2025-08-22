
import { mutate } from "swr";
import { api, apiFile } from "../../config/axios";
import { NOTIFICATION_CLEAR_ALL, NOTIFICATION_DEPARTMENT, NOTIFICATION_GLOBAL, NOTIFICATION_READ, NOTIFICATION_READ_ALL, NOTIFICATIONS, NOTIFICATIONS_CURRENT } from "../../config/constants";
import { useFetchById, useGetData } from "../../hooks";

const getNotificationByID = (notificationID: number, config?: object) => {
    const { data, error, isLoading } = useFetchById(NOTIFICATIONS, notificationID, config);

    return { data, error, isLoading };
}

const getCurrentNotification = async (config?: object) => {
    const response = await api.get(`${NOTIFICATIONS}/${NOTIFICATIONS_CURRENT}`, config);

    return response.data;
}

const getCurrentNotificationSWR = (config?: object) => {
    const { data, error, isLoading } = useGetData(`${NOTIFICATIONS}/${NOTIFICATIONS_CURRENT}`, config);

    return { data, error, isLoading };
}

const createNotificationGlobal = async (formData: Notification, config?: object) => {
    const response = await api.post(`${NOTIFICATIONS}/${NOTIFICATION_GLOBAL}`, formData, config);

    return response.data;
}

const createNotificationDepartment = async (formData: Notification, config?: object) => {
    const response = await api.post(`${NOTIFICATIONS}/${NOTIFICATION_DEPARTMENT}`, formData, config);

    return response.data;
}

const markReadNotification = async (notificationID: number, config?: object) => {
    const response = await apiFile.patch(`${NOTIFICATIONS}/{notificationId}/read?notificationId=${notificationID}`, config);

    return response.data;
}

const readAllNotification = async (recipientID: number, config?: object) => {
    const response = await apiFile.patch(`${NOTIFICATIONS}/${NOTIFICATION_READ_ALL}/${recipientID}`, config);

    return response.data;
}

const deleteNotificationByID = async (NotificationID: number, config?: object) => {
    const response = await api.delete(`${NOTIFICATIONS}/${NotificationID}`, config);

    return response.data;
}

const deleteAllNotification = async (config?: object) => {
    const response = await api.delete(`${NOTIFICATIONS}/${NOTIFICATION_CLEAR_ALL}`, config);

    return response.data;
}

const mutateCurrentNotify = () => mutate(`${NOTIFICATIONS}/${NOTIFICATIONS_CURRENT}`);


export {
    getNotificationByID,
    getCurrentNotification,
    getCurrentNotificationSWR,
    createNotificationGlobal,
    createNotificationDepartment,
    markReadNotification,
    readAllNotification,
    deleteNotificationByID,
    deleteAllNotification,
    mutateCurrentNotify
}