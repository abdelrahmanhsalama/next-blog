"use client";

import Header from "@/components/Header";

const Error = () => {
  return (
    <div className="dark:bg-[#090d1f] dark:text-white px-8">
      <Header version="full" className="my-8" />
      <main className="flex justify-center items-center">
        <p>Error Loading Articles 😢</p>
      </main>
    </div>
  );
};

export default Error;
