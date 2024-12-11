"use server"
import {Like, LikeSchema} from "@/utils/models/like/like.model";
import {setHeaders} from "@/utils/set-headers.utils";
import {Status} from "@/utils/interfaces/Status";
import {PetSchema} from "@/utils/models/pet/pet.model";


export async function fetchPostLike( like: Like): Promise<Status> {

    const response = await fetch(`${process.env.REST_API_URL}/apis/like/toggle`, {
        method: "POST",
        headers: await setHeaders(),
        body: JSON.stringify(like)

    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')

        }
        return response.json()
    })
    return response
}

export async function getLikesByPostId(postId: string): Promise<Like[]> {

    const headers = await setHeaders()
    const {data} = await fetch(`${process.env.REST_API_URL}/apis/like/likePostId/${postId}`, {
        method: "GET",
        headers
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')

        }
        return response.json()
    }).catch((error) => {
        console.error(error)
        return[]
    })
    return LikeSchema.array().parse(data)
}