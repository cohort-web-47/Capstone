"use server"
import {Like, LikeSchema} from "@/utils/models/like/like.model";
import {setHeaders} from "@/utils/set-headers.utils";
import {Status} from "@/utils/interfaces/Status";


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
