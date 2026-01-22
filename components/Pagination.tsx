"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PaginationProps = {
  pages: number;
  currentPage: number;
  className?: string;
};

export default function Pagination({
  pages = 5,
  currentPage = 1,
  className,
}: PaginationProps) {
  const router = useRouter();

  const safeCurrentPage = Math.max(1, Math.min(currentPage, pages));

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    for (let i = 1; i <= Math.min(2, pages); i++) {
      pageNumbers.push(i);
    }

    if (safeCurrentPage > 4) {
      pageNumbers.push("...");
    }

    const start = Math.max(3, safeCurrentPage - 1);
    const end = Math.min(pages - 2, safeCurrentPage + 1);
    for (let i = start; i <= end; i++) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }

    if (safeCurrentPage < pages - 3) {
      pageNumbers.push("...");
    }

    for (let i = Math.max(3, pages - 1); i <= pages; i++) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const handlePrevious = () => {
    if (safeCurrentPage > 1) {
      router.push(`/?page=${safeCurrentPage - 1}`);
    }
  };

  const handleNext = () => {
    if (safeCurrentPage < pages) {
      router.push(`/?page=${safeCurrentPage + 1}`);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-t pt-8 border-[#a8a8a8] dark:border-[#555966] ${className}`}
    >
      <button
        className={`flex items-center gap-1 text-[#667085] dark:text-[#efefef] border-b border-transparent hover:border-[#667085] transition-border duration-250 ${
          safeCurrentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={handlePrevious}
        disabled={safeCurrentPage === 1}
      >
        <Icon icon="lucide:arrow-left" />
        Previous
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span
              key={`ellipsis-${index}`}
              className="flex items-center justify-center w-10 h-10 text-[#667085] dark:text-[#eeeeee]"
            >
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={`/posts?page=${page}`}
              className={`flex items-center justify-center text-[#667085] dark:text-[#eeeeee] w-10 h-10 rounded cursor-pointer hover:bg-[#F9F5FF] transition-all duration-250 hover:dark:text-black ${
                page === safeCurrentPage ? "bg-[#F9F5FF] dark:text-black" : ""
              }`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      <button
        className={`flex items-center gap-1 text-[#667085] dark:text-[#efefef] border-b border-transparent hover:border-[#667085] dark:hover:border-[#efefef] transition-border duration-250 ${
          safeCurrentPage === pages
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={handleNext}
        disabled={safeCurrentPage === pages}
      >
        Next
        <Icon icon="lucide:arrow-right" />
      </button>
    </div>
  );
}
