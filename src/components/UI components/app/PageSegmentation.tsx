import { Button } from '@mui/material'

const PageSegmentation = ({onSetPrevious, onSetAfter, onGoToPage, currentPage, totalItems, totalPages, sizePerPage}
    : {onSetPrevious: () => void,
    onSetAfter: () => void,
    onGoToPage: (i: number) => void
    currentPage: number,
    totalItems: number,
    totalPages: number,
    sizePerPage: number
    }
) => {
    const spawnSpan = () => {
        const pageNumbers = [];
        for (let i = 0; i < totalPages; i++) {
            pageNumbers.push(
            <span
            key={`span-${i}`}
            className={`px-2 py-1 mx-1 cursor-pointer ${
                currentPage === i ? 'font-bold text-blue-600' : 'text-gray-600'
            }`}
            onClick={() => onGoToPage(i)}
            >
            {i + 1}
            </span>
        );
        }
        return pageNumbers;
    }
    return (
    <div className="relative grid grid-cols-3 w-3/5 justify-items-center-safe mx-auto">
        <Button onClick={onSetPrevious}
        disabled={currentPage === 0? true : false}>Previous</Button>
        <div className='self-center'>{spawnSpan()}</div>
        <Button
        disabled={totalItems < sizePerPage? true : false ||
            currentPage === totalPages? true : false
        }
        onClick={onSetAfter}>After</Button>
    </div>
    )
}

export default PageSegmentation;