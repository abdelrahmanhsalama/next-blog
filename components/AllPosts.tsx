import { ArticlesComponent } from "@/lib/types";
import ArticleCard from "./ArticleCard";
import { images } from "@/lib/constants";

const AllPosts = ({ articles, className }: ArticlesComponent) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <p className="dart:text-white text-2xl font-semibold">All Blog Posts</p>
      <div className="flex flex-col md:grid md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: articles.length }, (_, i) => (
          <ArticleCard
            style="default"
            main={false}
            article={articles[i]}
            image={images[i + 4]}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
