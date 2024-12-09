'use client'
// import {IoIosSave} from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { IoSaveSharp } from "react-icons/io5";

import {Pet} from "@/utils/models/pet/pet.model";
import {Like} from "@/utils/models/like/like.model";
import {Profile} from "@/utils/models/profile/profile.model";
import {Post} from "@/utils/models/post/post.model";
import {useState} from "react";
import {fetchSavedPosts} from "@/utils/models/post/post.action";
import {fetchPostBySave} from "@/utils/models/save/save.action";


type Props = {
    savePostId: string,
    saveProfileId: string,
    savedPostsDictionary: {[key:string]: Post[]},

}


export function SaveButton(props: Props) {
const {savePostId, saveProfileId, savedPostsDictionary} = props;
    const save = {savePostId: savePostId, saveProfileId: saveProfileId, saveDatetime: null}
const [isSaved, setIsSaved] = useState<boolean>(savedPostsDictionary[savePostId] !== undefined);

    const handleClick =   async () => {
const status = await fetchPostBySave(save);

if(status.message === 'Post successfully saved.') {
        setIsSaved(true)
    } else if (status.message === 'Save successfully deleted') {
       setIsSaved(false)
}
    }
    return (
        <>

            {isSaved ?
        <IoSaveOutline
            onClick={handleClick} /> :
                <IoSaveSharp
                onClick={handleClick}/>
            }

        </>
    )
}