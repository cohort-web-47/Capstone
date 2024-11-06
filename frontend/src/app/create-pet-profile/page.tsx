import {Button, Checkbox, Label, Select, TextInput} from "flowbite-react";
import Link from "next/link";

export default function () {
    return (
        <>
            <div>
                <img className="rounded-full w-36 h-36 mx-auto" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto">
                <h3>Create Pet Profile</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="Pet Name"/>
                    </div>
                    <TextInput id="petname" type="Pet Name" placeholder='"Pet Name"' required shadow/>
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
                    <Select id="Personality" required >
                        <option>Personality</option>
                        <option>Calm</option>
                        <option>Playful</option>
                        <option>Excited</option>
                        <option>Grumpy</option>
                    </Select>
                </div>

                <Button type="submit"> Edit Profile | Save </Button>
            </form>

        </>
    )
}