import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickers = ({ labelText, initDate }: { labelText: string, initDate: string | null }) => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(initDate ?? undefined));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={labelText}
                    value={value}
                    onChange={(newValue: any) => setValue(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DatePickers