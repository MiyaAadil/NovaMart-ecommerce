const SkeletonCard = () => {
  return (
    <div className="rounded-2xl px-10 mt-10 animate-pulse">
      <div className="h-40 bg-gray-200 rounded-2xl"></div>

      <div className="mt-4 h-5 bg-gray-200 rounded-2xl w-3/4"></div>

      <div className="mt-2 h-4 bg-gray-200 rounded-2xl w-1/2"></div>

      <div className="mt-4 h-10 bg-gray-200 rounded-2xl"></div>
    </div>
  );
};

export default SkeletonCard;