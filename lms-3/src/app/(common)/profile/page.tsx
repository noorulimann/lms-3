import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  // Demo version - bypass authentication
  return (
    <div className="h-[calc(100vh-100px)] w-full flex flex-col justify-center items-center gap-6 p-4 text-center">
      <h1 className="text-3xl font-bold">Profile Page - Demo Mode</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        This would show your personal profile, achievements, and course progress in the full version.
      </p>
      
      <div className="mt-8 space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-md">
          <h3 className="font-semibold text-lg mb-3">Demo Features:</h3>
          <ul className="text-left space-y-2 text-sm">
            <li>• User profile information</li>
            <li>• Course completion certificates</li>
            <li>• Learning goals and progress</li>
            <li>• Achievement badges</li>
            <li>• Course enrollment history</li>
            <li>• Personal dashboard</li>
          </ul>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;