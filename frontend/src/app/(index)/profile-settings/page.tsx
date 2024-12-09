

import ProfileTab from "@/components/ProfileTab";
import {PostCard} from "@/components/post-card/PostCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";


import Searchbar from "@/components/Searchbar";
import {Footer} from "@/components/Footer";
import {ProfileDropdown} from "@/app/profile-dropdown/ProfileDropdown";
import {Nav} from "@/components/Nav";
import React from "react";
import {LeftSideBar} from "@/components/LeftSideBar";




export default function SearchPage() {

    const posts = [
        {postId: "1", postImageUrl: "https://picsum.photos/400", postCaption: "I love cat", postPetId: "1"},
        {postId: "2", postImageUrl: "https://picsum.photos/400", postCaption: "I love dog", postPetId: "1"},
        {postId: "3", postImageUrl: "https://picsum.photos/400", postCaption: "I love cow", postPetId: "1"},
        {postId: "4", postImageUrl: "https://picsum.photos/400", postCaption: "I love swine", postPetId: "1"},
        {postId: "5", postImageUrl: "https://picsum.photos/400", postCaption: "I love goats", postPetId: "1"},

    ]
    const pets=[
        {petProfileId:"1", petId:"1", petImageUrl:"https://picsum.photos/200", petName:"Fido"}
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


            <div className="container bg-themeBackround flex-col md:flex-row ">



                {/*    LEFT SIDE of the screen when in desktop view. This div is hidden when screen size small.  Display: flex when Md or larger*/}

                <LeftSideBar/>

                {/*MOBILE VIEW. This div is hidden when screen size is Md or larger. Display: flex when Sm*/}

                <div id="mobile-view" className="h-fit w-screen bg-themeBackground flex flex-col  pb-20 md:hidden">
                    <Nav />
                    <h1 className={"text-2xl self-center font-black pt-4"}>Profile Settings</h1>

                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">
                        Edit Profile
                    </button>
                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Change
                        Password
                    </button>

                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Bookmarks
                    </button>

                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Privacy
                        Settings
                    </button>

                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Notifications
                    </button>
                    <button
                        className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Photo Library
                    </button>
                    <div className={"flex gap-20 justify-center"}>
                        <button
                            className="bg-blue-500 text-white  border-2 border-black w-28 rounded-lg p-2 mt-12 self-center hover:bg-blue-600">Followers
                        </button>
                        <button
                            className="bg-blue-500 text-white  border-2 border-black w-28 rounded-lg p-2 mt-12 self-center hover:bg-blue-600">Following
                        </button>
                    </div>

                </div>

                {/*CENTER portion of the screen when in desktop view. Hidden when screen size is Sm. Display: flex when Md or larger*/}

                <div
                    className="middle hidden md:flex  md:bg-themeBackground md:border-2 md:border-white md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">

                    <Nav />


                        <h1 className={"text-2xl self-center font-black"}>Profile Settings</h1>

                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">
                            Edit Profile
                        </button>
                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Change
                            Password
                        </button>

                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Bookmarks
                        </button>

                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Privacy
                            Settings
                        </button>

                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Notifications
                        </button>
                        <button
                            className="bg-themeBackground text-black w-52 rounded-2xl p-2 mt-10 self-center hover:bg-themeProfile">Photo
                            Library
                        </button>
                        <div className={"flex gap-20 justify-center"}>
                            <button
                                className="bg-blue-500 text-white  border-2 border-black w-28 rounded-lg p-2 mt-12 self-center hover:bg-blue-600">Followers
                            </button>
                            <button
                                className="bg-blue-500 text-white  border-2 border-black w-28 rounded-lg p-2 mt-12 self-center hover:bg-blue-600">Following
                            </button>
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
