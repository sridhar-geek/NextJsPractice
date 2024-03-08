
const getSingleUser = async(userId: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if(!response.ok) throw new Error('Failed to get user')
  return response.json()
}

export default getSingleUser