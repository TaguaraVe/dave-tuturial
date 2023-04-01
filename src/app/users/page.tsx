import Link from 'next/link';
import { Russo_One } from 'next/font/google';
import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';

const russoOne = Russo_One({ weight: '400', subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Users',
};

const UserList = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return (
    <section>
      <h1 className={`${russoOne.className} text-center text-4xl`}>
        User List
      </h1>
      <p className="bg-black ml-20 px-4 py-2 rounded-lg w-[140px]">
        <Link href="/"> Back to Home</Link>
      </p>

      {users.map((user) => {
        return (
          <article
            key={user.id}
            className="max-w-[600px] mx-auto bg-slate-400 gap-4 my-2 px-8 py-4 flex items-center "
          >
            <p className={russoOne.className}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
          </article>
        );
      })}
    </section>
  );
};

export default UserList;
