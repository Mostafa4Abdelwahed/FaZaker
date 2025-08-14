import Button from "../atoms/Button";

function Pagination({ currentPage, totalPages, onPageChange, hasMore, onLoadMore }) {
  if (totalPages <= 1) return null;

  return (
    <div className="w-full flex items-center justify-center mt-8">
      {hasMore ? (
        <Button
          onClick={onLoadMore} 
          className="px-16 mx-auto"
        >
          المزيد
        </Button>
      ) : (
        <div className="text-gray-500 text-center">
          تم عرض جميع المحتويات
        </div>
      )}
    </div>
  );
}

export default Pagination; 