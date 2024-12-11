import {v2 as cloudinaryUtils, UploadStream, UploadApiOptions} from 'cloudinary';
import { Readable } from "stream";
import {Express} from "express";


export const uploadToCloudinary = async (file: Express.Multer.File): Promise<string> => {
    cloudinaryUtils.config({
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUDINARY_NAME
    })

    return await new Promise((resolve, reject): void => {
        const cloudinaryUploadStream: UploadStream = cloudinaryUtils.uploader.upload_stream(
            (error: Error, cloudinaryResult: UploadApiOptions|undefined) => {
                if (cloudinaryResult !== undefined) {
                    resolve(cloudinaryResult.secure_url)
                } else {
                    reject(error)
                }
            }
        )

        const readable: Readable = new Readable()
        readable._read = () => {}
        readable.push(file.buffer)
        readable.push(null)
        readable.pipe(cloudinaryUploadStream)
    })
}