import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "base/components"
import { Hero, Animation } from "home/components"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>박찬건 포트폴리오</title>
        <meta name="description" content="박찬건의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}

export default Home
