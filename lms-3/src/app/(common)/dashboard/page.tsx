import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CourseCard from "./_components/CourseCard";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async ({ params }: { params: string }) => {
  // For demo purposes, bypass authentication
  // const { userId } = auth();
  // if (!userId)
  //   return (
  //     <div className="h-[calc(100vh-100px)] w-full flex flex-col justify-center items-center gap-3">
  //       Sign in to view your courses
  //       <Button>
  //         <SignInButton mode="redirect" forceRedirectUrl="/dashboard" />
  //       </Button>
  //     </div>
  //   );

  // For demo, show empty dashboard since no user data
  const user = null; // Set to null for demo
  // const user = await prisma.user.findUnique({
  //   where: {
  //     authId: userId,
  //   },
  //   include: {
  //     accesses: {
  //       include: {
  //         course: {
  //           include: {
  //             _count: {
  //               select: {
  //                 chapters: {
  //                   where: {
  //                     isPublished: true,
  //                   },
  //                 },
  //               },
  //             },
  //             user: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  // if (!user) redirect("/not-authorized");
  return (
    <div className="w-full min-h-[calc(100vh-100px)] p-4 space-y-3 overflow-y-auto">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold">Dashboard - Demo Mode</h1>
          <p className="mb-4 text-xs text-gray-600">
            (This is a demo version - sign in to see your actual courses)
          </p>
        </div>
      </div>
      <div className="w-full min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-sm md:text-lg text-center">
          Welcome to the LMS Dashboard!
        </p>
        <p className="text-center text-gray-600">
          In the full version, you would see your enrolled courses here.
        </p>
        <Link href="/courses">
          <Button>Browse Available Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
