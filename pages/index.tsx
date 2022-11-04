import type { NextPage } from "next";
import { Hero } from "home/components";
import { Layout } from "layout/components";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
    </Layout>
  );
};

export default Home;
