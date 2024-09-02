import { getSession, Session } from "@auth0/nextjs-auth0";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="flex flex-col items-center space-y-4 mb-5">
        <img src={user.picture || ""} alt={user.name || ""} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </div>
  );
}
