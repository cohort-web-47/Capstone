import { Router } from 'express'
import {postCommentController} from "./comment.controller";

const basePath = '/apis/comment';

const router = Router();

router.route('/').post(postCommentController)

export const commentRoute = {basePath, router}


