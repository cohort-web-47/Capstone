import { Router } from 'express';
import {
    createPostController

} from "./post.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";

const basePath = '/apis/post';

const router = Router()

router.route('/').post(isLoggedInController,createPostController)

export const postRoute = {basePath, router}