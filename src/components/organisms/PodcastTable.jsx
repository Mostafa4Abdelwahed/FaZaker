"use client";
import PodcastTableRow from "@/components/molecules/PodcastTableRow";

export default function PodcastTable({ podcasts, onDelete }) {
  return (
    <div className="bg-dark/90 shadow rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-dark/50 text-main text-left">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Image</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {podcasts?.map((pod) => (
            <PodcastTableRow key={pod._id} podcast={pod} onDelete={onDelete} />
          ))}
          {podcasts?.length === 0 && (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No podcasts found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
