'use server'
import {Post, PostSchema} from "@/utils/models/post/post.model";
import {setHeaders} from "@/utils/set-headers.utils";
import {SignUp} from "@/utils/models/sign-up/sign-up.model";
import {Status} from "@/utils/interfaces/Status";


export async function fetchAllPosts(): Promise<Post[]> {
const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/post`,{ //why is data in curly braces? destructure or obj?
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok')
    } else {
        return response.json()
    }

})
return PostSchema.array().parse(data)
}

export async function fetchSavedPosts(profileId: string): Promise<Post[]> {
    const headers = await setHeaders()
    const {data} = await fetch(`${process.env.REST_API_URL}/apis/save/saveProfileId/${profileId}`, {
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
return PostSchema.array().parse(data)
}

export async function fetchFolloweePosts(followeePetId: string): Promise<Post[]> {
    const headers = await setHeaders()
    const {data} = await fetch(`${process.env.REST_API_URL}/apis/follow/post/${followeePetId}`, {
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
    return PostSchema.array().parse(data)
}

export async function preformCreatePost(post: Post): Promise<Status> {
    const headers = await setHeaders()
    return  fetch(`${process.env.REST_API_URL}/apis/post`, {
        method: "post",
        headers,
        body: JSON.stringify(post)
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    }).catch((error) => {
        console.error(error)
        throw error
    })

}