'use server'
import {Like} from "@/utils/models/like/like.model";
import {Status} from "@/utils/interfaces/Status";
import {setHeaders} from "@/utils/set-headers.utils";
import {Follow} from "@/utils/models/follow/follow.model";

export async function fetchPostFollow( follow: Follow): Promise<Status> {

    const response = await fetch(`${process.env.REST_API_URL}/apis/follow/toggle`, {
        method: "POST",
        headers: await setHeaders(),
        body: JSON.stringify(follow)

    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')

        }
        return response.json()
    })
    return response
}
