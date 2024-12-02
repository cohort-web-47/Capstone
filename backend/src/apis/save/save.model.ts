import {SaveSchema} from "./save.validator";
import {z} from "zod";
import {sql} from "../../utils/database.utils";
import {PostSchema} from "../post/post.validator";
import {Post} from "../post/post.model";

export type Save = z.infer<typeof SaveSchema>

export async function insertSave(save: Save): Promise<string> {
    const {saveProfileId, savePostId, saveDatetime} = save

    await sql`INSERT INTO save (save_profile_id, save_post_id, save_datetime)
              VALUES (${saveProfileId}, ${savePostId}, now())`
    return 'Post successfully saved.'

}

export async function deleteSave (save : Save): Promise<string> {
    const {saveProfileId, savePostId, saveDatetime} = save
    await sql`DELETE FROM save
           WHERE save_profile_id = ${saveProfileId}
             AND save_post_id = ${savePostId}`
        return 'Save successfully deleted'

}

export async function selectSaveByPrimaryKey (save: Save): Promise<Save | null> {
    const {saveProfileId, savePostId, saveDatetime} = save
    const rows = await sql`SELECT save_profile_id, save_post_id, save_datetime 
    
                 FROM save
                 WHERE save_profile_id = ${saveProfileId}
                 AND save_post_id = ${savePostId}`

        const result = SaveSchema.array().max (1).parse(rows)

        return result.length === 0 ? null : result[0]



}

export async function selectPostsBySaveProfileId(saveProfileId: string): Promise<Post[]> {


    const rowList = <Post[]>await sql`SELECT post_id, post_pet_id, post_caption, post_image_url, post_datetime 
                                    FROM post
                                    INNER JOIN save
                                    ON post.post_id = save.save_post_id
                                    WHERE save_profile_id = ${saveProfileId}`
        return PostSchema.array().parse(rowList)

}


// export async function selectPostsBySaveProfileId(savePostId: string): Promise<PostModel[]> {
//     const rowList  = <PostModel[]>await sql`SELECT (post_id, post_pet_id, post_caption, post_image_url, post_datetime) FROM post WHERE post_id = ${savePostId}`
//
//     return PostSchema.array().parse(rowList)
// }




