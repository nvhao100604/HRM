import dayjs from "dayjs"

const DayJsToString = (value: any) => {
    return dayjs(value ?? null).format('YYYY-MM-DD');
}

const formatTimeStamp = (timestamp: any) => {
    return dayjs(timestamp ?? null).format('MMM d, yyyy h:mm a');
}
export { DayJsToString, formatTimeStamp }