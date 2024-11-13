
"use client";

import { Label, Textarea } from "flowbite-react";
import ProfileTab from "@/components/ProfileTab";

export function InputText() {
    return (
        <div className="max-w-md p-4">
            <Textarea id="comment"  placeholder="Start Typing..." required rows={15} />
        </div>
    );
}

