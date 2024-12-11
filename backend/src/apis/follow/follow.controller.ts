import {Request, Response} from 'express';
import {
    deleteFollow,
    Follow,
    insertFollow,
    selectFollowByFollowId,
    selectFollowsByFolloweePetId,
    selectFollowsByFollowerPetId,
    selectPostsByFolloweePetId
} from "./follow.model";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {FollowSchema} from "./follow.validator";
import {PublicProfile} from "../profile/profile.model";
import {selectPetByPetId} from "../pet/pet.model";
import {z} from "zod";
import {LikeSchema} from "../like/like.validator";
import {deleteLike, insertLike, Like, selectLikeByLikeId} from "../like/like.model";
import {selectPostsBySaveProfileId} from "../save/save.model";
import {SaveSchema} from "../save/save.validator";
import {createZodErrorMessages} from "../../utils/zod.utils";


export async function postFollowController(request: Request, response: Response): Promise<Response> {
    try {
        const validationResult = FollowSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {followerPetId, followeePetId} = validationResult.data

        const profile: PublicProfile = request.session.profile as PublicProfile;

        let pet = await selectPetByPetId(followerPetId)

        if (pet?.petProfileId !== profile.profileId) {
            return response.json({status: 401, message: 'You must own the pet to follow a pet.', data: null})
        }
        const follow: Follow = {
            followerPetId,
            followeePetId
        }

        const result = await insertFollow(follow)
        return response.json({status: 200, message: null, data: result})
    } catch (error) {
        return response.json({status: 500, message: 'Posting the follow failed. Please try again.', data: null})
    }
}

export async function getFollowsByFollowerPetIdController(request: Request, response: Response): Promise<Response> {
    try {

        // validate the followerPetId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid followerPetId").safeParse(request.params.followerPetId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the follow pet id from the request parameters
        const followerPetId = validationResult.data

        // select the follows by follower pet id
        const data = await selectFollowsByFollowerPetId(followerPetId)

        // return the status and the follows associated with the profile
        return response.json({status: 200, message: null, data})

        // if an error occurs, return the error to the user
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getFollowsByFolloweePetIdController(request: Request, response: Response): Promise<Response> {
    try {

        // validate the followeePetId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid followeePetId").safeParse(request.params.followeePetId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the follow pet id from the request parameters
        const followeePetId = validationResult.data

        // select the follows by followee pet id
        const data = await selectFollowsByFolloweePetId(followeePetId)

        // return the status and the follows associated with the profile
        return response.json({status: 200, message: null, data})

        // if an error occurs, return the error to the user
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function deleteFollowController (request: Request, response: Response): Promise<Response <Status>>
    {
    try {
        const validationResult= FollowSchema.safeParse(request.body)
        if (!validationResult.success) {

            return zodErrorResponse(response, validationResult.error)
            }
        const {followerPetId, followeePetId} = validationResult.data
        const profile = request.session.profile as PublicProfile
        let pet = await selectPetByPetId(followerPetId)
        const followerProfileId = profile.profileId as string
        if (pet?.petProfileId !== followerProfileId) {
            return response.json({status: 401, message: "You must own the pet to delete the follow."})
        }

        const follow: Follow = {
            followerPetId,
            followeePetId
        }

        const status: Status = {
            status: 200,
            message: "",
            data: null
        }

        status.message = await deleteFollow(follow)
        // return the status to the user
        return response.json(status)

    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}

export async function toggleFollowController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = FollowSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the follow thread id from the validation result
        const {followerPetId, followeePetId} = validationResult.data

        const profile = request.session.profile as PublicProfile
        let pet = await selectPetByPetId(followerPetId)

        const followerProfileId = profile.profileId as string
        if (pet?.petProfileId !== followerProfileId) {
            return response.json({status: 401, message: 'You must own the pet to delete a follow.'})
        }

        // create a follow object
        const follow: Follow = {
            followerPetId,
            followeePetId,
                    }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // select the follow by follow id to determine if the follow should be inserted or deleted
        const selectedFollow: Follow | null = await selectFollowByFollowId(follow)

        // if the follow is null, insert the follow into the follow table
        if (selectedFollow === null) {
            status.message = await insertFollow(follow)
            // if the follow is not null, delete the follow from the follow table
        } else {
            status.message = await deleteFollow(follow)
        }

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))

    }
}
export async function getPostsByFolloweePetIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(createZodErrorMessages('petId')).uuid('please provide a valid petId').safeParse(request.params.petId)

        console.log(validationResult);
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const petId= validationResult.data
        const data = await selectPostsByFolloweePetId(petId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'followeePetId not found',
            data: []
        })
    }
}