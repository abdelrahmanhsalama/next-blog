import ArticleCard from "./ArticleCard";
import { ArticlesComponent } from "@/lib/types";
import { images } from "@/lib/constants";
import { getRecentPosts } from "@/lib/api";

const AsideRecentPosts = async ({ className }: Partial<ArticlesComponent>) => {
  const { posts } = await getRecentPosts(3);
  return (
    <div className={`flex flex-col gap-4 mb-4 ${className}`}>
      <p className="dark:text-white text-2xl font-semibold">
        Recent Blog Posts
      </p>
      {posts.map((article, i) => (
        <ArticleCard
          key={article.id}
          style="default"
          article={article}
          image={images[i % images.length]}
        />
      ))}
    </div>
  );
};

export default AsideRecentPosts;
