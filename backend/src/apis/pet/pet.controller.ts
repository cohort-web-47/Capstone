import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status'
import {PetSchema} from "./pet.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profile/profile.model";
import {PrivateProfile} from "../profile/profile.model";
import {
    insertPet,
    Pet,
    getPetByPetId,
    getPetByPetProfileId,
    selectAllPets,
    selectPetsByPetBreed,
    selectPetsByPetSize, selectPetsByPetType, selectPetsByPetName
} from "./pet.model";
import {z} from "zod";

export async function petController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = PetSchema.safeParse(request.body);
        console.log(validationResult);

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

export async function getPetByPetIdController(request: Request, response: Response): Promise<Response<Status>> {
   try {
       const validationResult = z.string().uuid({message: 'Please provide a valid Pet Id'}).safeParse(request.params.petId)

       if (!validationResult.success) {
           return zodErrorResponse(response, validationResult.error)
       }

       const petId = validationResult.data

       const data = await getPetByPetId(petId)

       return response.json({status: 200, message: null, data})

   } catch (error) {
       return response.json ({
           status: 500,
           message: '',
           data: []
       })
   }
}

export async function getPetByPetProfileIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message: 'Please provide a valid Pet Profile Id'}).safeParse(request.params.petProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petProfileId = validationResult.data

        const data = await getPetByPetProfileId(petProfileId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }


export async function getAllPetsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPets()

        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        console.error(error)
        return response.json ({
            status: 500,
            message: 'Error getting Pets. Try again',
            data: []
        })
    }
}

export async function getPetByPetBreedController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid Pet Breed'})).safeParse(request.params.petBreed)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petBreed = validationResult.data

        const data = await selectPetsByPetBreed(petBreed)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetSizeController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid Pet Breed'})).safeParse(request.params.petSize)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petSize = validationResult.data

        const data = await selectPetsByPetSize(petSize)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetTypeController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid Pet Type'})).safeParse(request.params.petType)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petType = validationResult.data

        const data = await selectPetsByPetType(petType)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid Pet Name'})).safeParse(request.params.petName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petName = validationResult.data

        const data = await selectPetsByPetName(petName)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }
















