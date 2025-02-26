import React from "react";
import UsePosts from "../hook/UsePosts";

const PostList = () => {
  const pagesize = 22;
  // const [pageNumber, setPageNumber] = useState<number>(1);
  // const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading, isFetchingNextPage, fetchNextPage } = UsePosts({ pagesize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <h2 className="mb-4 text-center">Posts</h2>

      <ul className="list-group">
        {posts?.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li className="list-group-item p-2" key={post.userId}>
                {" "}
                {post.title}{" "}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className=" my-4 mx-4 btn btn-primary"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
      {/* <button
        className=" my-4 mx-4 btn btn-primary"
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next
      </button> */}
    </>
  );
};

export default PostList;
