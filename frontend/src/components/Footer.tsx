import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

export function Footer   () {
    return (

        <footer className="bg-[#D1BBA0] py-10 flex justify-between mx-auto p-4 ">


            <div>
                <FiHome className={"h-96 w-96"} />
            </div>

            <div>
                <IoMdSearch className={"h-96 w-96"} />
            </div>

            <div>
                <GoPeople className={"h-96 w-96"} />
            </div>

            <div>
                <IoMdNotificationsOutline className={"h-96 w-96"} />
            </div>

        </footer>
    )
}