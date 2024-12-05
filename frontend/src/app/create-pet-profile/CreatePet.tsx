'use client'
import {Button, Checkbox, Label, Select, TextInput} from "flowbite-react";
import Link from "next/link";
import React, {useState} from "react";
import {Cat} from "@/app/create-pet-profile/Cat";
import {Dog} from "@/app/create-pet-profile/Dog";
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";
import {preformCreatePet} from "@/utils/models/pet/pet.action";
import {string} from "postcss-selector-parser";
import {Status} from "@/utils/interfaces/Status";
import {reset} from "next/dist/lib/picocolors";
import {SignUpSchema} from "@/utils/models/sign-up/sign-up.model";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

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

    const {register, handleSubmit, control, reset, formState: {errors}} = useForm<Pet>({
        resolver: zodResolver(PetSchema),
        defaultValues,
        mode: 'onBlur'
    })
    const createPets = async (data:Pet) => {
        try {
            const response = await preformCreatePet(data)

            if (response.status === 200) {
                reset()
            }
            setStatus(response)
        }catch (error) {setStatus({status:500, message: 'Internal Server Error try again later', data: undefined})}
    }
    return (
        <>

            <div>
                <img className="rounded-full w-36 h-36 mx-auto" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <form onSubmit={handleSubmit(createPets)} className="flex max-w-md flex-col gap-4 mx-auto">
                <div>
                    <h3 className={"text-center"}>Create Pet Profile</h3>

                    <div className="w-36">
                        <div className="mb-2 block">
                            <Label htmlFor="SelectTypeofPet" value="Select Type of PetModel"/>
                        </div>

                        <Select id="Selected Pet" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} required>
                            <option value={""}>PetModel Type</option>
                            <option value={"Cat"}>Cat</option>
                            <option value={"Dog"}>Dog</option>
                        </Select>

                        {selectedValue === 'Cat' && (
                            <Cat register={register}/>
                        )}

                        {selectedValue === 'Dog' && (
                            <Dog register={register}/>
                        )}
                        <Button type="submit"> Edit Profile | Save </Button>

                    </div>

                </div>

            </form>
            <DevTool control={control} />



        </>
    )
}