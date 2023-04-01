'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search } from './Search';
type User = {
  name: string;
  email: string;
  avatar?: string;
};

type Props = {};

const Menu = () => {
  return (
    <ul className=" flex space-x-4">
      <li className="headerLink">
        <Link href="/blog"> Blog Pro</Link>
      </li>
      <li className="headerLink">
        <Link href="/users">User Protected</Link>
      </li>
      <li className="headerLink">
        <Link href="/about">About US</Link>
      </li>
    </ul>
  );
};

const Header = (props: Props) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<User>({
    name: '',
    email: '',
    avatar: '',
  });

  const signIn = () => {
    setCurrentUser({
      name: 'Pedro',
      email: 'pedro@correo.com',
      avatar: '',
    });
  };
  const signOut = () => {
    setCurrentUser({
      name: '',
      email: '',
      avatar: '',
    });
  };

  return (
    <header className="h-[80px] bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl z-10">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">Taguara Digital</Link>
      </h1>
      <nav className="flex items-center space-x-4 ">
        <Menu />
        <Search />
        <div className="ml-auto flex gap-2">
          {currentUser ? (
            <div className="flex items-center gap-4">
              <p className="text-sky-600"> {currentUser.name}</p>
              <button className="text-red-500" onClick={() => signOut()}>
                Sign Out
              </button>
            </div>
          ) : (
            <button className="text-green-600" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
