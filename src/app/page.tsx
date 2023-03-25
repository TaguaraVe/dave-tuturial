import Link from 'next/link';

import { Inter, Russo_One } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });
const russoOne = Russo_One({ weight: '400', subsets: ['latin-ext'] });

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Taguara Digital</h1>
      <h1 className={russoOne.className}>Taguara Digital</h1>
      <Link href={'/about'}>Go to About page</Link>
      <Link href={'/users'}>Go to User List</Link>
    </main>
  );
};

export default Home;
