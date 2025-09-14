import { prisma } from "@/lib/db";
import Categories from "./_components/Categories";
import Courses from "./_components/Courses";
import { Input } from "@/components/ui/input";
import SearchInput from "./_components/SearchInput";

const page = async ({ searchParams }: { searchParams: { search: string } }) => {
  // For demo purposes, use mock categories instead of database call
  const cats = [
    { id: "1", title: "Web Development", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", title: "Mobile Development", createdAt: new Date(), updatedAt: new Date() },
    { id: "3", title: "Data Science", createdAt: new Date(), updatedAt: new Date() },
    { id: "4", title: "Machine Learning", createdAt: new Date(), updatedAt: new Date() },
    { id: "5", title: "Cloud Computing", createdAt: new Date(), updatedAt: new Date() },
    { id: "6", title: "Cybersecurity", createdAt: new Date(), updatedAt: new Date() }
  ];
  
  // Original database call commented out for demo
  // const cats = await prisma.category.findMany();
  return (
    <div className="p-4  min-h-[calc(100vh-100px)] overflow-y-auto">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center ">
        <div>
          <h1 className="text-2xl font-semibold ">Courses</h1>
          <p className="mb-4 text-sm text-gray-600">
            (Choose your course and dive into career)
          </p>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      <div className="w-full mb-4">
        <Categories categories={cats} search={searchParams.search} />
      </div>
      <Courses />
    </div>
  );
};

export default page;
