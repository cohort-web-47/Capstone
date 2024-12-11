import ProfileTab from "@/components/ProfileTab";
import {PostCard} from "@/components/post-card/PostCard";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {FiHome} from "react-icons/fi";
import {IoMdSearch} from "react-icons/io";
import {CiBookmark} from "react-icons/ci";


import Searchbar from "@/components/Searchbar";
import {Footer} from "@/components/Footer";
import {fetchAllPosts} from "@/utils/models/post/post.action";
import {LeftSideBar} from "@/components/LeftSideBar";


export default async function SearchPage() {

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
        {petProfileId: "1", petId: "1", petImageUrl: "https://picsum.photos/200", petName: "Fido"}
    ]
    const profiles = [
        {profileId: "1", imageUrl: "https://picsum.photos/400", profileName: "Mittens"},
        {profileId: "2", imageUrl: "https://picsum.photos/200", profileName: "Ruffles"},
        {profileId: "3", imageUrl: "https://picsum.photos/300", profileName: "Clancy"},
        {profileId: "4", imageUrl: "https://picsum.photos/500", profileName: "Wiley"},
        {profileId: "5", imageUrl: "https://picsum.photos/100", profileName: "Lemmy"},

    ]
let med = {width: 'w-1/3', position: 'left-1/3'};

    return (
        <>
            <Searchbar med={med}/>

            <div className="container bg-themeBackround flex-col md:flex-row ">

                {/*    LEFT SIDE of the screen when in desktop view. This div is hidden when screen size small.  Display: flex when Md or larger*/}


               <LeftSideBar/>

                {/*MOBILE VIEW. This div is hidden when screen size is Md or larger. Display: flex when Sm*/}

                <div id="mobile-view" className="h-fit w-screen bg-themeBackground flex flex-col py-20 md:hidden">

                    <div className="container mx-auto flex flex-col items-center pr-8">
                        {posts.map(post => <PostCard post={post}  key={post.postId}/>)}
                    </div>
                    <div className=" bg-themeBackground my-6 flex flex-col gap-6 items-center ">

                        <p className={"text-2xl"}>Connections</p>

                        {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}


                    </div>
                </div>

                {/*CENTER portion of the screen when in desktop view. Hidden when screen size is Sm. Display: flex when Md or larger*/}

                <div
                    className="middle hidden md:flex  md:bg-themeBackground md:border-2 md:border-white md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">

                    <div id={"label"} className={"bg-header w-full py-4 self-center mb-10"}>
                        <p className={"text-3xl text-center"}>Popular Post</p>
                    </div>
                    <div className="container w-full pr-8">
                        {posts.map(post => <PostCard post={post}  key={post.postId}/>)}
                    </div>

                </div>

                {/*RIGHT portion of the screen when in desktop view, Hidden when screen size is Sm. Display: flex when Md or larger*/}

                <div
                    className="right-side hidden md:flex md:w-1/3 md:h-full md:bg-themeBackground md:flex-col md:items-center md:fixed md:top-0 md:right-0">
                    <div className="w-full bg-themeBackround my-6  flex flex-col gap-6 items-center justify-center">

                        <p className={"text-2xl"}>Connections</p>
                        {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}

                    </div>


                </div>

            </div>

        </>
    )
}