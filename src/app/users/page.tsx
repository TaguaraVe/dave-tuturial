import Link from 'next/link';
import { Russo_One } from 'next/font/google';
import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import styles from './users.module.css';

const russoOne = Russo_One({ weight: '400', subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Users',
};

const UserList = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  console.log('user 1', users[1]);
  return (
    <section>
      <h1 className={russoOne.className}>User List</h1>
      <h2>
        <Link href="/"> Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <article key={user.id} className={styles.card}>
            <p className={(styles.bold, russoOne.className)}>
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
