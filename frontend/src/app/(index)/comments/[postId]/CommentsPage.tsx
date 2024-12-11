'use server'

import {FiHome} from "react-icons/fi";

import {IoMdNotificationsOutline, IoMdSearch} from "react-icons/io";
import {GoPeople} from "react-icons/go";
import {CiBookmark} from "react-icons/ci";
import {PostCard} from "@/components/post-card/PostCard";
import ProfileTab from "@/components/ProfileTab";
import {LeftSideBar} from "@/components/LeftSideBar";
import {Post} from "@/utils/models/post/post.model";
import {Comment} from "@/utils/models/comment/comment.model";
import {CommentCard} from "@/app/(index)/comments/[postId]/CommentCard";
import {ConnectionsPanel} from "@/components/ConnectionsPanel";
type Props = {
    comments: Comment[]
    post: Post
}
export default async function CommentsPage(props : Props) {

    const {post, comments} = props;
    const posts = [
        {postId: "1", postImageUrl: "https://picsum.photos/400", postCaption: "I love cat", postPetId: "1"},
        // {postId: "2", postImageUrl: "https://picsum.photos/400", postCaption: "I love dog", postPetId: "1"},
        // {postId: "3", postImageUrl: "https://picsum.photos/400", postCaption: "I love cow", postPetId: "1"},
        // {postId: "4", postImageUrl: "https://picsum.photos/400", postCaption: "I love swine", postPetId: "1"},
        // {postId: "5", postImageUrl: "https://picsum.photos/400", postCaption: "I love goats", postPetId: "1"},

    ]
    const CommentPagePets = [
        {petId: "1", petImageUrl: "https://picsum.photos/200", petName: "Fido", petProfileId: "4"}
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

            <div className="container bg-themeBackround flex-col md:flex-row ">


                <LeftSideBar/>
                <div id="mobile-view" className="h-fit w-screen bg-themeBackground flex flex-col py-20 md:hidden">


                    <div className="container mx-auto flex flex-col items-center pr-8">
                        {/*{posts.map(post => <PostCard post={post} pet={CommentPagePets[0]} key={post.postId}/>)}*/}
                    </div>
                    <div className=" bg-themeBackground my-6 flex flex-col gap-6 items-center ">

                        <p className={"text-2xl"}>Comments</p>
                        <PostCard post={post} />
                        {comments.map(comment => <CommentCard comment={comment} key={comment.commentId}/>)}
                    </div>
                </div>
                <div
                    className="middle hidden md:flex  md:bg-themeBackground md:border-2 md:border-white md:w-1/3 md:flex-col md:absolute md:overflow-auto md:top-0 md:left-1/3 md:py-20">

                    <div id={"label"} className={"bg-header w-full py-4 self-center mb-10"}>
                        <p className={"text-3xl text-center"}>Comments</p>
                    </div>
                    <div className={"container flex mx-auto  border-2 border-black w-full py-4 self-center mb-10 pl-4"}>
                  
                        <div className="flex-col pl-6">

                            <div className="container w-full pr-8">
                                <PostCard post={post}/>
                                {comments.map(comment => <CommentCard comment={comment} key={comment.commentId}/>)}

                            </div>
                        </div>
                    </div>

                </div>
                <ConnectionsPanel />


            </div>

        </>

    )
}
