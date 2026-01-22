"use client";

import Header from "@/components/Header";

const Error = () => {
  return (
    <div className="dark:bg-[#090d1f] dark:text-white px-8">
      <Header version="mini" className="my-8" />
      <main className="flex justify-center items-center">
        <p>Error Loading Article 😢</p>
      </main>
    </div>
  );
};

export default Error;
