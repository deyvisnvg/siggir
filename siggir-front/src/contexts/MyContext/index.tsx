import { createContext } from 'react';

interface MyContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    current: any[];
    pageCount: number;
    handlePageChange: (selectedItem: { selected: number }) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);
export default MyContext;
