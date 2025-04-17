"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Note it</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Note it is the connected workspace where <br /> better, faster work happens.
            </h3>
            <Button>
                Enter Note it <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
        </div>
    )
}