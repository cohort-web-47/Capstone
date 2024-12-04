import { Router } from 'express'
import {
    getCommentByCommentIdController,
    getCommentsByCommentPetIdController,
    getCommentsByCommentPostIdController,
    postCommentController
} from "./comment.controller";


const basePath = '/apis/comment';

const router = Router();

router.route('/').post(postCommentController)
router.route('/:commentId').get(getCommentByCommentIdController)
router.route('/commentPostId/:commentPostId').get(getCommentsByCommentPostIdController)
router.route('/commentPetId/:commentPetId').get(getCommentsByCommentPetIdController)

export const commentRoute = {basePath, router}


