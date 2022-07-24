import Image from "next/image";
import { Key, useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery";

interface BgUrls {
  [key: string]: any;
}
function Channels() {
  const isTablet = useMediaQuery(1024);
  const bgUrls: BgUrls = {
    sports: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/cl5hfizp1qtoz1v3cagkvtbk2-ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixd47am2l91k7r9dvzt0bi-ckuh9mwn808iv1v31u5qhc0lj-ckqwp3dbnf39o1j5snovs92yr-welcome-v6-sports-min-1-full-full.jpg',
      title: 'Live Sports',
      desc: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
      logos: [
        'https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png',
        'https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png',
        'https://www.hulu.com/static/hitch/s3/attachments/cka359jx805870wfx5lh6g69s-foxsports1-network-logo-0.svg',
        'https://www.hulu.com/static/hitch/s3/attachments/ckrp67fa801rn1u0tr0tnice2-nfl140x80.png'
      ]
    },
    news: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixevqgs6rn1k4eh3si78i5-ckuh9mwgf07wx1v3w11vwnm7v-ckqip0kn59nkn1u4y1pbrygdu-news-375x760-2x-full-full.jpg',
      title: 'Breaking News',
      desc: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks..",
      logos:[
        'https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png',
        'https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg',
        'https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png',
        'https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg'

      ]

    },
    events: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixgoqcs6t91k56rxwnqi42-ckuh9mwhe08r61v07uaz109j1-ckqip58nxmxz71u3nhauv2qpx-biggest-events-375x760-2x-full-full.jpg',
      title: 'Biggest Events',
      desc: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
      logos:[
        'https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png',
        'https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png',
        'https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png',
        'https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png'
      ]

    }
  }
  const [activeUrl, setActiveUrl] = useState(bgUrls.sports);

  return (
    <div className="w-full h-[120vh] sm:h-[110vh] lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.7) 0,rgba(0,0,0,.7) 0%,rgba(0,0,0,.0) 70%,rgba(0,0,0,.6) 100%),url(${isTablet ? activeUrl.sm : activeUrl.lg})` }}>
      <div className="flex flex-col items-center h-max lg:items-start lg:pt-32 lg:pl-48 ">
        <div className="flex items-center space-x-7 lg:space-x-12 mt-8">
          <button className="channelButton"
            style={activeUrl.lg === bgUrls.sports.lg ? { color: "white", borderColor: "white", fontSize: "16px" } : {}}
            onClick={() => setActiveUrl(bgUrls.sports)}>
            live sports
          </button>
          <button className="channelButton "
            style={activeUrl.lg === bgUrls.news.lg ? { color: "white", borderColor: "white", fontSize: "16px" } : {}}
            onClick={() => setActiveUrl(bgUrls.news)}>
            breaking news
          </button>
          <button className="channelButton "
            style={activeUrl.lg === bgUrls.events.lg ? { color: "white", borderColor: "white", fontSize: "16px" } : {}}
            onClick={() => setActiveUrl(bgUrls.events)}>
            biggest events
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-start text-white font-bold mt-20 lg:mt-12 space-y-5 lg:space-y-8 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-5xl">{activeUrl.title}</h1>
          <p className="text-center lg:text-start lg:max-w-lg lg:font-semibold lg:text-xl ">{activeUrl.desc}</p>
          <div className="flex justify-center lg:justify-start space-x-6  w-full items-center">
            {
              activeUrl.logos.map((logo: string, index: Key | null | undefined) => (
                <div className=" p-1 rounded-full bg-white">
                  <Image key={index} src={logo} height={35} width={40} alt="logo" className=" rounded-full" />
                </div>
              ))
            }
          </div>
          <p className="text-[12px] text-white/50 text-center px-6 lg:px-0 mt-3">Live TV plan required. Regional restrictions, blackouts and additional terms apply. </p>
        </div>
      </div>
    </div>
  )
}

export default Channels