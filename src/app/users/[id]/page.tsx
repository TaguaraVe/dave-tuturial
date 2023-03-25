import { Suspense } from 'react';
import getUserById from '@/lib/getUserById';
import getUserPosts from '@/lib/getUserPosts';
import styles from '../users.module.css';
import { UserInfo } from './userDetail';
import { UserPostsList } from './userPostsList';
import type { Metadata } from 'next';

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
export default UserDetail;
