import { getSession, Session } from "@auth0/nextjs-auth0";

import db from "@/modules/db";
import { revalidatePath } from "next/cache";
import Button from "@/components/Button";

export default async function Home() {
  const session: Session | null | undefined = await getSession();

  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        Loading...
      </div>
    );
  }

  const { user } = session;
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } });

  const generatePosts = async () => {
    "use server";

    await db.post.createMany({
      data: [
        { content: "Hello, world!" },
        { content: "This is a test post" },
        { content: "This is another test post" },
      ],
    });
    revalidatePath("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="flex flex-col items-center space-y-4 mb-5">
        <img src={user.picture || ""} alt={user.name || ""} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
      <Button
        onClick={generatePosts}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        generate a post
      </Button>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 m-4 rounded-md shadow-md text-black"
        >
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
