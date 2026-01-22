import Link from "next/link";
import NavBar from "./NavBar";

const Header = ({
  version,
  className,
}: {
  version: "full" | "mini";
  className?: string;
}) => {
  return (
    <header className={`${className}`}>
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          Next-Blog
        </Link>
        <NavBar />
      </div>
      {version == "full" && (
        <p className="border-t border-b mt-8 py-4 border-[#a8a8a8] dark:border-[#555966] uppercase font-bold text-6xl md:text-8xl w-full text-center tracking-widest">
          The Blog
        </p>
      )}
    </header>
  );
};

export default Header;
