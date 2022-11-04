import Head from "next/head";
import { Header, Footer } from ".";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-24">{children}</main>
      <Footer />
      <div id="root-modal"></div>
    </>
  );
};

export default Layout;
