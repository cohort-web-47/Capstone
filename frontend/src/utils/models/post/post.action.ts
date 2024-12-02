'use server'
import {Post, PostSchema} from "@/utils/models/post/post.model";


export async function fetchAllPosts(): Promise<Post[]> {
const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/post`,{
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
