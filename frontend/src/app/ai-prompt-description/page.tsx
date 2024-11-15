import {Button} from "flowbite-react";
import {InputText} from "@/app/create-post/inputtext";
import ProfileTab from "@/components/ProfileTab"
import {ProfileDropdown} from "@/app/create-post/dropdown";
import {customTheme} from "@/utils/theme.utils";
import {Dropdown} from "flowbite-react";


export default function () {
    return (
        <>
            <div className="bg-themeBackground pb-2">
                <div className="mx-auto flex flex-row justify-between p-4">
                    <button className='bg-themeNavbar rounded px-2 py-1 hover:bg-yellow-500'>Cancel</button>
                    <button className='bg-themeNavbar rounded px-4 py-1 hover:bg-yellow-500'>Add</button>
                </div>
                <div>
                    <InputText/>
                </div>
                <div className="mx-auto text-center my-2.5 ">
                    <button className='bg-themeNavbar rounded px-4 py-1 hover:bg-yellow-500'>Generate</button>
                </div>

            </div>


        </>
    )
}