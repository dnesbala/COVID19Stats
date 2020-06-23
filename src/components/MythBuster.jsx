import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const MythBuster = () => {
  const [myths, setMyths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const fetchMyths = async () => {
      setLoading(true);
      const res = await axios.get("https://nepalcorona.info/api/v1/myths");
      setMyths(res.data.data);
      setLoading(false);
    };

    fetchMyths();
  }, []);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = myths.slice(indexOfFirstPost, indexOfLastPost);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <h2 className="text-center my-5">Loading..</h2>;

  return (
    <div>
      <div className="card">
        <div className="list-group list-group-flush">
          {currentPost.map((myth, i) => (
            <li key={i} className="list-group-item list-group-item-dark p-4">
              <p>Myth : {myth.myth_np || myth.myth}</p>
              <p> Reality : {myth.reality_np || myth.reality}</p>
            </li>
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={myths.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MythBuster;
