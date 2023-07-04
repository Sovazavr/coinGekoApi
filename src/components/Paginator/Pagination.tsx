import React from 'react'
import s from "./Pagination.module.scss"

type PaginationProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean;
        right: boolean;
    };
    nav?: {
        current: number;
        total: number;
    };
}
const Pagination = (props: PaginationProps) => {
    const { nav = null, disable, onNextPageClick, onPrevPageClick } = props

    const handleNextPageClick = () => {
        onNextPageClick();
    };
    const handlePrevPageClick = () => {
        onPrevPageClick();
    };

    return (
        <div className={s.paginator}>
            <button
                className={s.arrow}
                type="button"
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                {'<'}
            </button>
            {nav && (
                <span className={s.navigation} >
                    {nav.current} / {nav.total}
                </span>
            )}
            <button
                className={s.arrow}
                type="button"
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                {'>'}
            </button>
        </div>
    );
}

export default Pagination