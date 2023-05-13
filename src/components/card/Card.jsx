import React, { useState } from "react";
import { Data } from "../../data";
import ReactPaginate from "react-paginate";
import Search from "../search/Search";
// import ReactPaginate from 'react-paginate';

const Card = () => {
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;
 

  const display = Data.filter((user)=>user.first_name.toLocaleLowerCase().includes(query))
  const displayUsers=
    display.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div key={index} className="card__container">
          <div className="avatar-img"><img src={user.avatar} alt="" /> </div>
          <div className="content">
          <h3>
             {user.first_name} {user.last_name}
          </h3>
          <p>Gender: {user.gender}</p>
          <p>Domain: {user.domain}</p>
          </div> 
        </div>
      );
    });
    // setUser(display.length);
    const num = display.length;
    
    // setUser(display.length)

    const pageCount = Math.ceil(num /usersPerPage)
    const changePage = ({selected}) => {
      setPageNumber(selected);
    }

  return <div className="main">

    <Search
        setQuery = {setQuery}
     />
    <div className="card">{displayUsers}</div>
    
    <ReactPaginate
       previousLabel = {"Previous"}
       nextLable = {"Next"}   
       pageCount={pageCount}
       onPageChange={changePage}
       containerClassName={"paginationBtn"}
       previousLinkClassName={"prevBtn"}
       nextLinkClassName={"nextBtn"}
       disabledClassName={"paginationDisabled"}
       activeClassName={"paginationActive"}
    />
  </div>;
};

export default Card;
