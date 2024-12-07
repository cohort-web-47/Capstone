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
{/*/!*<<<<<<< HEAD*!/*/}
{/*                <footer className="bg-[#D1BBA0] flex justify-between w-full bottom-0 fixed">*/}
{/*=======*/}
                <footer className="bg-themeNavbar flex justify-between w-full bottom-0 fixed">
{/*>>>>>>> develop*/}
                    <Link href={'/'}> <FiHome className={"h-12 w-12"}/></Link>
                    <Link href={'search'}><IoMdSearch className={"h-12 w-12"}/></Link>
                    <Link href={'followers'}> <GoPeople className={"h-12 w-12"}/></Link>
                    <Link href={'saved'}><FaRegBookmark className={"h-12 w-12"}/></Link>
                    <Link href={'notifications'}><IoMdNotificationsOutline className={"h-12 w-12"}/></Link>
                </footer>
            </div>

        </>
    )
}