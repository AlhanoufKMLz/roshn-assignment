import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import {
  getAllPostsFail,
  getAllPostsSucsses,
  sortPosts,
} from "../redux/slices/posts";
import PostsTable from "../components/PostsTable";
import { Post } from "../types/types";

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { postsList, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
    .get(url)
    .then((response) => dispatch(getAllPostsSucsses(response.data)))
    .catch((error) => dispatch(getAllPostsFail(error)));
  }, []);

  const [postsToDisplay, setPostsToDisplay] = useState<Post[]>(postsList)
  
  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(5)
  const totalPages = Math.ceil(postsList.length / recordsPerPage)
  useEffect(() => {
    const indexOfLastItem = currentPage * recordsPerPage
    const indexOfFirstItem = indexOfLastItem - recordsPerPage
    setPostsToDisplay(postsList.slice(indexOfFirstItem, indexOfLastItem))
  }, [currentPage, recordsPerPage])

  function sort(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(sortPosts(event.target.value));
    setCurrentPage(1)
  }

  function updateRecords(event: React.ChangeEvent<HTMLSelectElement>) {
    const records = Number(event.target.value)
    setRecordsPerPage(records)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <select onChange={sort}>
        <option value="asc">Ascending</option>
        <option value="des">Descending</option>
      </select>
      <select onChange={updateRecords}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      <PostsTable postsToDisplay={postsToDisplay}/>

      {Array.from({ length: totalPages }, (_, index) => {
          if (
            index + 1 === currentPage ||
            index + 1 === currentPage + 1 ||
            index + 1 === currentPage - 1 ||
            index + 1 == 1 ||
            index + 1 == totalPages
          )
            return (
              <button
                key={index + 1}
                className={
                  index + 1 == currentPage
                    ? 'rounded-full bg-primary_green w-6 m-2 text-secondary_grey'
                    : 'rounded-full hover:border w-6 m-2 border-primary_pink text-primary_green'
                }
                onClick={() => {
                  handlePageChange(index + 1)
                }}>
                {index + 1}
              </button>
            )
          else return <span className="text-primary_green">.</span>
        })}
        {currentPage !== totalPages && (
          <button
            className={'rounded-full hover:border w-6 m-2 border-primary_pink text-primary_green'}
            onClick={() => {
              handlePageChange(currentPage + 1)
            }}>
            &raquo;
          </button>
        )}
      
    </div>
  );
}
