'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

type UserProps = {
  user: User;
};
export const UserInfo = ({ user }: UserProps) => {
  const router = useRouter();

  return (
    <article>
      <h2 onClick={() => router.back()}>
        <FaChevronLeft />
        <span> Back to User List</span>
      </h2>
      <h2> User Detail</h2>
      <p>{user.name}</p>
      <p>{user.company.name}</p>
      <p>{user.username}</p>
    </article>
  );
};
