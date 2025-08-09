"use client";
import CategoryTableRow from "@/components/molecules/CategoryTableRow";

export default function CategoryTable({ categories, onDelete }) {
  return (
    <div className="bg-dark/90 shadow rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-dark/50 text-main text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {categories?.map((cat) => (
            <CategoryTableRow key={cat._id} category={cat} onDelete={onDelete} />
          ))}
          {categories?.length === 0 && (
            <tr>
              <td colSpan="2" className="p-3 text-center text-gray-500">
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
