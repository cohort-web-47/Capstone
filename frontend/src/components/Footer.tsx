import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

export function Footer   () {
    return (
        <>

            <div>
<<<<<<< HEAD
                <footer className="bg-[#D1BBA0] flex justify-between w-full bottom-0 fixed">
=======
                <footer className="bg-themeNavbar flex justify-between w-full bottom-0 fixed">
>>>>>>> develop
                    <FiHome className={"h-12 w-12"}/>
                    <IoMdSearch className={"h-12 w-12"}/>
                    <GoPeople className={"h-12 w-12"}/>
                    <FaRegBookmark className={"h-12 w-12"}/>
                    <IoMdNotificationsOutline className={"h-12 w-12"}/>
                </footer>
            </div>

        </>
    )
}