import { MyContext } from "@/contexts";
import { ReactNode, useState, useMemo } from "react";

interface Props {
    datas: any[],
    children: ReactNode;
}
export default function PaginationSearchContext({ datas, children }: Readonly<Props>) {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const perPage = 5;

    const propiedadesDatas: string[] = Object.keys(datas[0])

    const filtered = datas.filter(data =>
        propiedadesDatas.some(propiedad =>
            typeof data[propiedad] === 'string' && data[propiedad].toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastUser = (currentPage + 1) * perPage;
    const indexOfFirstUser = indexOfLastUser - perPage;
    const current = filtered.slice(indexOfFirstUser, indexOfLastUser);

    const pageCount = Math.ceil(filtered.length / perPage);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    const contextValue = useMemo(() => ({
        searchTerm,
        setSearchTerm,
        current,
        pageCount,
        handlePageChange
    }), [searchTerm, current, pageCount]);

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}