import {Button, Label, Select, TextInput} from "flowbite-react";
// import React from "types-react";

type Props = {
    register:any
}
export function Cat(props:Props) {
const {register} = props
    return (
        <>


                <div className=" items-center max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="Pet Name"/>
                    </div>
                    <TextInput id="petname" type="PetModel Name" placeholder='"Pet Name"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="CatBreed" value="Cat Breed"/>
                    </div>
                    <TextInput id="CatBreed" type="CatBreed" placeholder='"Cat Breed"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="Cat In/Out" value="Inside or Outside"/>
                    </div>
                    <Select id="Type of Cat" required>
                        <option>Indoor/Outdoor</option>
                        <option>Inside</option>
                        <option>Outside</option>
                        <option>In & Out</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="Personality" value="Personality of your dog"/>
                    </div>
                    <Select id="Personality" required>
                        <option>Personality</option>
                        <option>Fancy</option>
                        <option>Calm</option>
                        <option>Playful</option>
                        <option>Excited</option>
                        <option>Snooty</option>
                        <option>Loner</option>
                    </Select>
                </div>

        </>
    )
}