import { useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery";

interface BgUrls {
  [key: string]: any;
}
function Channels() {
  const isTablet = useMediaQuery(1024);
  const bgUrls: BgUrls = {
    sports: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/cl5hfizp1qtoz1v3cagkvtbk2-ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixd47am2l91k7r9dvzt0bi-ckuh9mwn808iv1v31u5qhc0lj-ckqwp3dbnf39o1j5snovs92yr-welcome-v6-sports-min-1-full-full.jpg'

    },
    news: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixevqgs6rn1k4eh3si78i5-ckuh9mwgf07wx1v3w11vwnm7v-ckqip0kn59nkn1u4y1pbrygdu-news-375x760-2x-full-full.jpg'
    },
    events: {
      lg: 'https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg',
      sm: 'https://www.hulu.com/static/hitch/s3/attachments/ckzixgoqcs6t91k56rxwnqi42-ckuh9mwhe08r61v07uaz109j1-ckqip58nxmxz71u3nhauv2qpx-biggest-events-375x760-2x-full-full.jpg'
    }
  }
  const [activeUrl, setActiveUrl] = useState(bgUrls.news);

  return (
    <div className="w-full h-[120vh] sm:h-[110vh] lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${isTablet ? activeUrl.sm : activeUrl.lg})` }}>

    </div>
  )
}

export default Channels