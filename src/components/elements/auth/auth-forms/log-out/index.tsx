// app/components/NavBar.tsx
'use client';

import { useSession, signOut } from "next-auth/react";

export const LogoutForm = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>User not logged in</p>;
  }

  return (
    <div>
      <p>Welcome, {session.user?.email}</p>
      <button onClick={() => signOut()}>Log out</button>
    </div>
  );
}
