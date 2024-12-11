import {Button} from "flowbite-react";
import {InputText} from "@/app/(index)/post-page-with-picture/inputtext";
import ProfileTab from "@/components/ProfileTab"
import {customTheme} from "@/utils/theme.utils";
import {Dropdown} from "flowbite-react";
import {ProfileDropdown} from "@/app/profile-dropdown/ProfileDropdown";


export default function () {
    return (
        <>
            <div className="bg-themeBackground">
                <div className="mx-auto flex flex-row justify-between p-4">
                    <button className='bg-themeNavbar rounded px-2 py-1 hover:bg-yellow-500'>Cancel</button>
                    <button className='bg-themeNavbar rounded px-4 py-1 hover:bg-yellow-500'>Post</button>
                </div>

                <div className="mx-auto flex flex-row p-4">
                    <ProfileDropdown/>
                    <p className="text-center pt-2 px-2">PetName</p>
                </div>

                <div>
                    <InputText/>
                    <img src="https://picsum.photos/100/" alt="immage of the post" className="rounded-2xl mx-auto size-80"/>
                </div>


                <div className="mx-auto flex flex-row pl-4 justify-left bg-themeNavbar mt-2">
                    <button className='bg-themeNavbar rounded px-2 py-0 hover:bg-themeBackground'><img
                        src="/picture_icon.svg" alt="dog icon"
                        className="w-10"/>
                    </button>
                    <button className='bg-themeNavbar rounded px-2 py-0 hover:bg-themeBackground'><img
                        src="/dog-icon.png" alt="dog icon"
                        className="w-10 rounded border-2 border-yellow-950"/>
                    </button>
                </div>

            </div>


        </>
    )
}