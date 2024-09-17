import React, { useState } from 'react';

export default function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage(prevPage => {
            const newPage = Math.min(prevPage + 1, maxPage);
            return newPage;
        });
    }

    function prev() {
        setCurrentPage(prevPage => {
            const newPage = Math.max(prevPage - 1, 1);
            return newPage;
        });
    }

    function jump(page) {
        setCurrentPage(prevPage => {
            const newPage = Math.max(1, Math.min(page, maxPage));
            return newPage;
        });
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return { next, prev, jump, currentData, maxPage };
}
