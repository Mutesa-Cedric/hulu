import Head from "next/head"
import Ads from "../components/welcome/Ads"
import Banner from "../components/welcome/Banner"
import Channel from "../components/welcome/Channel"
import Footer from "../components/welcome/Footer"
import NavBar from "../components/welcome/NavBar"
import Plans from "../components/welcome/Plans"

function welcome() {
  return (
    <div className="flex  min-h-screen flex-col justify-between">
      <Head>
        <title>Stream Tv and Movies Live and online | Hulu</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main className="bg-[#0b0c0f] relative">
        <NavBar />
        <Banner />
        <Ads/>
        <Channel/>
        <Plans/>
      </main>
      <Footer />
    </div>
  )
}

export default welcome