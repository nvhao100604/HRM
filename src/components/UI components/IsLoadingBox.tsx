import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState, type ReactElement } from 'react';

function CircularIndeterminate({ children }: { children: ReactElement }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsLoading(false);
        }, 50000);

        return () => {
            clearTimeout(timerId);
        }
    }, []);
    return (
        <>
            {isLoading ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                :
                { children }
            }
        </>

    );
}

const PureLoading = () => (
    <Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>
)

export { CircularIndeterminate, PureLoading };