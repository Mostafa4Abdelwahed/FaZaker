function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-5 py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main"></div>
      <span className="ml-3 text-gray-600">جاري التحميل...</span>
    </div>
  );
}

export default LoadingSpinner; 