import Link from "next/link";
import {FiHome} from "react-icons/fi";
import {IoMdNotificationsOutline, IoMdSearch} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {CiBookmark} from "react-icons/ci";

export function LeftSideBar() {

    return (
        <>
            <div
                className="left hidden  md:flex md:flex-col bg-themeBackground md:w-1/3 md:h-full md:fixed md:top-0 md:left-0 md:pl-6 md:pt-8 md:pb-12">
                <img src={"/petlogo.jpg"} alt="petlogo" className="rounded-full h-16 w-16 cursor-pointer"/>

                <Link href={'/'}>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><FiHome
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl font-bold ">Home</p>
                    </div>
                </Link>

                <Link href={'search'}>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><IoMdSearch
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl">Search</p>
                    </div>
                </Link>


                <Link href={'followers'}>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><GoPeople
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl cursor-pointer">Follower</p>
                    </div>
                </Link>

                <Link href={'following'}>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><GoPeople
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl cursor-pointer">Followee</p>
                    </div>
                </Link>

                <Link href={'notification'}>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer">
                        <IoMdNotificationsOutline
                            className={"min-h-10 min-w-10"}/><p className="hidden lg:block text-2xl">Notifications</p>
                    </div>
                </Link>

                <Link href={'savePostPage'}>
                <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><CiBookmark
                    className={"min-h-10 min-w-10"}/><p className="hidden lg:block text-2xl">Bookmarks</p>
                </div>
                </Link>

                <Link href={'create-post'}>
                <div className="flex flex-col pr-40">
                    <button
                        className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Post
                    </button>
                </div>
                    </Link>


                    <Link href={'sign-in'}>
                    <button
                        className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Sign
                        out
                    </button>
                    </Link>

                </div>
        </>

    )
}