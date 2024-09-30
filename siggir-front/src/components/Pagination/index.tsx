import ReactPaginate from 'react-paginate';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
    return (
        <ReactPaginate
            previousLabel={
                <span className='w-7 h-7 flex items-center justify-center bg-gray-400 rounded-md mr-4 hover:text-white'>
                    <ChevronDoubleLeftIcon className='size-5' />
                </span>
            }
            nextLabel={
                <span className='w-7 h-7 flex border-gray-500 items-center justify-center bg-gray-400 rounded-md hover:text-white'>
                    <ChevronDoubleRightIcon className='size-5' />
                </span>
            }
            breakLabel={
                <span className='mr-4'>
                    ...
                </span>
            }
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName="flex items-center justify-center mt-8 mb-4"
            activeClassName="bg-indigo-500 text-white"
            pageClassName='block border border-solid border-gray-300 hover:bg-gray-400 w-7 h-7 flex items-center justify-center rounded-md mr-3'
        />
    );
};

export default Pagination;
