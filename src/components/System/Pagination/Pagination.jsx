import React from 'react'
import './Pagination.css'

export const Pagination = ({pagesNumber, currentPage, setCurrentPage}) => {
  return (
    <div>
    {Array(pagesNumber).fill().map((_, i) => (

<button
    key={i} 
    href="#"
    className = {currentPage === i+1 ? 'paginationButton active' : 'paginationButton'}
    onClick={() => setCurrentPage(i + 1)}
>
    {i + 1}
</button>


))}
    </div>
  )
}
