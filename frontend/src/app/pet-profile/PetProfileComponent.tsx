import React from "react";
import {Avatar} from "flowbite-react";

export default function () {
    return (


        <>

            <div
                className="container mx-auto flex flex-col-reverse items-start justify-start bg-[url('https://picsum.photos/seed/picsum/2000')] h-72 bg-cover bg-center">
                <Avatar img="https://picsum.photos/id/237/200/300" rounded className="">
                    <div className="space-y-1 font-medium dark:text-white border-2   ">
                        <div>Fido the dog</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </Avatar>
            </div>
        </>

    );

}