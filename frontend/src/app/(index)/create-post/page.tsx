'use server'
import {Button} from "flowbite-react";
import {InputText} from "@/app/(index)/create-post/inputtext";
import ProfileTab from "@/components/ProfileTab"
import {ProfileDropdown} from "@/app/profile-dropdown/ProfileDropdown";
import {customTheme} from "@/utils/theme.utils";
import {Dropdown} from "flowbite-react";
import {ProfileDropdownServer} from "@/app/profile-dropdown/ProfileDropdown.server";
<<<<<<< HEAD
import {getSession} from "@/utils/session.utils";
import {getCurrentPet} from "@/app/profile-dropdown/switch-pet.action";
import {CreatePostForm} from "@/app/(index)/create-post/CreatePostForm";
=======
>>>>>>> like-wiring


export default async function () {

    const session = await getSession();
    const currentPet = await getCurrentPet();

    return (
        <>
            <div className="bg-themeBackground">


                <div className="mx-auto flex flex-row p-4">

                    <ProfileDropdownServer/>

                    <p className="text-center pt-2 px-2">PetName</p>
                </div>
                <div>
                    <InputText/>
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
            <CreatePostForm profile={session?.profile} currentPetId={currentPet.petId} />

            </div>



        </>
    )
}