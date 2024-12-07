import ProfileTab from "@/components/ProfileTab";
import {PostCard} from "@/components/PostCard";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {FiHome} from "react-icons/fi";
import {IoMdSearch} from "react-icons/io";
import {FaRegBookmark} from "react-icons/fa6";
import {CiBookmark} from "react-icons/ci";
import Searchbar from "@/components/Searchbar";
import {NavTwo} from "@/components/NavTwo";
import {fetchAllPosts} from "@/utils/models/post/post.action";
import {LeftSideBar} from "@/components/LeftSideBar";


export default async function HomePage() {

    // const posts = [
    //     {postId: "1", postImageUrl: "https://picsum.photos/400", postCaption: "I love cat", postPetId: "1"},
    //     {postId: "2", postImageUrl: "https://picsum.photos/400", postCaption: "I love dog", postPetId: "1"},
    //     {postId: "3", postImageUrl: "https://picsum.photos/400", postCaption: "I love cow", postPetId: "1"},
    //     {postId: "4", postImageUrl: "https://picsum.photos/400", postCaption: "I love swine", postPetId: "1"},
    //     {postId: "5", postImageUrl: "https://picsum.photos/400", postCaption: "I love goats", postPetId: "1"},
    //
    // ]

    const posts = await fetchAllPosts();

    const pets = [
        {petId: "1", petProfileId: "1", petImageUrl: "https://picsum.photos/200", petName: "Fido"}
    ]
    const profiles = [
        {profileId: "1", imageUrl: "https://picsum.photos/400", profileName: "Mittens"},
        {profileId: "2", imageUrl: "https://picsum.photos/200", profileName: "Ruffles"},
        {profileId: "3", imageUrl: "https://picsum.photos/300", profileName: "Clancy"},
        {profileId: "4", imageUrl: "https://picsum.photos/500", profileName: "Wiley"},
        {profileId: "5", imageUrl: "https://picsum.photos/100", profileName: "Lemmy"},

    ]
    let med = {width: 'w-1/3', position: 'right-1/3'};


    return (
        <>

            {/*<div className={"fixed z-10 w-screen"}><Nav/></div>*/}
            <div className="container bg-themeBackround flex-col md:flex-row ">

<LeftSideBar />

                <div
                    className="middle hidden md:flex border-white border-2 md:bg-themeBackground md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">


                    <NavTwo/>


                    <div className="container w-full pr-8">
                        {posts.map(post => <PostCard post={post}  key={post.postId}/> )}
                    </div>


                <div
                    className="right-side hidden md:flex md:w-1/3 md:h-svh md:bg-themeBackground md:flex-col md:items-center md:fixed md:top-0 md:right-0">
                    <Searchbar med={med}/>
                    <div
                        className="w-full bg-themeBackround pr-8 flex flex-col gap-6 items-center justify-center flex-1">





                        <p className={"text-2xl"}>Connections</p>

                        {profiles.slice(0, 3).map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}

                    </div>


                </div>

            </div>
            </div>

        </>
    )
}