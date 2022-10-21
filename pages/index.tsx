import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "base/components";
import { Hero } from "home/components";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
