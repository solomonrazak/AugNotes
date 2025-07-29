"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { logOutAction } from "@/actions/users";
import { useRouter } from "next/navigation";


const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  

  const handleLogout = async () => {
    setLoading(true);

    const {errorMessage} = await logOutAction();

    
    if(!errorMessage){
        toast.success("Logged Out", {
            description: "You have been Successfully Logged Out"
        })
        router.replace("/login");
    }
    
    setLoading(false)

  };

  return (
    <Button
      variant="outline"
      disabled={loading}
      onClick={handleLogout}
      className="w-24 cursor-pointer"
    >
      {loading ? <Loader2 className="animate-spin"/> : "Log Out"}
    </Button>
  );
};

export default LogoutButton;
