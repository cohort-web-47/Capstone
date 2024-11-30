import {Request, Response} from 'express';
import {
    Follow,
    insertFollow
} from "./follow.model";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {FollowSchema} from "./follow.validator";
import {z} from "zod";
import {PublicProfile} from "../profile/profile.model";
import {selectPetByPetId} from "../pet/pet.model";


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
            followeePetId,
        }

        const result = await insertFollow(follow)
        return response.json({status: 200, message: null, data: result})
    } catch (error) {
        return response.json({status: 500, message: 'Posting the follow failed. Please try again.', data: null})
    }
}