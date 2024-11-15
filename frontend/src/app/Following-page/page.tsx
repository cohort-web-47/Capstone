import ProfileTab from "@/components/ProfileTab";
import Searchbar from "@/components/Searchbar";

export default function SearchPage() {

    const pets=[
        {petId:"1", petImageUrl:"https://picsum.photos/200",petName:"Fido"}
    ]
    const profiles = [
        { profileId: "1", imageUrl: "https://picsum.photos/400",  profileName: "Mittens"},
        { profileId: "2", imageUrl: "https://picsum.photos/200",  profileName: "Ruffles"},
        { profileId: "3", imageUrl: "https://picsum.photos/300",  profileName: "Clancy"},
        { profileId: "4", imageUrl: "https://picsum.photos/500",  profileName: "Wiley"},
        { profileId: "5", imageUrl: "https://picsum.photos/100",  profileName: "Lemmy"},
    ]
    return (
        <>
            <Searchbar />
            <div className="container bg-themeBackround flex-col md:flex-row ">


                <div id="mobile-view" className="h-screen w-screen bg-themeBackground flex flex-col py-20 md:hidden">

                    <div className=" bg-themeBackground my-6 flex flex-col gap-6 items-center ">
                        <p className={"text-2xl"}>Following</p>
                        {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}
                    </div>
                </div>

                <div
                    className="middle hidden md:flex  md:bg-themeBackground md:border-2 md:border-white md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">
                    <div className=" bg-themeBackground my-6 flex flex-col gap-6 items-center ">
                        <p className={"text-2xl"}>Following</p>
                        {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}
                    </div>
                </div>

                <div
                    className="right-side hidden md:flex md:w-1/3 md:h-full md:bg-themeBackground md:flex-col md:items-center md:fixed md:top-0 md:right-0">

                </div>
            </div>
        </>
    )
}