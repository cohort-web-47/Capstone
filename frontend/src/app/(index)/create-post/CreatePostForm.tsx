'use client'

import React from "react";
import {Status} from "@/utils/interfaces/Status";
import {zodResolver} from "@hookform/resolvers/zod";
import {Post, PostSchema} from "@/utils/models/post/post.model";
import {preformCreatePost} from "@/utils/models/post/post.action";
import {useForm} from "react-hook-form";
import {Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/components/navigation/DisplayError";
import {z} from "zod";
import {Profile} from "@/utils/models/profile/profile.model";
import {useRouter} from "next/navigation";
import {InputText} from "@/app/(index)/create-post/inputtext";
import {DevTool} from "@hookform/devtools";
import {ImageUploadDropZone} from "@/components/ImageUploadDropZone";


type Props = {
    currentPetId: string;
    profile?: Profile;

}

export function CreatePostForm(props: Props) {
const router = useRouter();
    const {profile, currentPetId} = props;
    if(!profile) {
        router.push('/sign-in')
    }
    const FormValidation = PostSchema
    .pick({postCaption: true})
    .extend({
        postImageUrl: z.preprocess((val) => (val === "" ? null : val), z.any().optional())











    })
    type Form = z.infer<typeof FormValidation>;


// create a state variable to hold the status of the form
    const [status, setStatus] = React.useState<Status | null>(null)
    const [selectedImage, setSelectedImage] = React.useState<string|null>(null)


    // create a default value for the form to hold the data created in the form
    const defaultValues: Form = {
        postCaption: '',
        postImageUrl: '',
     }


    // register the form with react-hook-form
    const {register, handleSubmit, control, reset, formState: {errors}} = useForm<Post>({
        resolver: zodResolver(FormValidation),
        defaultValues,
        mode: 'onBlur'
    })


    //define the function to handle the form submission
    const onSubmit = async (data: Form) => {
        try {
const post = {...data, postId: null, postPetId: currentPetId, postProfileId: profile?.profileId, postDatetime: null}
            // @ts-ignore
            const response = await  preformCreatePost(post)
            console.log(response)
            if (response.status === 200) {
                reset()
            }
            setStatus(response)
        } catch (error) {
            setStatus({status: 500, message: 'Internal Server Error try again later', data: undefined})
            console.error(error)

        }

    }

    return (
        <>

            <div>
                {/*call React hooks forms handle submit and pass it our function for form submission*/}
                <form onSubmit={handleSubmit(onSubmit)}
                      className="flex mx-auto min-h-auto gap-4 min-w-full flex-col grow">

                    <div>
                        <InputText register={register} name={'postCaption'} />
                        <DisplayError error={errors.postCaption?.message} />
                    </div>
                    <ImageUploadDropZone control={control} fieldValue={'postImageUrl'} setSelectedImage={setSelectedImage} />
                    <div className="mx-auto flex flex-row pl-4 justify-left bg-themeNavbar mt-2">

                        <button className='bg-themeNavbar rounded px-2 py-0 hover:bg-themeBackground'><img
                            src="/picture_icon.svg" alt="dog icon"
                            className="w-10"/>
                        </button>
                        <button className='bg-themeNavbar rounded px-2 py-0 hover:bg-themeBackground'><img
                            src="/dog-icon.png" alt="dog icon"
                            className="w-10 rounded border-2 border-yellow-950"/>
                        </button>
                    </div>
                    <div className="mx-auto flex flex-row justify-between p-4">
                        <button className='bg-themeNavbar rounded px-2 py-1 hover:bg-yellow-500'>Cancel</button>
                        <button className='bg-themeNavbar rounded px-4 py-1 hover:bg-yellow-500' type={"submit"}>Post</button>
                    </div>
                </form>
                <DevTool control={control}  />
            </div>

        </>
    )
}


