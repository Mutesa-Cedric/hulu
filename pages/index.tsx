import { request } from 'http'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import { requests } from '../utils/requests'
function Home({ results }: { results: any }) {
  return (
    <div className="">
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
