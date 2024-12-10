import { Router } from 'express';
import {
    createPostController,
    createPostWithAiController,
    deletePostByPostIdController,
    getAllPosts,
    getPostByPetIdController,
    getPostByPostIdController

} from "./post.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";

const basePath = '/apis/post';

const router = Router()

router.route('/').post(isLoggedInController,createPostController)
router.route('/').get(getAllPosts)
router.route('/petId/:petId').get(getPostByPetIdController)
router.route('/:postId').get(getPostByPostIdController).delete(isLoggedInController, deletePostByPostIdController)
router.route('/aiPost').post(isLoggedInController, createPostWithAiController)



export const postRoute = {basePath, router}