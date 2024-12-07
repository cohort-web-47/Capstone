import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export function Footer   () {
    return (
        <>

            <div>

                <footer className="bg-themeNavbar flex justify-between w-full bottom-0 fixed">
                    <Link href={'/'}> <FiHome className={"h-12 w-12"}/></Link>
                    <Link href={'search'}><IoMdSearch className={"h-12 w-12"}/></Link>
                    <Link href={'following'}> <GoPeople className={"h-12 w-12"}/></Link>
                    <Link href={'save-post'}><FaRegBookmark className={"h-12 w-12"}/></Link>
                    <Link href={'notifications'}><IoMdNotificationsOutline className={"h-12 w-12"}/></Link>
                </footer>
            </div>

        </>
    )
}