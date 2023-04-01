import Link from 'next/link';

import { Inter, Russo_One } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const russoOne = Russo_One({ weight: '400', subsets: ['latin-ext'] });

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-80px] flex flex-col justify-center items-center p-24 ">
      <h1 className={`${russoOne.className} text-5xl`}>Taguara Digital</h1>
      <div className="flex gap-8">
        <Link
          className="my-10 bg-indigo-600 mx-auto py-2 px-5 rounded-lg text-white hover:bg-indigo-400 "
          href={'/about'}
        >
          Go to About page
        </Link>
        <Link
          className="my-10 bg-orange-400  mx-auto py-2 px-5 rounded-lg text-white hover:bg-orange-300 "
          href={'/users'}
        >
          Go to User List
        </Link>
      </div>
    </main>
  );
};

export default Home;
