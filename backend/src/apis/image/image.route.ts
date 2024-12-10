
import { Router } from 'express'
import {imageUploadController, imageUploader} from "./image.controller";


// declare a basePath for this router
const basePath = '/apis/image'

// instantiate a new router object
const router = Router()

router.route('/')
    .post(imageUploader, imageUploadController)

// export the router with the basePath and router object
export const imageRoute = { basePath, router }