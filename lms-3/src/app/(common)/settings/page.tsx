import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import SettingsField from "./_components/SettingsField";

const page = async () => {
  // Demo version - bypass authentication
  return (
    <div className="h-[calc(100vh-100px)] w-full flex flex-col justify-center items-center gap-6 p-4 text-center">
      <h1 className="text-3xl font-bold">Settings Page - Demo Mode</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        This would show application settings and user preferences in the full version.
      </p>
      
      <div className="mt-8 space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-md">
          <h3 className="font-semibold text-lg mb-3">Demo Settings:</h3>
          <ul className="text-left space-y-2 text-sm">
            <li>• Profile preferences</li>
            <li>• Notification settings</li>
            <li>• Privacy controls</li>
            <li>• Email preferences</li>
            <li>• Account management</li>
            <li>• Theme settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  // Original code commented out for demo
  // const { userId } = auth();
  // if (!userId)
  //   return (
  //     <div className="h-[calc(100vh-100px)] w-full flex flex-col justify-center items-center gap-3">
  //       Sign in to view your settings
  //       <Button>
  //         <SignInButton mode="modal" />
  //       </Button>
  //     </div>
  //   );

  // const user = await prisma.user.findUnique({
  //   where: {
  //     authId: userId,
  //   },
  // });
  // if (!user) redirect("/not-authorized");

  return (
    <div className="w-full h-full overflow-y-auto p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mb-4 text-sm text-gray-600">
            (Manage your account settings)
          </p>
        </div>
      </div>
      <SettingsField user={user} />
    </div>
  );
};

export default page;
