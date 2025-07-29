import Image from "next/image";
import Link from "next/link";
import { shadow } from "@/styles/utils";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/server";
import { Session } from "@supabase/supabase-js";


const Header = async ({ session }: { session: Session | null }) => {
  const user = session?.user
  return (
    <header
      className="bg-popover relative flex h-20 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/images/notes-logo-nb.png"
          width={60}
          height={60}
          alt="logo image"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col -space-y-8 font-bold">
          𝓐𝓾𝓰<span>𝓝𝓸𝓽𝓮𝓼</span>
        </h1>
      </Link>
      <div className="flex gap-3">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden md:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
       <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
