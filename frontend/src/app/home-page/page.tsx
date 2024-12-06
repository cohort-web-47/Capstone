import ProfileTab from "@/components/ProfileTab";
import {PostCard} from "@/components/PostCard";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {FiHome} from "react-icons/fi";
import {IoMdSearch} from "react-icons/io";
import {FaRegBookmark} from "react-icons/fa6";
import {CiBookmark} from "react-icons/ci";
import Searchbar from "@/components/Searchbar";
import {Nav} from "@/components/Nav";
import {fetchAllPosts} from "@/utils/models/post/post.action";


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


                <div
                    className="left hidden  md:flex md:flex-col bg-themeBackground md:w-1/3 md:h-full md:fixed md:top-0 md:left-0 md:pl-6 md:pt-8 md:pb-12">
                    <div className="rounded-full border-black border-2 bg-gray-200 h-16 w-16 cursor-pointer">LOGO</div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><FiHome
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl font-bold ">Home</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><IoMdSearch
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl">Search</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><GoPeople
                        className={"min-h-10 min-w-10"}/><p
                        className="hidden lg:block text-2xl cursor-pointer">Connections</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer">
                        <IoMdNotificationsOutline
                            className={"min-h-10 min-w-10"}/><p className="hidden lg:block text-2xl">Notifications</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10 cursor-pointer"><CiBookmark
                        className={"min-h-10 min-w-10"}/><p className="hidden lg:block text-2xl">Bookmarks</p></div>
                    <div className="flex flex-col pr-40">
                        <button
                            className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Post
                        </button>
                        <button
                            className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Sign
                            out
                        </button>
                    </div>
                </div>
                <div id="mobile-view" className="h-fit w-screen bg-themeBackground flex flex-col py-20 md:hidden">
                    <Nav/>


                    <div className="container mx-auto flex flex-col items-center pr-8">
                        {posts.map(post => <PostCard post={post} key={post.postId}/>)}
                    </div>

                </div>
                <div
                    className="middle hidden md:flex border-white border-2 md:bg-themeBackground md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">
                    <Nav/>
                    <div id={"label"} className={"bg-header w-full py-4 self-center mb-10"}>
                        {/*<p className={"text-3xl text-center"}>Popular Post</p>*/}
                    </div>
                    <div className="container w-full pr-8">
                        {posts.map(post => <PostCard post={post}  key={post.postId}/>)}
                    </div>

                </div>
                <div
                    className="right-side hidden md:flex md:w-1/3 md:h-svh md:bg-themeBackground md:flex-col md:items-center md:fixed md:top-0 md:right-0">
                    <Searchbar med={med}/>
                    <div
                        className="w-full bg-themeBackround pr-8 flex flex-col gap-6 items-center justify-center flex-1">
                        <div className="w-3/4 h-auto">
                        {/*<PostCard post={posts[2]} />*/}
                        </div>


                        <p className={"text-2xl"}>Connections</p>

                        {profiles.slice(0, 3).map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}

                    </div>


                </div>

            </div>

        </>
    )
}