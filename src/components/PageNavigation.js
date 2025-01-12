// Libraries.

import React from 'react';

// Public.

/**
 * @param {Object} [props] Properties.
 * @param {Number} props.currentPage Current page number.
 * @param {Function} props.updatePage Update page function.
 * @param {Number} props.numberOfPages Total number of pages.
 * @function PageNavigation
 * @description Creates a component to navigate through pages.
 * @returns {JSX.Element} JSX for the pages.
 */
const PageNavigation = ({currentPage, updatePage, numberOfPages }) => {
  const pageNumbers = Array.from({length: numberOfPages}, (_, i) => i + 1);

  return (
    <div className="page-navigation" aria-label="navigate to pages">
        {pageNumbers.length && (
            <>
                <span
                    className={`page-link${currentPage === 1 ? ' disable' : ''}`}
                    aria-label='Go to previous page'
                    onClick={() => updatePage(currentPage-1)}
                >
                    ◀
                </span>
                {pageNumbers.map((pageNumber) => (
                    <span
                        key={pageNumber}
                        className={`page-link${currentPage === pageNumber ? ' selected' : ''}`}
                        onClick={() => updatePage(pageNumber)}
                        aria-label={`Go to page ${pageNumber}`}
                    >
                        {pageNumber}
                    </span>
                ))}
                <span
                    className={`page-link${currentPage === numberOfPages ? ' disable' : ''}`}
                    aria-label='Go to next page'
                    onClick={() => updatePage(currentPage+1)}
                >
                    ▶
                </span>
            </>
        )}
    </div>
  );
};

export default PageNavigation;
