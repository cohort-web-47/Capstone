import {string} from "postcss-selector-parser";
type ProfileProps = {

    profile: {
        profileId: string,
        imageUrl: string,
        profileName: string,
    }
}


export default function ProfileTab(props: ProfileProps) {
    const {profile} = props;

    return (
        <>
            <div
                className="w-2/3 py-2 pl-6 bg-profile rounded-xl  flex items-center gap-6 cursor-pointer hover:bg-white">
                <img className={"rounded-full w-12 h-12 cursor-pointer"} src={profile.imageUrl} alt="profile pic"/>

                <p className="justify-center">{profile.profileName}</p>
            </div>
        </>
    )
}