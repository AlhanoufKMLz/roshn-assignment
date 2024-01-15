import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchAllPosts, sortPosts } from "../redux/slices/posts";
import { Post } from "../types/types";
import PostsTable from "../components/PostsTable";

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { postsList, users, loading } = useSelector(
    (state: RootState) => state.posts
  );

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [postsToDisplay, setPostsToDisplay] = useState<Post[]>([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(postsList);
    setPostsToDisplay(postsList);
  }, [postsList]);

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const totalPages = Math.ceil(filteredPosts.length / recordsPerPage);
  useEffect(() => {
    const indexOfLastItem = currentPage * recordsPerPage;
    const indexOfFirstItem = indexOfLastItem - recordsPerPage;
    setPostsToDisplay(filteredPosts.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, recordsPerPage, filteredPosts]);

  //handle changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(sortPosts(event.target.value));
    setFilteredPosts(postsList);
    setCurrentPage(1);
  }
  function handleUpdateRecords(event: React.ChangeEvent<HTMLSelectElement>) {
    const records = Number(event.target.value);
    setRecordsPerPage(records);
    setCurrentPage(1);
  }
  function handleUpdateUser(event: React.ChangeEvent<HTMLSelectElement>) {
    const user = Number(event.target.value);
    if (user === 0) setFilteredPosts(postsList);
    else {
      const posts = postsList.filter((post) => post.userId === user);
      setFilteredPosts(posts);
    }
    setCurrentPage(1);
  }

  if (loading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="head">
        <label>
          Sort
          <select onChange={handleSort} className="select">
            <option value="asc">Ascending</option>
            <option value="des">Descending</option>
          </select>
        </label>
        <label>
          Posts
          <select onChange={handleUpdateRecords} className="select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </label>
        <label>
          User
          <select onChange={handleUpdateUser} className="select">
            <option value="0">All users</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </label>
      </div>

      <PostsTable postsToDisplay={postsToDisplay} />

      <div className="pagination">
        {currentPage !== 1 && (
          <div>
            <button
              onClick={() => {
                handlePageChange(1);
              }}
            >
              &lt;&lt;
            </button>
            <button
              onClick={() => {
                handlePageChange(currentPage - 1);
              }}
            >
              &lt;
            </button>
          </div>
        )}

        {Array.from({ length: totalPages }, (_, index) => {
          if (
            index + 1 == 1 ||
            index + 1 === currentPage - 1 ||
            index + 1 === currentPage ||
            index + 1 === currentPage + 1 ||
            index + 1 == totalPages
          )
            return (
              <button
                className={index + 1 === currentPage ? "current" : ""}
                key={index + 1}
                onClick={() => {
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </button>
            );
          else if (
            index + 1 === currentPage - 2 ||
            index + 1 === currentPage + 2
          )
            return <span>...</span>;
        })}

        {currentPage !== totalPages && (
          <div>
            <button
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
            >
              &gt;
            </button>
            <button
              onClick={() => {
                handlePageChange(totalPages);
              }}
            >
              &gt;&gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
