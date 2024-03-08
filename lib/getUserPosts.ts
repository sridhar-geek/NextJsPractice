
const getUserPosts = async(userId :string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{next:{revalidate: 60}})  // extra code is written to make it ISG increment static generation
    if(!response.ok) throw new Error('Failed to load Posts')

  return  response.json()
}

export default getUserPosts