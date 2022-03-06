import type { NextPage } from 'next'
import Head from 'next/head'
import Terminal from '../components/Terminal'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#010409]">
      <Head>
        <title>Mark Sikaundi | E-CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-[1300px] overflow-hidden rounded-xl bg-[#0d1117] shadow-md shadow-rose-800 md:h-[700px]">
        <Terminal />
      </main>
    </div>
  )
}

export default Home
