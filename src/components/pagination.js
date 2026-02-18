import {Link} from "gatsby";
import React from "react";


const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className='inner'>
        <div className='pager--previous'>
          {previousPagePath && (

            <Link to={previousPagePath} rel="prev" className='primary-button'>
              Back
            </Link>

          )}
        </div>
        {numberOfPages > 1 && <div className="pagination-location">Page <strong>{humanPageNumber}</strong> of {numberOfPages}</div>}
        <div className='pager--next'>
          {nextPagePath && (

            <Link to={nextPagePath} rel="next" className='primary-button'>
              Next
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Pagination;