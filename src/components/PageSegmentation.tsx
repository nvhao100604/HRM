import { Button } from '@mui/material'
import React from 'react'

export const PageSegmentation = ({setPrevious, setAfter, goToPage, currentPage, totalItems, totalPages, sizePerPage}
    : {setPrevious: () => void,
       setAfter: () => void,
       goToPage: (i: number) => void
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
            onClick={() => goToPage(i)}
            >
            {i + 1}
            </span>
        );
        }
        return pageNumbers;
    }
    return (
    <div className="relative grid grid-cols-3 w-3/5 justify-items-center-safe mx-auto">
        <Button onClick={setPrevious}
        disabled={currentPage === 0? true : false}>Previous</Button>
        <div className='self-center'>{spawnSpan()}</div>
        <Button
        disabled={totalItems < sizePerPage? true : false ||
          currentPage === totalPages? true : false
        }
        onClick={setAfter}>After</Button>
    </div>
  )
}
