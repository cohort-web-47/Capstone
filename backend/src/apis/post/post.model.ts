import {z} from 'zod'
import {PostSchema} from "./post.validator";
import {sql} from "../../utils/database.utils";

export type Post = z.infer<typeof PostSchema>;

export async function insertPost(post: Post): Promise<string> {
    const {postId, postPetId, postCaption, postImageUrl} = post

    await sql `INSERT INTO post (post_id, post_pet_id, post_caption, post_image_url, post_datetime) 
        VALUES (gen_random_uuid(), ${postPetId}, ${postCaption}, ${postImageUrl}, now())`

    return 'Post Successfully Created'
}