import ArticleCard from "./ArticleCard";
import { ArticlesComponent } from "@/lib/types";
import { images } from "@/lib/constants";

const RecentPosts = ({ articles, className }: ArticlesComponent) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <p className="dart:text-white text-2xl font-semibold">
        Recent Blog Posts
      </p>
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-4">
        <div className="row-span-2 col-span-1">
          <ArticleCard
            style="default"
            article={articles[0]}
            image={images[0]}
            main={true}
          />
        </div>
        <div>
          <ArticleCard style="small" article={articles[1]} image={images[1]} />
        </div>
        <div>
          <ArticleCard style="small" article={articles[2]} image={images[2]} />
        </div>
      </div>
      <div>
        <ArticleCard style="wide" article={articles[3]} image={images[3]} />
      </div>
    </div>
  );
};

export default RecentPosts;
