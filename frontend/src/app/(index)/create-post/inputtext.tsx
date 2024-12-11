
"use client";

import { Label, Textarea } from "flowbite-react";
import ProfileTab from "@/components/ProfileTab";

type Props = {
    register: any,
    name: string,
}
export function InputText(props: Props) {
   const { register, name } = props;

    return (
        <div className="mx-auto px-4">
            <Textarea {...register(name)} id="comment"  placeholder="Start Typing..." required rows={15} />
        </div>
    );
}

