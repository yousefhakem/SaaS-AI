"use client";

import {SignInButton, UserButton} from "@clerk/nextjs"
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div>{`app/web ${JSON.stringify(users)}`}</div>
          <Button onClick={() => addUser()}>Add</Button>
          <UserButton />
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be Signed In</p>
        <SignInButton>Sign in</SignInButton>
      </Unauthenticated>
    </>
  );
}
