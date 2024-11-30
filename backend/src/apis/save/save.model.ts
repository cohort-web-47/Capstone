import {SaveSchema} from "./save.validator";
import {z} from "zod";
import {sql} from "../../utils/database.utils";
import {PostSchema} from "../post/post.validator";
import { Post } from "../post/post.model";

export type Save = z.infer<typeof SaveSchema>

export async function insertSave(save: Save): Promise<string> {
    const {saveProfileId, savePostId, saveDatetime} = save
    await sql`INSERT INTO save (save_profile_id, save_post_id, save_datetime) VALUES (${saveProfileId}, ${savePostId}, now())`
    return 'Post successfully saved.'
}


// export async function selectPostsBySaveProfileId(savePostId: string): Promise<Post[]> {
//     const rowList  = <Post[]>await sql`SELECT (post_id, post_pet_id, post_caption, post_image_url, post_datetime) FROM post WHERE post_id = ${savePostId}`
//
//     return PostSchema.array().parse(rowList)
// }




