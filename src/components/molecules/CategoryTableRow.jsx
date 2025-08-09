"use client";
import Button from "@/components/atoms/Button";

export default function CategoryTableRow({ category, onDelete }) {
  return (
    <tr className="border-t border-t-gray-400/20">
      <td className="p-3">{category.name}</td>
      <td className="p-3">
        <Button onClick={() => onDelete(category._id)}>Delete</Button>
      </td>
    </tr>
  );
}
