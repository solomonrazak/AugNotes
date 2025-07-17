"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  type: "login" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isLoginForm = type === "login";

  const handleSubmit = (formData: FormData) => {
    console.log("form submitted");
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-3">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            disabled={isPending}
          />
        </div>

        <Button className="mt-3 w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-center text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}
          <Link
            href={isLoginForm ? "/sign-up" : "login"}
            className={`ml-1 text-blue-500 ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardContent>
    </form>
  );
};

export default AuthForm;
