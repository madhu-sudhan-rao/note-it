"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Note it</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Note it is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Start Noting <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      )}
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}

      {
        !isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
                <Button>
                    Get Note it
                    <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
            </SignInButton>
        )
      }
    </div>
  );
};
