import React from 'react'
import type { Metadata } from "next";

// Imports from another files
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata : Metadata = {
    title: 'Users',
    description:'Request Users data',

}

const Users = async() => {
  // It is server component so fetching data will be like as server data fetching 
  // the data is fetched, way before the actual request or it works like server than client
  const userData :Promise<Users[]> =  getAllUsers()
 
  const users = await userData;

  return (
    <main style={{fontSize:'1.4rem'}}>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
    <section>
      {users.map(user => (
        <div key={user.id} style={{margin:'0.5rem'}}>
       <h6>
        <Link href={`/users/${user.id}`}>{user.name}</Link>
       </h6>
        </div>
      ))}
    </section>
    </main>
  )
}

export default Users