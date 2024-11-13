import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

export function Footer   () {
    return (
        <>

            <div>
                <footer className="bg-[#D1BBA0] flex justify-between w-full bottom-0 fixed">
                    <FiHome className={"h-24 w-24"}/>
                    <IoMdSearch className={"h-24 w-24"}/>
                    <GoPeople className={"h-24 w-24"}/>
                    <IoMdNotificationsOutline className={"h-24 w-24"}/>
                </footer>
            </div>

        </>
    )
}