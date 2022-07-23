import { MenuIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div className="pt-4 relative w-full justify-between flex px-6 sm:px-10  items-center">
                <Image src={'/images/logo-main.png'} alt="logo"
                    width={60} height={20} />
                <div
                    className="bg-gray-primary lg:hidden px-4 py-3 rounded-lg cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}>
                    <MenuIcon className="w-[15px] text-white" />
                </div>
                <div className="hidden lg:flex group hover:bg-gray-primary py-2 px-4 rounded-lg transition-all duration-500">
                    <p className="text-[#a8afbd] font-bold group-hover:text-white transition-all duration-500">LOG IN</p>
                </div>
                {
                    showMenu &&
                    <div className="absolute lg:hidden py-1 right-6 top-20 text-white font-semibold bg-[#323843] shadow-md rounded-lg  flex items-center flex-col">
                        <div className="w-full group px-2 py-1 hover:bg-gray-500/75 rounded-md transition-all duration-500">
                            <Link href={'/account/login'} >
                                <div className=" group-hover:bg-slate-300 py-1 px-4 flex items-center justify-center w-full rounded-md cursor-pointer transition-all duration-500">
                                    <p className="text-[#a8afbd] mx-1 py-1 font-semibold group-hover:text-white transition-all duration-500">LOG IN</p>
                                </div>
                            </Link>
                        </div>
                        <Link href={'/account/plans?type=bundle'} >
                            <div className="px-1 hover:bg-gray-500/75 transition-all duration-500">
                                <p className="bg-[#0b0c0f] py-3 px-8 rounded-lg text-[14px] cursor-pointer">GET THE DESNEY BUNDLE</p>
                            </div>
                        </Link>
                    </div>
                }
            </div>

        </nav>
    )
}

export default NavBar