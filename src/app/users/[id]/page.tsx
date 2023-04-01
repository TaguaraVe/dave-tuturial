import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import styles from '../users.module.css';
import getAllUsers from '@/lib/getAllUsers';
import getUserById from '@/lib/getUserById';
import getUserPosts from '@/lib/getUserPosts';

import { UserInfo } from './userDetail';
import { UserPostsList } from './userPostsList';

type Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUserById(params.id);
  const user = await userData;

  if (!user?.name) {
    return {
      title: ' User not Found',
    };
  }

  return {
    title: user.name,
    description: `Taguara Digital - Practica Pagina del Usuario ${user.name}`,
  };
};

const UserDetail = async ({ params }: Params) => {
  const userData: Promise<User> = getUserById(params.id);
  const userPosts: Promise<Post[]> = getUserPosts(params.id);
  // const [user, posts] = await Promise.all([userData, userPosts]);
  const user = await userData;

  if (!user?.name) return notFound();

  return (
    <section className={styles.section}>
      <UserInfo user={user} />
      <Suspense fallback={<h2>Cargando los Posts del usuario</h2>}>
        {/* <UserPostsList posts={posts} /> */}
        {/* @ts-expect-error Async Server Component */}
        <UserPostsList promise={userPosts} />
      </Suspense>
    </section>
  );
};

export const generateStaticParams = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ id: user.id.toString() }));
};

export default UserDetail;
