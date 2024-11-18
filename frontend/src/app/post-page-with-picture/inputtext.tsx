
"use client";

import { Label, Textarea } from "flowbite-react";
import ProfileTab from "@/components/ProfileTab";

export function InputText() {
    return (
        <div className="mx-auto px-4">
            <Textarea id="comment"  placeholder="Start Typing..." required rows={3} />
        </div>
    );
}