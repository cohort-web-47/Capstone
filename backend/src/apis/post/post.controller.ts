import {Request, Response} from 'express';
import {
    insertPost,
    Post, selectAllPosts


} from "./post.model"
import {Status} from '../../utils/interfaces/Status'
import {PostSchema} from "./post.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profile/profile.model";
import {Pet, selectPetByPetId} from "../pet/pet.model";

export async function createPostController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = PostSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {postCaption, postImageUrl, postPetId} = validationResult.data

        // To Do: Get Pet by Pet ID, make sure pet profileId matches profileId in Session

        const profile: PublicProfile = request.session.profile as PublicProfile

        const profileId: string = profile?.profileId

        const pet = await selectPetByPetId(postPetId)

        const petProfileId = pet?.petProfileId

        if (petProfileId !== profileId){
            return response.json({status: 401, message: 'This is not your Pet!', data: null})

        }

        const post: Post = {
            postId: null,
            postPetId,
            postCaption,
            postImageUrl,
            postDatetime: null,
        }

        const result = await insertPost(post)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating Post. Try again', data: null})
    }
}

export async function getAllPosts (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPosts()

        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        console.error(error)
        return response.json ({
            status: 500,
            message: 'Error getting all posts.',
            data: []
        })
    }
}