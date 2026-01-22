import AllPosts from "@/components/AllPosts";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import RecentPosts from "@/components/RecentPosts";
import { getAllPosts, getRecentPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "Blog Viewer, built using Next.js.",
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1");
  const limit = 6;

  const { posts, total } = await getAllPosts(page, limit);
  const { posts: recentPosts } = await getRecentPosts(4);

  return (
    <div className="dark:bg-[#090d1f] dark:text-white px-8">
      <Header version="full" className="my-8" />
      <main>
        <RecentPosts articles={recentPosts} className="my-8" />
        <AllPosts articles={posts} className="my-8" />
        <Pagination
          pages={Math.ceil((total - 4) / limit)}
          currentPage={page}
          className="my-8"
        />
      </main>
    </div>
  );
}
