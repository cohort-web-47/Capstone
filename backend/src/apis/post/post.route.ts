import { Router } from 'express';
import {
    createPostController, getAllPosts, getPostByPetIdController

} from "./post.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";

const basePath = '/apis/post';

const router = Router()

router.route('/').post(isLoggedInController,createPostController)
router.route('/').get(getAllPosts)
router.route('/petId/:petId').get(getPostByPetIdController)



export const postRoute = {basePath, router}