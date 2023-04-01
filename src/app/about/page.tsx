import Link from 'next/link';
type Props = {};

const About = (props: Props) => {
  //   throw new Error(' Probando error. page');
  return (
    <section className="flex min-h-[calc(100vh-112px)] bg-slate-100 justify-center items-center">
      <h1 className="text-4xl text-red-400">About Page</h1>
    </section>
  );
};
export default About;
