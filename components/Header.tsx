import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between m-5 items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="home" Icon={HomeIcon} />
                <HeaderItem title="trending" Icon={LightningBoltIcon} />
                <HeaderItem title="verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="collection" Icon={CollectionIcon} />
                <HeaderItem title="search" Icon={SearchIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
            <Image src={'/images/logo-white.png'} className="object-contain" alt="logo" width={100} height={80} />
        </header>
    )
}

export default Header