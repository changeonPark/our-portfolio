import { Layout } from "base/components"

import { NextPage } from "next"
import Head from "next/head"

const Projects: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>박찬건 포트폴리오</title>
        <meta name="description" content="박찬건의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default Projects