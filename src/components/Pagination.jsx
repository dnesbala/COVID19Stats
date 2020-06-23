import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const numberOfPages = totalPosts / postsPerPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a
              onClick={() => paginate(pageNumber)}
              className="page-link"
              href="#"
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
