
export interface Notification {
    [key: string]: string | number | boolean | null,
    createdAt: string,
    id: number,
    message: string,
    metadata: string | null,
    module: string,
    notificationType: string,
    read: boolean,
    recipientId: number,
    referenceId: number,
    senderId: number,
    senderName: string,
    senderType: string,
    title: string,
    url: null | string
}

export const defaultNotification: Notification = {
    createdAt: "",
    id: 0,
    message: "",
    metadata: null,
    module: "",
    notificationType: "",
    read: false,
    recipientId: 0,
    referenceId: 0,
    senderId: 0,
    senderName: "",
    senderType: "",
    title: "",
    url: null,
}