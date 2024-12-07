'use client'
import {Button, Checkbox, Label, Select, TextInput} from "flowbite-react";
import Link from "next/link";
import React, {useState} from "react";
import {Cat} from "@/app/(index)/create-pet-profile/Cat";
import {Dog} from "@/app/(index)/create-pet-profile/Dog";
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";
import {preformCreatePet} from "@/utils/models/pet/pet.action";
import {string} from "postcss-selector-parser";
import {Status} from "@/utils/interfaces/Status";
import {reset} from "next/dist/lib/picocolors";
import {SignUpSchema} from "@/utils/models/sign-up/sign-up.model";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {z} from "zod";
import {DisplayStatus} from "@/components/navigation/DisplayStatus";

export default function () {
    const [selectedValue, setSelectedValue] = useState<string>('Model Type');
    const [status, setStatus] = useState<Status | null>(null);
    const defaultValues: Pet = {
        petId: "",
        petProfileId: "",
        petBreed: "",
        petImageUrl: "",
        petName: "",
        petPersonality: "",
        petSize: "",
        petType: ""
    }

    const PartialPetSchema = PetSchema.omit({petId: true, petProfileId: true})

    type PartialPet = z.infer< typeof PartialPetSchema>
    const {register, handleSubmit, control, reset, formState: {errors}} = useForm<PartialPet>({
        resolver: zodResolver(PartialPetSchema),
        defaultValues,
        mode: 'onBlur'
    })




    const createPets = async (data:PartialPet) => {
        try {
            const pet= {...data, petProfileId: '', petId: ''}
            const response = await preformCreatePet(pet)

            if (response.status === 200) {
                reset()
            }
            setStatus(response)
        }catch (error) {
            setStatus({status:500, message: 'Internal Server Error try again later', data: undefined})
        }
    }
    return (
        <>

            <div>
                <img className="rounded-full w-36 h-36 mx-auto my-5" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <div className="flex justify-center">
            <form onSubmit={handleSubmit(createPets)} className="">
                <div className={"max-w-md"}>
                    <h3 className={"text-center"}>Create Pet Profile</h3>

                    <div className= "max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="SelectTypeofPet" value="Select Type of Pet"/>
                        </div>

                        <Select {...register('petType')} id="Selected Pet" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} required>
                            <option value={""}>Cat or Dog</option>
                            <option value={"Cat"}>Cat</option>
                            <option value={"Dog"}>Dog</option>
                        </Select>

                        {selectedValue === 'Cat' && (
                            <Cat register={register}/>
                        )}

                        {selectedValue === 'Dog' && (
                            <Dog register={register}/>
                        )}
                        <Button type="submit" className=" mx-auto my-4"> Edit Profile | Save </Button>

                    </div>

                </div>
                <DisplayStatus  status={status}/>
            </form>

            </div>



        </>
    )
}