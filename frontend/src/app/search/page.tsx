
import ProfileTab from "@/components/ProfileTab";
import {Post} from "@/components/Post";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import {DropdownButton} from "@/components/Dropdown";



export default function SearchPage() {

    const posts = [
        {postId: "1", postImageUrl: "https://picsum.photos/200", postCaption: "I love cat", postPetId: "1"},
        {postId: "2", postImageUrl: "https://picsum.photos/200", postCaption: "I love dog", postPetId: "1"},
        {postId: "3", postImageUrl: "https://picsum.photos/200", postCaption: "I love cow", postPetId: "1"},
        {postId: "4", postImageUrl: "https://picsum.photos/200", postCaption: "I love swine", postPetId: "1"},
        {postId: "5", postImageUrl: "https://picsum.photos/200", postCaption: "I love goats", postPetId: "1"},

    ]
    const pets=[
        {petId:"1", petImageUrl:"https://picsum.photos/200",petName:"Fido"}
    ]


    return (
        <>
            <div id="header"
                 className="w-screen h-20  bg-gray-200 flex items-center justify-center gap-10 fixed top-0 z-10 md:w-1/3 md:left-1/3">
                <div className="border-black  border-2 bg-gray-600 rounded-full h-10 w-10 ">PP</div>
                <input type="text" placeholder="Search..."
                       className="w-2/3 rounded-2xl self-center my-10 bg-search "/>
            </div>

            <div className=" container bg-background flex-col md:flex-row ">


            <div
                    className="left hidden  md:flex md:flex-col bg-background md:w-1/3 md:h-full md:fixed md:top-0 md:left-0 md:pl-6 md:pt-8 md:pb-12">
                    <div className="rounded-full border-black border-2 bg-gray-200 h-16 w-16">LOGO</div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10"><FiHome className={"h-10 w-10"}/><p
                        className="text-2xl font-bold">Home</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10"><IoMdSearch className={"h-10 w-10"}/><p
                        className="text-2xl">Search</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10"><GoPeople className={"h-10 w-10"}/><p
                        className="text-2xl">Connections</p>
                    </div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10"><IoMdNotificationsOutline
                        className={"h-10 w-10"}/><p className="text-2xl">Notifications</p></div>
                    <div className="left flex gap-28 items-center w-5/6 m-6 pl-10">
                        <div className={"w-10 h-10"}></div>
                        <p className="text-2xl">Bookmarks</p></div>

                    <button className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Post
                    </button>
                    <button className="bg-blue-500 text-white ml-32 border-2 border-black w-28 rounded-lg p-2 mt-12 self-center">Sign out
                    </button>
                <div className="h-24"></div>
                </div>
                <div id="mobile-view" className="h-fit w-screen bg-background flex flex-col pb-20 md:hidden">



                    <div className="container mx-auto flex flex-col items-center pr-8">
                        {posts.map(post => <Post post={post} pet={pets[0]} key={post.postId}/>)}
                    </div>
                    <div className="w-1/2 h-20 bg-profile my-6 self-center flex gap-20 items-center justify-center">

                        <p className={"text-2xl"}>Connections</p>

                    </div>

                    <ProfileTab/>
                    <ProfileTab/>
                    <ProfileTab/>
                </div>
                <div
                    className="middle hidden md:flex md:pl-20 md:bg-background md:border-2 md:border-white md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">

                    <div id={"label"} className={"bg-header w-2/3 py-4 self-center mb-10"}>
                        <p className={"text-3xl text-center"}>Popular Post</p>
                    </div>
                    <div className="container mx-auto">
                        {posts.map(post => <Post post={post} pet={pets[0]} key={post.postId}/>)}
                    </div>

                </div>
                <div
                    className="right-side hidden md:flex md:w-1/3 md:h-full md:bg-background md:flex-col md:fixed md:top-0 md:right-0">
                <div className="w-1/2 h-20 bg-profile my-6 self-center flex gap-20 items-center justify-center">

                        <p className={"text-2xl"}>Connections</p>

                    </div>

                    <ProfileTab/>
                    <ProfileTab/>
                    <ProfileTab/>
                </div>

            </div>

        </>
    )
}