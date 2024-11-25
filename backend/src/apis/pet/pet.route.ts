import { Router } from 'express'
import {
    getPetByPetIdController,
    getPetByPetProfileIdController,
    petController,
    getAllPetsController,
    getPetByPetBreedController,
    getPetByPetSizeController,
    getPetByPetTypeController,
    getPetByPetNameController,
    getPetByPetPersonalityController
} from "./pet.controller"


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(petController)
router.route('/:petId').get(getPetByPetIdController)
router.route('/petProfileId/:petProfileId').get(getPetByPetProfileIdController)
router.route('/').get(getAllPetsController)
router.route('/petBreed/:petBreed').get(getPetByPetBreedController)
router.route('/petSize/:petSize').get(getPetByPetSizeController)
router.route('/petType/:petType').get(getPetByPetTypeController)
router.route('/petName/:petName').get(getPetByPetNameController)
router.route('/petPersonality/:petPersonality').get(getPetByPetPersonalityController)


export const petRoute = { basePath, router }