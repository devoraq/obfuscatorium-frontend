import { cookies } from 'next/headers';

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  role: string;
  createdAt: string;
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = cookies();
  const tokenCookie = (await cookieStore).get('access_token');

  if (!tokenCookie) return null;
  const token = tokenCookie.value;

  try {
    // нужна api
    const res = await fetch(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;

    const user: User = await res.json();
    return user;
  } catch {
    return null;
  }
}
