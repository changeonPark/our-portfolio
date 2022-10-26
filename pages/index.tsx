import type { NextPage } from "next";

import { Layout } from "base/components";
import { Hero } from "home/components";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
    </Layout>
  );
};

export default Home;
