import LoadingSpinner from "@/components/LoadingSpinner";

const loading = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
