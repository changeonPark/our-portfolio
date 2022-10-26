import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <div className="bg-primary">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
