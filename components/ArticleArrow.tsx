const ArticleArrow = () => {
  return (
    <span className="cursor-pointer">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#1A1A1A] dark:stroke-white"
      >
        <path
          d="M1 11L11 1M11 1H1M11 1V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default ArticleArrow;
