import Link from 'next/link';
type Props = {};

const About = (props: Props) => {
  //   throw new Error(' Probando error. page');
  return (
    <section>
      <h1>About Page</h1>
      <Link href={'/'}>Back to Home page</Link>
    </section>
  );
};
export default About;
