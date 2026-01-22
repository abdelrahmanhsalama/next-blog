import Image from "next/image";
import ArticleCategory from "./ArticleCategory";
import ArticleArrow from "./ArticleArrow";
import Link from "next/link";
import { Article } from "@/lib/types";

type ArticleCardProps = {
  style?: "default" | "small" | "wide";
  article: Article;
  image: string;
  main?: boolean;
};

const DefaultArticleCard = ({ article, image, main }: ArticleCardProps) => {
  const articleTitleLength = main === true ? 50 : 25;
  const articleBodyLength = 200;
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Link
        href={`./posts/${article.id}`}
        className="relative w-full aspect-5/2 overflow-hidden group"
      >
        <Image
          src={image}
          alt="Blog Post Cover"
          sizes={"(max-width: 768px) 100vw, 50vw"}
          fill
          className="object-cover transition-transform duration-250 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#090d1f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />
      </Link>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#6941C6]">
          Olivia Rhye • 1 Jan 2023
        </p>
        <p className="text-2xl font-semibold flex justify-between items-center">
          <Link
            href={`./posts/${article.id}`}
            className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer dark:text-white"
          >
            {article.title.length > articleTitleLength
              ? article.title.slice(0, articleTitleLength) + "..."
              : article.title}
          </Link>
          <Link href={`./posts/${article.id}`}>
            <ArticleArrow />
          </Link>
        </p>
        <p className="text-[#667085] dark:text-[#C0C5D0]">
          {article.body.length > articleBodyLength
            ? article.body.slice(0, articleBodyLength) + "..."
            : article.body}
        </p>
        <ArticleCategory category="Technology" />
      </div>
    </div>
  );
};

const SmallArticleCard = ({ article, image }: ArticleCardProps) => (
  <div className="w-full flex flex-col md:flex-row gap-4">
    <Link
      href={`./posts/${article.id}`}
      className="relative w-full md:w-1/2 aspect-5/2 overflow-hidden group"
    >
      <Image
        src={image}
        alt="Blog Post Cover"
        sizes={"(max-width: 768px) 100vw, 25vw"}
        fill
        className="object-cover transition-transform duration-250 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#090d1f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />{" "}
    </Link>
    <div className="space-y-2 flex-1/2">
      <p className="text-sm font-semibold text-[#6941C6]">
        Olivia Rhye • 1 Jan 2023
      </p>
      <p className="text-2xl font-semibold flex justify-between items-center">
        <Link
          href={`./posts/${article.id}`}
          className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer"
        >
          {" "}
          {article.title.length > 25
            ? article.title.slice(0, 25) + "..."
            : article.title}
        </Link>
      </p>
      <p className="text-[#667085] dark:text-[#C0C5D0]">
        {article.body.length > 100
          ? article.body.slice(0, 100) + "..."
          : article.body}
      </p>
      <ArticleCategory category="Technology" />
    </div>
  </div>
);

const WideArticleCard = ({ article, image }: ArticleCardProps) => (
  <div className="w-full h-full flex flex-col gap-4 lg:w-full lg:gap-8 lg:flex-row">
    <Link
      href={`./posts/${article.id}`}
      className="relative w-full lg:w-1/2 aspect-5/2 overflow-hidden group"
    >
      <Image
        src={image}
        alt="Blog Post Cover"
        sizes={"(max-width: 768px) 100vw, 50vw"}
        fill
        className="object-cover transition-transform duration-250 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#090d1f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />
    </Link>
    <div className="space-y-2 flex-1/2">
      <p className="text-sm font-semibold text-[#6941C6]">
        Olivia Rhye • 1 Jan 2023
      </p>
      <p className="text-2xl font-semibold flex justify-between items-center">
        <Link
          href={`./posts/${article.id}`}
          className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer"
        >
          {article.title.length > 50
            ? article.title.slice(0, 50) + "..."
            : article.title}
        </Link>
        <Link href={`./posts/${article.id}`}>
          <ArticleArrow />
        </Link>
      </p>
      <p className="text-[#667085] dark:text-[#C0C5D0]">
        {article.body.length > 200
          ? article.body.slice(0, 200) + "..."
          : article.body}
      </p>
      <ArticleCategory category="Technology" />
    </div>
  </div>
);

const ArticleCard = ({
  style = "default",
  article,
  image,
  main,
}: ArticleCardProps) => {
  if (style === "small")
    return <SmallArticleCard article={article} image={image} />;
  if (style === "wide")
    return <WideArticleCard article={article} image={image} />;
  return <DefaultArticleCard article={article} image={image} main={main} />;
};

export default ArticleCard;
