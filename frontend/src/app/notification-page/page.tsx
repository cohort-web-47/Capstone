import React from 'react'
import {Card} from "flowbite-react";
import Image from "next/image";

export default function () {
    return (
        <>

            <div className="w-1/2 h-20 bg- rounded-xl my-6 self-center flex items-center gap-6 md:w-3/4">
                <div className={"rounded-full w-12 h-12 text-center"}>
                    <img className="rounded-full w-12 h-12" src={"https://picsum.photos/200/300"} alt="profile picture"/>
                </div>
                <p className={"justify-center"}>Profile Name like's you post</p>
            </div>


        </>

    )

}

