import getSingleUser from "@/lib/getSingleUser";
import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";
import { Suspense } from "react";

import UserPosts from "./Components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

// type for params it is used to give a type for params in url
type Params = {
  params: {
    userId: string; // every param in url will be string
  };
};

/**Dynamic metadata is not working properly we've to learn more on dynamic title and description */

 //  // To Create Dynamic Metadata
// export async function generateMetaData({
//   params: { userId },
// }: Params): Promise<Metadata> {
//   // These two requests or lines of code will be cache and there will be no another request will be send in main component
//   const userData: Promise<Users> = getSingleUser(userId);
//   const user = await userData;
//   return {
//     title: user.name,
//     description: `This page belongs to ${user.name}`,
//   };
// }

const SingleUserPosts = async ({ params: { userId } }: Params) => {
  const userData: Promise<Users> = getSingleUser(userId);
  const postData: Promise<Posts[]> = getUserPosts(userId);

  /* It is used to send both the requests at the same time without waiting one to complete*/
  // const [user, posts] = await Promise.all([userData, postData]);

  const user = await userData;

  return (
    <>
      <div>
        <Link href="/users">Search Users</Link>
      </div>
      <article style={{ display: "flex", justifyContent: "center" }}>
        <h2>{user.name}</h2>
      </article>
      <br />
      {/* Suspense is used to load the another component lately  */}
      <Suspense fallback={<h1>Loading....</h1>}>
        <UserPosts promise={postData} />
      </Suspense>
    </>
  );
};

export default SingleUserPosts;

export const generateStaticParams = async()=> {
    const userData: Promise<Users[]> = getAllUsers();

    const users = await userData;
    return users.map(user => ({userId : user.id.toString()}))
}

/**   Suspense
 * It is used to lazy load some components in page
 * When the page have to show many components or data, Instead of load everything at a single time
 * we can load a partial data in the beginning and reaming data after
 * This imporves user experience
 */
