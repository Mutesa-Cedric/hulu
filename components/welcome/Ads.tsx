import { ArrowSmDownIcon, ChevronDownIcon } from "@heroicons/react/outline"
import Feature, { FeatureProps } from "./Feature"

const features: FeatureProps[] = [
    {
        img: 'https://www.hulu.com/static/hitch/s3/attachments/ckzix4ce0m28n1k7rwhwjufa7-ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x-full.jpg',
        name: "TV Shows",
        description: "Past & Current Seasons"
    },
    {
        img: "https://www.hulu.com/static/hitch/s3/attachments/ckzix6os0m2cl1k7rmtowojwd-cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1-full.jpg",
        name: "Movies",
        description: "New & Classic"
    },
    {
        img: "https://www.hulu.com/static/hitch/s3/attachments/ckzix9rkis6t31v5mteb3tnon-ckzix7nm8s6q01v5mrhx8mjms-cktarx0vs0o9q1w7av35olnl8-nine-perfect-strangers-category-poster-tile-294x450-2x-full-full.jpg",
        name: "Hulu Originals",
        description: "GroundBreaking"
    },
    {
        img: "https://www.hulu.com/static/hitch/s3/attachments/ckzixaonhhgrc1k6w2bn2vte1-cktaw41ct0trg1v5yjb2aysun-billions-category-poster-tile-v1-294x450-2x-full.jpg",
        name: "Premiums",
        description: "Add-on"
    }
]
function Ads() {
    return (
        <div className="flex flex-col items-center space-y-28 min-h-screen lg:pt-8">
            <div className="flex flex-col  items-center space-y-16">
                <div className="flex flex-col items-center space-y-2 sm:space-y-3" >
                    <h1 className="text-green-secondary text-[13px] md:text-sm lg:text-[16px] font-bold tracking-wider">INCLUDED IN ALL PLANS</h1>
                    <h2 className="text-white font-bold text-[32px] md:text-[36px] lg:text-[45px]">All The TV You Love</h2>
                    <p className="text-white text-center font-semibold tracking-wide px-4 md:max-w-3xl lg:max-w-[58rem] lg:text-xl">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 md:gap-10 w-full px-6 lg:px-28">
                    {
                        features.map((feature, key) => (
                            <Feature key={key} {...feature} />
                        ))
                    }
                </div>
            </div>
            <div className="text-center flex flex-col items-center lg:w-2/4 space-y-4 lg:pt-16 ">
                <h1 className="text-green-secondary text-[12px] sm:text-sm font-bold">HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</h1>
                <h2 className="text-white font-bold text-3xl lg:text-5xl tracking-wide">Live TV Makes It Better</h2>
                <p className="text-white text-lg px-4">
                    Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.
                </p>

                <p className="text-[12px] p-2 text-gray-300/50">18+ only. Regional restrictions, blackouts and <a data-target="#legal-modal">Live TV terms apply</a>. Access content from each service separately and access ESPN+ content via Hulu. Location data required to watch certain content. Offer valid for eligible subscribers only.&nbsp;<br />
                    Unlimited DVR recording is not available for on-demand shows.
                </p>
                <div className="flex flex-col space-y-8 text-center text-white/75">
                    <p className="underline uppercase text-white/75">View Channels in your area</p>
                    <ChevronDownIcon className="h-8 animate-bounce" />
                </div>

            </div>
        </div>
    )
}

export default Ads
