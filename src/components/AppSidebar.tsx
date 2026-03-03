import { getUser } from "@/auth/server";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Note } from "@prisma/client";
import { prisma } from "@/db/prisma";
import Link from "next/link";
import SidebarGroupContent from "./SidebarGroupContent";
import { Session } from "@supabase/supabase-js";


const AppSidebar = async ({ session }: { session: Session | null }) => {
//   const user = await getUser();
  const user = session?.user
  

  let notes: Note[] = [];
  if (user) {
    notes = await prisma.note.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel className="my-2 text-lg">
          {user ? (
            "Your Notes"
          ) : (
            <p>
              <Link href="" className="underline">
                Login
              </Link>
              to see your notes
            </p>
          )}
        </SidebarGroupLabel>
        {user && <SidebarGroupContent notes={notes} />}
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
