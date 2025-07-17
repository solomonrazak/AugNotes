"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";


const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  

  const handleLogout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const errorMessage = null;
    if(!errorMessage){
        toast.success("Logged Out", {
            description: "You have been Successfully Logged Out"
        })
    }
    
    setLoading(false)

  };

  return (
    <Button
      variant="outline"
      disabled={loading}
      onClick={handleLogout}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin"/> : "Log Out"}
    </Button>
  );
};

export default LogoutButton;
