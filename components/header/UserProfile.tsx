"use client";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const UserProfileComponent = ({}) => {
  const user = useUser();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return <Skeleton className="size-9 opacity-10" />;
  }
  return (
    <div className="size-9 flex items-center justify-center ">
      <ClerkLoaded>
        {user.isSignedIn ? (
          <SignedIn>
            <UserButton />
          </SignedIn>
        ) : (
          <SignInButton mode="modal">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
          </SignInButton>
        )}
      </ClerkLoaded>
    </div>
  );
};

export default UserProfileComponent;
