'use server'


import {setHeaders} from "@/utils/set-headers.utils";
import {CommentSchema, Comment} from "@/utils/models/comment/comment.model";

export async function fetchCommentsByPostId(postId: string): Promise<Comment[]> {

    const response = await fetch(`${process.env.REST_API_URL}/apis/comment/commentPostId/${postId}`,{
        headers: await setHeaders(),
        method:'GET'
    }).then(response =>

    {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
})
        .catch((error) => {
            console.error(error)
            return[]})
    return (CommentSchema.array().parse(response.data))

}