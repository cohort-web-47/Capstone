import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {ProfileDropdown} from "@/app/profile-dropdown/ProfileDropdown";
import {ProfileDropdownServer} from "@/app/profile-dropdown/ProfileDropdown.server";

export default async function Page(){
    const session = await getSession();
    if(!session){
        redirect('/sign-in');
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <ProfileDropdownServer />
        </div>
    )
}