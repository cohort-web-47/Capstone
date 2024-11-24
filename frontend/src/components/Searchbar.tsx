import {FaGear} from "react-icons/fa6";
import { GoGear } from "react-icons/go";

type SearchBarProps = {
    med: {
        position: string,
        width: string

    }
}

export default function Searchbar(props: SearchBarProps) {
    let {med} = props;
    return (
        <>
        <div
            className={`searchbar w-full h-20  bg-[#D1BBA0] flex items-center justify-center gap-6 fixed top-0 z-10 md:${med.width} md:${med.position}`}>
            <div className="border-black  border-2 bg-gray-600 rounded-full h-10 w-10 cursor-pointer">PP</div>
            <input type="text" placeholder="Seharch..."
                   className="w-2/3 rounded-2xl self-center bg-[#e8d3ba] outline-none border-none focus:outline-none focus:border-none my-10"/>
            {/*<FaGear  />*/}
            <GoGear className="h-8 w-8 cursor-pointer"/>
        </div>
        </>
    )
}