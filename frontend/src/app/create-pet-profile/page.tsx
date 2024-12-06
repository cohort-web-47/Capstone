import {Button, Checkbox, Label, Select, TextInput} from "flowbite-react";
import Link from "next/link";


export default function () {
    return (
        <>
            <div>
                <img className="rounded-full w-36 h-36 mx-auto" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto">
                <div>
                    <h3 className={"text-center"}>Create PetModel Profile</h3>
<br/>
                    <div className="w-36">
                        <div className="mb-2 block">
                            <Label htmlFor="SelectTypeofPet" value="Select Type of PetModel"/>
                        </div>
                        <Select id="Selected Pet" required>
                            <option>PetModel Type</option>
                            <option>Cat</option>
                            <option>Dog</option>
                        </Select>
                    </div>

                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="PetModel Name"/>
                    </div>
                    <TextInput id="petname" type="PetModel Name" placeholder='"PetModel Name"' required shadow/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="DogBreed" value="Dog Breed"/>
                    </div>
                    <TextInput id="DogBreed" type="DogBreed" placeholder='"Dog Breed"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="DogSize" value="Size of your dog"/>
                    </div>
                    <Select id="DogSize" required>
                        <option>Size of your dog</option>
                        <option>Tea Cup</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="Personality" value="Personality of your dog"/>
                    </div>
                    <Select id="Personality" required>
                        <option>Personality</option>
                        <option>Calm</option>
                        <option>Playful</option>
                        <option>Excited</option>
                        <option>Grumpy</option>
                    </Select>
                </div>

                <Button type="submit"> Edit Profile | Save </Button>
            </form>

<br/><br/><br/>

            <div>
                <img className="rounded-full w-36 h-36 mx-auto" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto">
                <h3>Create PetModel Profile</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="PetModel Name"/>
                    </div>
                    <TextInput id="petname" type="PetModel Name" placeholder='"PetModel Name"' required shadow/>
                </div>
                <div>
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

                <Button type="submit"> Edit Profile | Save </Button>
            </form>


        </>
    )
}