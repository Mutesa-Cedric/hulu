import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/main/Header'
import Nav from '../components/main/Nav'
import Results from '../components/main/Results'
import { requests } from '../utils/requests'
function Home({ results }: { results: any }) {
  return (
    <div className="bg-[#06202A] text-gray-300 w-full h-auto scrollbar-hide">
      <Head>
        <title>hulu - by Mutesa Cedric</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export default Home

export async function getServerSideProps(context: { query: { genre: string } }) {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTredingMovies.url}`)
    .then(res => res.json());
  return {
    props: {
      results: request.results
    }
  }
}
