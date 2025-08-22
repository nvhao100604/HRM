import dayjs from "dayjs"

const DayJsToString = (value: any) => {
    return dayjs(value ?? null).format('YYYY-MM-DD');
}

export { DayJsToString }