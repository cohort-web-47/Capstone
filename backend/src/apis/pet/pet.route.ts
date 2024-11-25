import { Router } from 'express'
import { getPetByPetIdController, getPetByPetProfileIdController, petController, getAllPetsController } from "./pet.controller"


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(petController)
router.route('/:petId').get(getPetByPetIdController)
router.route('/petProfileId/:petProfileId').get(getPetByPetProfileIdController)
router.route('/').get(getAllPetsController)


export const petRoute = { basePath, router }