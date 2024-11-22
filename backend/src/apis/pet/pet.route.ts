import { Router } from 'express'
import { petController } from './pet.controller'


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(petController)


export const petRoute = { basePath, router }