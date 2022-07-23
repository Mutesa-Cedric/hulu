import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery"

function Banner() {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    console.log(isTablet)
    return (
        <div className="h-[97vh] md:h-[87vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `linear-gradient(to top,rgba(255,255,255,.0) 0,rgba(0,0,0,.0) 0%,rgba(0,0,0,.0) 70%,rgba(0,0,0,.8) 100%),url(${isMobile ? '/images/banner-sm.jpg' : '/images/banner.jpg'})` }}>
            <div className="flex flex-col justify-between items-center px-12 md:px-0 space-y-4 sm:space-y-6 mt-12">
                <p className="text-green-500 font-bold text-[13px] sm:font-bold ">BUNDLE WITH ANY HULU PLAN &#38; SAVE</p>
                <div className="flex flex-col items-center space-y-3">
                    <Image src={'https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png'} alt={"companies"} width={!isTablet ? 600 : 400} height={!isTablet ? 120 : 80} />
                    <p className="text-center text-white font-bold text-lg sm:text-2xl w-3/4">
                        Get endless entertainment, live sports, and the shows and movies you love.
                    </p>
                </div>
                <Link href="/account/plan?type=bundle">
                    <button className="bg-green-primary transition-all duration-300 hover:opacity-[.65] text-[#040405] font-bold py-3 px-12 w-full sm:w-3/4  rounded-md">
                        GET THE DISNEY BUNDLE
                    </button>
                </Link>

                <div className="space-y-2 text-center">
                    <p className="flex space-x-1 text-sm">
                        <button>
                            <span className="text-white underline">what's included?</span>
                        </button>
                        <span className="text-white">see</span>
                        <Link href="/terms/bundle-terms">
                            <p className="underline text-white">Bundle terms</p>
                        </Link>
                    </p>
                    <Link href={'/account/plans?type=hulu'}>
                        <p className="text-white underline">Sign up for Hulu only</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner