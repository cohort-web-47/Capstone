import {Like} from "@/utils/models/like/like.model";
import {Status} from "@/utils/interfaces/Status";
import {setHeaders} from "@/utils/set-headers.utils";
import {Post} from "@/utils/models/post/post.model";

export async function fetchPostBySave( like: Like): Promise<Status> {

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

export async function fetchSavesByProfileId(profileId: string): Promise<Post[]> {}