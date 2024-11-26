import { Router } from 'express'
import {getCommentByCommentIdController, postCommentController} from "./comment.controller";
import {getPetByPetIdController} from "../pet/pet.controller";

const basePath = '/apis/comment';

const router = Router();

router.route('/').post(postCommentController)
router.route('/:commentId').get(getCommentByCommentIdController)

export const commentRoute = {basePath, router}


