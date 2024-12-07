import ProfileTab from "@/components/ProfileTab";
import {PostCard} from "@/components/PostCard";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {FiHome} from "react-icons/fi";
import {IoMdSearch} from "react-icons/io";
import {CiBookmark} from "react-icons/ci";
import Link from 'next/link';
import {LeftSideBar} from "@/components/LeftSideBar";
import React from "react";
import {Footer} from "@/components/Footer";


export default function () {


    const posts = [
        {
            postId: "1",
            postImageUrl: "https://picsum.photos/400", postCaption: "I love cat", postPetId: "1",
            postDatetime: new Date()
        },
        {
            postId: "2",
            postImageUrl: "https://picsum.photos/400", postCaption: "I love dog", postPetId: "1",
            postDatetime: new Date()
        },
        {
            postId: "3",
            postImageUrl: "https://picsum.photos/400", postCaption: "I love cow", postPetId: "1",
            postDatetime: new Date()
        },
        {
            postId: "4",
            postImageUrl: "https://picsum.photos/400", postCaption: "I love swine", postPetId: "1",
            postDatetime: new Date()
        },
        {
            postId: "5", postImageUrl: "https://picsum.photos/400", postCaption: "I love goats", postPetId: "1",
            postDatetime: new Date()
        },

    ]
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


    return (
        <>
            {/*    LEFT SIDE of the screen when in desktop view. This div is hidden when screen size small.  Display: flex when Md or larger*/}

            <LeftSideBar />

            {/*MOBILE VIEW. This div is hidden when screen size is Md or larger. Display: flex when Sm*/}

            <div id="mobile-view" className="h-full w-screen bg-themeBackground flex flex-col py-20 md:hidden">

                <div className="container mx-auto flex flex-col items-center pr-8">
                    {/*{posts.map(post => <PostCard post={post} pet={pets[0]} key={post.postId}/>)}*/}
                </div>
                <div className=" bg-themeBackground my-6 flex flex-col gap-6 items-center ">

                    <p className={"text-4xl font-bold"}>Following</p>

                    {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}


                </div>
            </div>

            {/*Following section portion of the screen when in desktop view. Hidden when screen size is Sm. Display: flex when Md or larger*/}

            <div
                className="md:flex min-h-dvh md:bg-themeBackground md:border-2 md:border-white md:w-2/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">
                <div className="w-full bg-themeBackround my-6  flex flex-col gap-6 items-center justify-center">

                    <p className={"text-4xl"}>Following</p>
                    {profiles.map(profile => <ProfileTab profile={profile} key={profile.profileId}/>)}

                </div>

            </div>
<Footer />
        </>
    )
}