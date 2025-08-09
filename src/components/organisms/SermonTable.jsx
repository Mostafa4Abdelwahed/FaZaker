"use client";
import Button from "@/components/atoms/Button";

export default function SermonTable({ sermons, onDelete }) {
  return (
    <div className="bg-dark/90 shadow rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-dark/50 text-main text-left">
          <tr>
            <th className="p-3">Text</th>
            <th className="p-3">Sheikh</th>
            <th className="p-3">Voice</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {sermons?.map((sermon) => (
            <tr key={sermon._id} className="border-t border-t-gray-400/20">
              <td className="p-3">{sermon.text}</td>
              <td className="p-3">{sermon.sheikh}</td>
              <td className="p-3">
                <audio className="h-8" controls src={sermon.voice}></audio>
              </td>
              <td className="p-3">
                <Button onClick={() => onDelete(sermon._id)}>Delete</Button>
              </td>
            </tr>
          ))}
          {sermons?.length === 0 && (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-500">
                No sermons found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}