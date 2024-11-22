import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status'
import {PetSchema} from "./pet.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profile/profile.model";
import {PrivateProfile} from "../profile/profile.model";
import {insertPet, Pet} from "./pet.model";


export async function petController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = PetSchema.safeParse(request.body);

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {petId, petBreed, petImageUrl, petName, petType, petPersonality, petSize} =validationResult.data

        const profile: PublicProfile = request.session.profile as PublicProfile

        const petProfileId: string = profile.profileId as string

        const pet: Pet = {
            petId: null,
            petProfileId,
            petBreed,
            petType,
            petImageUrl,
            petName,
            petPersonality,
            petSize
        }

        const result = await insertPet(pet)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating Pet. Try again.', data: null})
    }
}

// export async function getAllPet(request: Request, response: Response): Promise<Response | undefined> {}



















