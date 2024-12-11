'use server'

import Searchbar from "@/components/Searchbar";
import ProfileTab from "@/components/ProfileTab";
import {getCurrentPet} from "@/app/profile-dropdown/switch-pet.action";
import {fetchPetsByProfileID} from "@/utils/models/pet/pet.action";

export async function ConnectionsPanel() {
    const currentPet = await getCurrentPet();
    const connections = await fetchFollowersByProfileID()
    return(
        <>
            <div
                className="right-side hidden md:flex md:w-1/3 md:h-svh md:bg-themeBackground md:flex-col md:items-center md:fixed md:top-0 md:right-0">
                <Searchbar med={med}/>
                <div
                    className="w-full bg-themeBackround pr-8 flex flex-col gap-6 items-center justify-center flex-1">


                    <p className={"text-2xl"}>Connections</p>

                    {profiles.slice(0, 3).map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}

                </div>


            </div>

        </>
    )
}
