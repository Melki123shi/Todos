import UsePosts from "../hook/UsePosts";

const PostList = () => {
    const {data: posts, error, isLoading} = UsePosts();

    if (error) return <p>{error.message}</p>

    if (isLoading) return <p>Loading...</p>
    
  return (
    <>
      <h2 className="mb-4 text-center">ToDos</h2>
      <ul className="list-group w-50 mx-auto">
        {posts?.map((post) => (
          <li className="list-group-item p-2" key={post.userId}> {post.title} </li>
        ))}
      </ul>
    </>
  )
}

export default PostList