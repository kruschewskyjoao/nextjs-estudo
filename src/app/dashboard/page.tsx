import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session ? `Hello, ${session?.user?.name}!` : "You're not signed in!"}</p>
    </div>
  )
}