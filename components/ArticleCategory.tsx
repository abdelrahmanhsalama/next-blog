const ArticleCategory = ({ category }: { category: string }) => {
  return (
    <p className="text-sm px-2 py-1 bg-purple-200 text-purple-800 w-min rounded-[16px]">
      {category}
    </p>
  );
};

export default ArticleCategory;
