import React from 'react'


type Props ={
    promise: Promise<Posts[]> 
}

const UserPosts = async ({promise} :Props) => {
    const posts = await promise
  return (
    <div>
      {posts.map((post) => (
        <>
          <div key={post.id}>
            <h4>{post.title} </h4>
            <br />
            <p>{post.body}</p>
            <br />
          </div>
        </>
      ))}
    </div>
  );
}

export default UserPosts