
import { FaAccessibleIcon, FaSort } from 'react-icons/fa';
import { Box, Skeleton } from '@mui/material';

const EmployeeListSkeleton = () => {
    const spawnSpan = () => {
        const skeletonSpan = [];
        for (let i = 0; i < 5; i++) {
            skeletonSpan.push(
                <tr className=''>
                    <Skeleton
                        key={i}
                        animation="wave"
                    />
                </tr>
            )
        }
        return skeletonSpan;
    }
    return (
        <>
            <div className='overflow-x-auto overflow-y-auto lg:h-144'>
                <table className="min-w-full table-auto border-collapse">
                    <thead className='sticky top-0 z-10'>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-1"
                            >
                                Avatar <FaSort className="inline ml-1" />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
                      tracking-wider cursor-pointer col-span-2"
                            >
                                Full Name <FaSort className="inline ml-1" />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-3"
                            >
                                Email <FaSort className="inline ml-1" />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-2"
                            >
                                Status <FaSort className="inline ml-1" />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                      tracking-wider cursor-pointer col-span-2"
                            >
                                Action <FaAccessibleIcon className="inline ml-1" />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {spawnSpan()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeListSkeleton;