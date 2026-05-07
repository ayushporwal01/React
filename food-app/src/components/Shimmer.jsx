export default function Shimmer() {
  return (
    <div className="w-full h-full p-3">
      <div className="w-full h-45 bg-gray-200 rounded-xl animate-pulse"></div>
      <div className="pl-2 mt-4 space-y-2">
        <div className="w-64 h-4.5 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-40 h-4.5 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-64 h-4.5 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-20 h-4.5 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
