'use client'

import React, {useState} from "react";
import {Status} from "@/utils/interfaces/Status";
import {zodResolver} from "@hookform/resolvers/zod";
import {Post, PostSchema} from "@/utils/models/post/post.model";
import {fetchAiCaption, postImage, preformCreatePost} from "@/utils/models/post/post.action";
import {useForm} from "react-hook-form";
import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";
import {DisplayError} from "@/components/navigation/DisplayError";
import {z} from "zod";
import {Profile} from "@/utils/models/profile/profile.model";
import {useRouter} from "next/navigation";
import {InputText} from "@/app/(index)/create-post/inputtext";
import {DevTool} from "@hookform/devtools";
import {ImageUploadDropZone} from "@/components/ImageUploadDropZone";
import {DisplayStatus} from "@/components/navigation/DisplayStatus";


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
        ,useAi: z.preprocess((value)=>value===""?false:value,z.boolean())
    })
    type Form = z.infer<typeof FormValidation>;


// create a state variable to hold the status of the form
    const [status, setStatus] = React.useState<Status | null>(null)
    const [selectedImage, setSelectedImage] = React.useState<string|null>(null)
    const [aiCaption, setAiCaption] = React.useState<Status|null>(null)
    const [openModal, setOpenModal] = useState(false);

    // create a default value for the form to hold the data created in the form
    const defaultValues: Form = {
        postCaption: '',
        postImageUrl: '',
        useAi: false
     }


    // register the form with react-hook-form
    const {register, handleSubmit, setError, control, reset, formState: {errors}} = useForm<Form>({
        resolver: zodResolver(FormValidation),
        defaultValues,
        mode: 'onBlur'
    })

const handleFinalSubmission = async (data: Form) => {
    let postImageUrl = null
    if(data.postImageUrl) {
        console.log(data.postImageUrl)
        const response = await postImage(data.postImageUrl);
        if(response.status === 200) {
            postImageUrl = response.message
        } else {
            setStatus({status: 500, message: 'Image failed to upload', data: undefined})
            return
        }
    }

    const post = {postImageUrl, postCaption: data.postCaption, postId: null, postPetId: currentPetId, postProfileId: profile?.profileId, postDatetime: null}
    // @ts-ignore
    const response = await  preformCreatePost(post)
    console.log(response)
    if (response.status === 200) {
        setOpenModal(false)
        reset()
    }
    setStatus(response)
}

    //define the function to handle the form submission
    const onSubmit = async (data: Form) => {
        try {
            if (data.useAi===false){
            await handleFinalSubmission(data)
            }else {
                const post = {postImageUrl:null, postCaption: data.postCaption, postId: null, postPetId: currentPetId,  postDatetime: null}

                // @ts-ignore
                const aiStatus = await fetchAiCaption(post)
                if (aiStatus.status === 200){
                    setAiCaption(aiStatus)
                    setOpenModal(true)
                }else {
                    setStatus({status: 400, message: 'Ai caption generation failed', data: undefined})

                }

            }
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
                        <InputText register={register} name={'postCaption'}/>
                        <DisplayError error={errors.postCaption?.message}/>
                    </div>
                    <ImageUploadDropZone control={control} fieldValue={'postImageUrl'} setError={setError}
                                         setSelectedImage={setSelectedImage}/>
                    <DisplayError error={errors.postImageUrl?.message as string}/>
                    <div className="mx-auto flex flex-row pl-4 justify-left bg-themeNavbar mt-2">

                        {selectedImage && <img src={selectedImage} alt="selected image" width={300}/>}
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox {...register('useAi')}id="accept" />
                        <Label htmlFor="accept" className="flex">
                            UseAi to generate caption.
                        </Label>
                    </div>
                    <div className="mx-auto flex flex-row justify-between p-4">
                        <button className='bg-themeNavbar rounded px-2 py-1 hover:bg-yellow-500'>Cancel</button>
                        <button className='bg-themeNavbar rounded px-4 py-1 hover:bg-yellow-500' type={"submit"}>Post
                        </button>
                    </div>
                    <DisplayStatus status={status}/>
                </form>
            </div>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Use this caption?</Modal.Header>
                <Modal.Body>

                    {aiCaption?.data}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={async () => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}


