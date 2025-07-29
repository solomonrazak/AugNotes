import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import { createClient } from "@/auth/server";
import { Session } from "@supabase/supabase-js";



export const metadata: Metadata = {
  title: "Aug Notes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = createClient();
  const { data: { session } } = await (await supabase).auth.getSession();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full min-h-screen flex flex-col">
          <Header session={session}/>
          <main className="flex flex-1 flex-col px-4 xl:px-8">
          {children}
          </main>
          </div>
         <Toaster position="top-right" richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
